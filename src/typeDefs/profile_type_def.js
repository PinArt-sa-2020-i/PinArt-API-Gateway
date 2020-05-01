const { gql } = require("apollo-server");

const profileTypeDefs = gql`
  type User {
    id: Int!
    firstName: String!
    lastName: String!
    username: String!
    correo: String!
    eliminado: Boolean!
    privado: Boolean!
    createdDate: String!
    auth: [Auth]
    profiles: [Profile]
    recoveries: [Recovery]
    received: [Report]
  }

  type Auth {
    id: Int!
    estado: String!
    userId: Int!
  }

  type Profile {
    country: Country
    id: Int!
    fechaNacimiento: String
    genero: String
    foto: String
    descripcion: String
    noTelefono: String
    edad: String
    userId: Int!
    countryId: Int!
  }

  type Country {
    id: Int!
    nombre: String!
    prefijo: String!
  }

  type Recovery {
    id: Int!
    recoveryCode: String!
    used: Boolean!
    createdDate: String!
    userId: Int!
  }

  type Report {
    cause: Cause!
    id: Int!
    comentario: String
    userId: Int!
    causeId: Int!
  }

  type Cause {
    id: Int!
    nombre: String!
    descripcion: String!
  }

  input UserInput {
    id: Int!
    firstName: String!
    lastName: String!
    username: String!
    correo: String!
    eliminado: Boolean!
    privado: Boolean!
  }

  input AuthInput {
    estado: String!
    userId: Int!
  }

  input ProfileInput {
    fechaNacimiento: String
    genero: String
    foto: String
    descripcion: String
    noTelefono: String
    edad: String
    userId: Int!
    countryId: Int!
  }

  input CountryInput {
    nombre: String!
    prefijo: String!
  }

  input RecoveryInput {
    recoveryCode: String!
    used: Boolean!
    userId: Int!
  }

  input ReportInput {
    comentario: String
    userId: Int!
    causeId: Int!
  }

  input CauseInput {
    nombre: String!
    descripcion: String!
  }

  extend type Query {
    allUsers: [User]!
    userById(id: Int!): User!
    userByName(name: String!): User!
  }

  extend type Mutation {
    createUser(user: UserInput!): User!
    createAuth(auth: AuthInput!): Auth!
    createProfile(profile: ProfileInput!): Profile!
    createCountry(country: CountryInput!): Country!
    createRecovery(recovery: RecoveryInput!): Recovery!
    createReport(report: ReportInput!): Report!
    createCause(cause: CauseInput!): Cause!
    updateUser(id: Int!, user: UserInput!): User!
    deleteUser(id: Int!): Int
  }
`;

module.exports = profileTypeDefs;
