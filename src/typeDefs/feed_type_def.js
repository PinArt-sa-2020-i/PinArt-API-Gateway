//nodulo que permite crear el typeDef
const { gql } = require('apollo-server');

const feedTypeDefs = gql`
    type Tablero{
        id: String!
        multimedia_agregada_ids: [String]
    }

    type Etiqueta{
        id: String!
        multimedia_relacionada_ids: [String]
    }

    

    extend type Query {
        getMultimediaById(id: String!): Multimedia
        getMultimediaByUser(id: String!): [Multimedia]
        getMultimediaByTag(id: String!): [Multimedia]
        getMultimediaByTable(id: String!): [Multimedia]
        getUsersFeed(idUsuario: String): [Multimedia]
        getTagsFeed(idUsuario: String): [Multimedia]
    }
`;

//Se exporta el typeDef
module.exports = feedTypeDefs;