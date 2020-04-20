//nodulo que permite crear el typeDef
const { gql } = require('apollo-server');

const feedTypeDefs = gql`
    type Multimedia{
        id: String!
        descripcion: String
        url: String
        tipo: String
        formato: String
        tamano: String
        id_bucket: String
        usuario_creador_id: String
        etiquetas_relacionadas_ids: [String]
        tableros_agregados_ids: [String]
        created_at: String
        updated_at: String
    }

    type MulRefUsuario{
        id: String!
    }

    type Tablero{
        id: String!
        multimedia_agregada_ids: [String]
    }

    type Etiqueta{
        id: String!
        multimedia_relacionada_ids: [String]
    }

    type UserFeed{
        userFeed: [Multimedia]
    }

    extend type Query {
        getMultimediaById(id: String!): Multimedia!
        getMultimediaByUser(id: String!): [Multimedia]!
        getMultimediaByTag(id: String!): [Multimedia]!
        getMultimediaByTable(id: String!): [Multimedia]!
    }

    extend type Mutation {
        getUsersFeed(followedUsers: [String]!): [Multimedia]!
        getTagsFeed(followedTags: [String]!): [Multimedia]!
    }

`;

//Se exporta el typeDef
module.exports = feedTypeDefs;