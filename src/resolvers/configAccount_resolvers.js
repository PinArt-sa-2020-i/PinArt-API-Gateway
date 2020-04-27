const {ApolloError} = require('apollo-server');

const verficateAuthentication = (data) => {if(data.id == null){ throw new ApolloError("Need Authentication", 400);}}

//Crea los resolver de example
const configAccountResolvers = {
        Query: {
                allNotificationTypes: async (_, __, { dataSources, data }) => {       
                        verficateAuthentication(data);
                        return await dataSources.configAccountAPI.getAllNotificationTypes()
                },

                allConfigNotifications: async (_, __, { dataSources, data }) => {
                        verficateAuthentication(data);
                        return await dataSources.configAccountAPI.getAllConfigNotifications()
                },

                allWays: async (_, __, { dataSources, data }) => {
                        verficateAuthentication(data);
                        return await dataSources.configAccountAPI.getAllWays()
                },

                allSessions: async (_, __, { dataSources, data }) => {
                        verficateAuthentication(data);
                        return await dataSources.configAccountAPI.getAllSessions()
                },

                allLinkedAccounts: async (_, __, { dataSources, data }) => {
                        verficateAuthentication(data);
                        return await dataSources.configAccountAPI.getAllLinkedAccounts()
                },

                notificationTypeById: async (_, { id }, {dataSources, data}) => {
                        verficateAuthentication(data);
                        return await dataSources.configAccountAPI.getNotificationTypeById(id)
                },

                configNotificationById: async (_, { id }, {dataSources, data}) => {
                        verficateAuthentication(data);
                        return await dataSources.configAccountAPI.getConfigNotificationById(id)
                },

                wayById: async (_, { id }, {dataSources, data}) => {
                        verficateAuthentication(data);
                        return await dataSources.configAccountAPI.getWayById(id)
                },

                sessionById: async (_, { id }, {dataSources, data}) => {
                        verficateAuthentication(data);
                        return await dataSources.configAccountAPI.getSessionById(id)
                },

                linkedAccountById: async (_, { id }, {dataSources, data}) => {
                        verficateAuthentication(data);
                        return await dataSources.configAccountAPI.getLinkedAccountById(id)
                }
        },
        Mutation: {
                createNotificationType: async (_, {notificationType}, {dataSources, data}) => {
                        verficateAuthentication(data);
                        return await dataSources.configAccountAPI.createNotificationType(notificationType)
                },

                updateNotificationType: async (_, {id, notificationType}, {dataSources, data}) => {
                        verficateAuthentication(data);
                        return await dataSources.configAccountAPI.updateNotificationType(id, notificationType)
                },

                deleteNotificationType: async (_, {id}, {dataSources, data}) => {
                        verficateAuthentication(data);
                        return await dataSources.configAccountAPI.deleteNotificationType(id)
                },


                createConfigNotification: async (_, {configNotification}, {dataSources, data}) => {
                        verficateAuthentication(data);
                        return await dataSources.configAccountAPI.createConfigNotification(configNotification)
                },
                updateConfigNotification: async (_, {id, configNotification}, {dataSources, data}) => {
                        verficateAuthentication(data);
                        return await dataSources.configAccountAPI.updateConfigNotification(id, configNotification)
                },
                deleteConfigNotification: async (_, {id}, {dataSources, data}) => {
                        verficateAuthentication(data);
                        return await dataSources.configAccountAPI.deleteConfigNotification(id)
                },


                createWay: async (_, {way}, {dataSources, data}) => {
                        verficateAuthentication(data);
                        return await dataSources.configAccountAPI.createWay(way)
                },
                updateWay: async (_, {id, way}, {dataSources, data}) => {
                        verficateAuthentication(data);
                        return await dataSources.configAccountAPI.updateWay(id, way)
                },
                deleteWay: async (_, {id}, {dataSources, data}) => {
                        verficateAuthentication(data);
                        return await dataSources.configAccountAPI.deleteWay(id)
                },


                //createSession: (_, {session}, {dataSources}) => dataSources.configAccountAPI.createSession(session),
                updateSession: async (_, {id, session}, {dataSources, data}) => {
                        verficateAuthentication(data);
                        return await dataSources.configAccountAPI.updateSession(id, session)
                },
                deleteSession: async (_, {id}, {dataSources, data}) => {
                        verficateAuthentication(data);
                        return await dataSources.configAccountAPI.deleteSession(id)
                },


                createLinkedAccount: async (_, {linkedAccount}, {dataSources, data}) => {
                        verficateAuthentication(data);
                        return await dataSources.configAccountAPI.createLinkedAccount(linkedAccount)
                },
                updateLinkedAccount: async (_, {id, linkedAccount}, {dataSources, data}) => {
                        verficateAuthentication(data);
                        return await dataSources.configAccountAPI.updateLinkedAccount(id, linkedAccount)
                },
                deleteLinkedAccount: async (_, {id}, {dataSources, data}) => {
                        verficateAuthentication(data);
                        return await dataSources.configAccountAPI.deleteLinkedAccount(id)
                }
        },
};
//Exporta los resolvers de examples
module.exports = configAccountResolvers;