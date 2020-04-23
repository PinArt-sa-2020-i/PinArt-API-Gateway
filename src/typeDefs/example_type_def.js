//nodulo que permite crear el typeDef
const { gql } = require('apollo-server');

//Se crea el typeDef
const exampleTypeDefs = gql`
    type Example{
        id: String!
    }
    extend type Query {
        getAllExamples: [Example]
    }
`;

//Se exporta el typeDef
module.exports = exampleTypeDefs;