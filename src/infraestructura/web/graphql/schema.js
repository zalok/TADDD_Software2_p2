const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLSchema,
  GraphQLNonNull,
  GraphQLInputObjectType,
  GraphQLFloat
} = require('graphql');

const DosisType = new GraphQLObjectType({
  name: 'Dosis',
  fields: () => ({
    tipo_de_unidad: { type: GraphQLString },
    cantidad_de_dosis: { type: GraphQLFloat }
  })
});

const FormaType = new GraphQLObjectType({
  name: 'Forma',
  fields: () => ({
    tipo_de_forma: { type: GraphQLString },
    dosis: { type: DosisType }
  })
});

// Input types para mutaciones
const DosisInput = new GraphQLInputObjectType({
  name: 'DosisInput',
  fields: {
    tipo_de_unidad: { type: GraphQLString },
    cantidad_de_dosis: { type: GraphQLFloat }
  }
});

const FormaInput = new GraphQLInputObjectType({
  name: 'FormaInput',
  fields: {
    tipo_de_forma: { type: GraphQLString },
    dosis: { type: DosisInput }
  }
});

const MedicamentoType = new GraphQLObjectType({
  name: 'Medicamento',
  fields: () => ({
    _id: { type: GraphQLString },
    principio_activo: { type: GraphQLString },
    forma: { type: FormaType },
    categoria: { type: GraphQLString },
    es_controlado: { type: GraphQLBoolean },
    requiere_receta: { type: GraphQLBoolean },
    via_administracion: { type: GraphQLString },
    alternativas: { type: new GraphQLList(GraphQLString) }
  })
});

module.exports = { MedicamentoType, FormaInput, DosisInput };
