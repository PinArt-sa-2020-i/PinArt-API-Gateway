//nodulo que permite crear el typeDef
const { gql } = require('apollo-server');

//Se crea el typeDef
const configAccountTypeDefs = gql`
    type NotificationType {
        id: Int!
        Nombre: String!
        Descripcion: String!
    }
    type ConfigNotification {
        id: Int!
        IdUsuario: Int!
        IdTipo: Int!
        Activas: Boolean!
    }
    type Way {
        id: Int!
        Nombre: String!
    }
    type Session {
        id: Int!
        IdUsuario: Int!
        MedioAuth: Int!
        Dispositivo: String!
        Creacion: String!
        Activo: Boolean!
    }
    type LinkedAccount {
        id: Int!
        IdUsuario: Int!
        MedioAuth: Int!
        CorreoEnlazado: String!
    }


    input NotificationTypeInput {
        Nombre: String!
        Descripcion: String!
    }
    input ConfigNotificationInput {
        IdUsuario: Int!
        IdTipo: Int!
        Activas: Boolean!
    }
    input WayInput {
        Nombre: String!
    }
    input SessionInput {
        IdUsuario: Int!
        MedioAuth: Int!
        Dispositivo: String!
        Creacion: String
        Activo: Boolean!
    }
    input LinkedAccountInput {
        IdUsuario: Int!
        MedioAuth: Int!
        CorreoEnlazado: String!
    }


    extend type Query {
        allNotificationTypes: [NotificationType]!
        allConfigNotifications: [ConfigNotification]!
        allWays: [Way]!
        allSessions: [Session]!
        allLinkedAccounts: [LinkedAccount]!


        notificationTypeById(id: Int!): NotificationType!
        configNotificationById(id: Int!): ConfigNotification!
        wayById(id: Int!): Way!
        sessionById(id: Int!): Session!
        linkedAccountById(id: Int!): LinkedAccount!
    }


    extend type Mutation {
        createNotificationType(notificationType: NotificationTypeInput!): NotificationType!
        updateNotificationType(id: Int!, notificationType: NotificationTypeInput!): NotificationType!
        deleteNotificationType(id: Int!): Int


        createConfigNotification(configNotification: ConfigNotificationInput!): ConfigNotification!
        updateConfigNotification(id: Int!, configNotification: ConfigNotificationInput!): ConfigNotification!
        deleteConfigNotification(id: Int!): Int


        createWay(way: WayInput!): Way!
        updateWay(id: Int!, way: WayInput!): Way!
        deleteWay(id: Int!): Int


        #createSession(session: SessionInput!): Session!
        updateSession(id: Int!, session: SessionInput!): Session!
        deleteSession(id: Int!): Int

        
        createLinkedAccount(linkedAccount: LinkedAccountInput!): LinkedAccount!
        updateLinkedAccount(id: Int!, linkedAccount: LinkedAccountInput!): LinkedAccount!
        deleteLinkedAccount(id: Int!): Int
    }
`;

//Se exporta el typeDef
module.exports = configAccountTypeDefs;