// src/main.js
const express = require('express');
const { MongoClient } = require('mongodb');
require('dotenv').config();

// Importaciones
const MongoRepositorioMedicamento = require('./infraestructura/db/repositorioMedicamentoMongoDB');
const MedicamentoService = require('./aplicacion/servicios/servicioMedicamento');
const MedicamentoController = require('./aplicacion/controladores/controladorMedicamento');
const createMedicamentoRoutes = require('./infraestructura/web/rutas/rutasMedicamento');

// Importar la entidad Medicamento
const Medicamento = require('./dominio/entidades/medicamento');

class App {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.medicamentoController = null;
    }

    async initialize() {
        // Configuración de middleware
        this.app.use(express.json());

        // Conexión a MongoDB
        const client = new MongoClient(process.env.MONGO_URI || 'mongodb://localhost:27017');
        await client.connect();
        const db = client.db('farmaciaDB');

        // Inyección de dependencias
        const medicamentoRepository = new MongoRepositorioMedicamento(db);
        const medicamentoService = new MedicamentoService(medicamentoRepository);
        this.medicamentoController = new MedicamentoController(medicamentoService);

        // Configuración de rutas
        const medicamentoRoutes = createMedicamentoRoutes(this.medicamentoController);
        this.app.use('/medicamentos', medicamentoRoutes);

        // Ruta de salud
        this.app.get('/health', (req, res) => {
            res.json({ status: 'OK', message: 'API de Farmacia funcionando' });
        });

        // Manejo de errores 404
        this.app.use('*', (req, res) => {
            res.status(404).json({
                success: false,
                error: 'Ruta no encontrada'
            });
        });
    }

    start() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en puerto ${this.port}`);
        });
    }
}

// Inicialización de la aplicación
async function main() {
    const app = new App();
    await app.initialize();
    app.start();
}

main().catch(console.error);