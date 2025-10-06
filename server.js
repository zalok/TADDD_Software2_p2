const express = require('express');
const dotenv = require('dotenv');
const { MongoClient } = require('mongodb');
const jwt = require('jsonwebtoken');

dotenv.config();

const MongoRepositorioMedicamento = require('./src/infraestructura/db/repositorioMedicamentoMongoDB');
const MedicamentoService = require('./src/aplicacion/servicios/servicioMedicamento');
const MedicamentoController = require('./src/aplicacion/controladores/controladorMedicamento');
const createMedicamentoRoutes = require('./src/infraestructura/web/rutas/rutasMedicamento');

// Variables de entorno
const mongoUri = process.env.MONGO_URI;
const dbName = process.env.MONGO_DBNAME || 'farmacia';  //
const port = process.env.PORT || 8000;
const jwtSecret = process.env.JWT_SECRET;

const client = new MongoClient(mongoUri);

class App {
  constructor() {
    this.app = express();
    this.port = port;
    this.medicamentoController = null;
  }

  async initialize() {
    // Middlewares
    this.app.use(express.json());

    // Conexión con MongoDB
    try {
      await client.connect();
      console.log('✅ Conectado a MongoDB');
    } catch (error) {
      console.error('❌ Error al conectar a MongoDB:', error);
      process.exit(1);
    }

    // Obtenemos la base de datos correcta
    const db = client.db(dbName);

    // Inyección de dependencias
    const medicamentoRepository = new MongoRepositorioMedicamento(db);
    const medicamentoService = new MedicamentoService(medicamentoRepository);
    this.medicamentoController = new MedicamentoController(medicamentoService);
    
      // GraphQL
      const { graphqlHTTP } = require('express-graphql');
      const { createRootSchema } = require('./src/infraestructura/web/graphql/resolvers');
    
      // GraphQL schema (inyección de servicio)
      const graphqlSchema = createRootSchema(medicamentoService);

    // Configuración de rutas
    const medicamentoRoutes = createMedicamentoRoutes(this.medicamentoController);
    this.app.use('/medicamentos', medicamentoRoutes);
    
      // Montar endpoint /graphql
      this.app.use('/graphql', graphqlHTTP({
        schema: graphqlSchema,
        graphiql: process.env.NODE_ENV !== 'production'
      }));

    // Ruta de salud
    this.app.get('/health', (req, res) => {
      res.json({ status: 'OK', message: 'API de Farmacia funcionando' });
    });

   //manejo de errores 404
    this.app.use((req, res) => {
      res.status(404).json({
        success: false,
        error: 'Ruta no encontrada'
      });
    });
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`🚀 Servidor corriendo en puerto ${this.port}`);
    });
  }
}

// Inicializar app
async function main() {
  const app = new App();
  await app.initialize();
  app.start();
}

main().catch(console.error);
