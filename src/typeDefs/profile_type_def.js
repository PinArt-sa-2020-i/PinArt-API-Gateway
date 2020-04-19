const { gql } = require("apollo-server");

const profileTypeDefs = gql`
  type User {
    id: Int!
    nombre: String!
    apellido: String!
    nick: String!
    correo: String!
    eliminado: Boolean!
    privado: Boolean!
    createdDate: String!
  }

  input UserInput {
    nombre: String!
    apellido: String!
    nick: String!
    correo: String!
    eliminado: Boolean!
    privado: Boolean!
  }

  type Query {
    allUsers: [User]!
    userById(id: Int!): User!
  }

  type Mutation {
    createUser(user: UserInput!): User!
    updateUser(id: Int!, user: UserInput!): User!
    deleteUser(id: Int!): Int
  }
`;

module.exports = profileTypeDefs;
