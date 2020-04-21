const { gql } = require("apollo-server");

const authTypeDefs = gql`
  type Authenticate {
    id: Int!
    username: String!
    firstName: String!
    lastName: String!
    token: String!
  }

  type Register {
    id: Int
  }

  input AuthenticateInput {
    username: String!
    password: String!
  }

  input RegisterInput {
    firstName: String!
    lastName: String!
    username: String!
    password: String!
  }

  extend type Mutation {
    authenticateUser(auth: AuthenticateInput!): Authenticate!
    registerUser(register: RegisterInput!): Register
  }
`;

module.exports = authTypeDefs;
