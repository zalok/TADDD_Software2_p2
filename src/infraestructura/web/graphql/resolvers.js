const { GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLList, GraphQLSchema, GraphQLNonNull } = require('graphql');
const { MedicamentoType, FormaInput } = require('./schema');

function createRootSchema(medicamentoService) {
  const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
      medicamento: {
        type: MedicamentoType,
        args: { id: { type: new GraphQLNonNull(GraphQLString) } },
        resolve: async (_, { id }) => {
          const med = await medicamentoService.obtenerMedicamento(id);
          return med ? med.toObject() : null;
        }
      },
      medicamentos: {
        type: new GraphQLList(MedicamentoType),
        resolve: async () => {
          const meds = await medicamentoService.obtenerTodosLosMedicamentos();
          return meds.map(m => m.toObject());
        }
      },
      buscarPorPrincipio: {
        type: new GraphQLList(MedicamentoType),
        args: { principio: { type: new GraphQLNonNull(GraphQLString) } },
        resolve: async (_, { principio }) => {
          const meds = await medicamentoService.buscarPorPrincipioActivo(principio);
          return meds.map(m => m.toObject());
        }
      },
      buscarPorCategoria: {
        type: new GraphQLList(MedicamentoType),
        args: { categoria: { type: new GraphQLNonNull(GraphQLString) } },
        resolve: async (_, { categoria }) => {
          const meds = await medicamentoService.buscarPorCategoria(categoria);
          return meds.map(m => m.toObject());
        }
      }
    }
  });

  const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      crearMedicamento: {
        type: MedicamentoType,
        args: {
          principio_activo: { type: new GraphQLNonNull(GraphQLString) },
          forma: { type: FormaInput },
          categoria: { type: GraphQLString },
          es_controlado: { type: GraphQLBoolean },
          requiere_receta: { type: GraphQLBoolean },
          via_administracion: { type: GraphQLString },
          alternativas: { type: new GraphQLList(GraphQLString) }
        },
        resolve: async (_, args) => {
          // Pasar directamente el objeto anidado (forma) tal como aparece en poblar_db
          const creado = await medicamentoService.crearMedicamento(args);
          return creado ? creado.toObject() : null;
        }
      },
      actualizarMedicamento: {
        type: MedicamentoType,
        args: {
          id: { type: new GraphQLNonNull(GraphQLString) },
          principio_activo: { type: GraphQLString },
          forma: { type: FormaInput },
          categoria: { type: GraphQLString },
          es_controlado: { type: GraphQLBoolean },
          requiere_receta: { type: GraphQLBoolean },
          via_administracion: { type: GraphQLString },
          alternativas: { type: new GraphQLList(GraphQLString) }
        },
        resolve: async (_, { id, ...rest }) => {
          const actualizado = await medicamentoService.actualizarMedicamento(id, rest);
          return actualizado ? actualizado.toObject() : null;
        }
      },
      eliminarMedicamento: {
        type: GraphQLBoolean,
        args: { id: { type: new GraphQLNonNull(GraphQLString) } },
        resolve: async (_, { id }) => {
          return await medicamentoService.eliminarMedicamento(id);
        }
      }
    }
  });

  return new GraphQLSchema({ query: Query, mutation: Mutation });
}

module.exports = { createRootSchema };
