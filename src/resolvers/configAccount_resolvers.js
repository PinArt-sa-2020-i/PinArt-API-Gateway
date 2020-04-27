//Crea los resolver de example
const configAccountResolvers = {
        Query: {
                allNotificationTypes: (_, __, { dataSources }) => dataSources.configAccountAPI.getAllNotificationTypes(),
                allConfigNotifications: (_, __, { dataSources }) => dataSources.configAccountAPI.getAllConfigNotifications(),
                allWays: (_, __, { dataSources }) => dataSources.configAccountAPI.getAllWays(),
                allSessions: (_, __, { dataSources }) => dataSources.configAccountAPI.getAllSessions(),
                allLinkedAccounts: (_, __, { dataSources }) => dataSources.configAccountAPI.getAllLinkedAccounts(),


                notificationTypeById: (_, { id }, {dataSources}) => dataSources.configAccountAPI.getNotificationTypeById(id),
                configNotificationById: (_, { id }, {dataSources}) => dataSources.configAccountAPI.getConfigNotificationById(id),
                wayById: (_, { id }, {dataSources}) => dataSources.configAccountAPI.getWayById(id),
                sessionById: (_, { id }, {dataSources}) => dataSources.configAccountAPI.getSessionById(id),
                linkedAccountById: (_, { id }, {dataSources}) => dataSources.configAccountAPI.getLinkedAccountById(id)
        },
        Mutation: {
                createNotificationType: (_, {notificationType}, {dataSources}) => dataSources.configAccountAPI.createNotificationType(notificationType),
                updateNotificationType: (_, {id, notificationType}, {dataSources}) => dataSources.configAccountAPI.updateNotificationType(id, notificationType),
                deleteNotificationType: (_, {id}, {dataSources}) => dataSources.configAccountAPI.deleteNotificationType(id),


                createConfigNotification: (_, {configNotification}, {dataSources}) => dataSources.configAccountAPI.createConfigNotification(configNotification),
                updateConfigNotification: (_, {id, configNotification}, {dataSources}) => dataSources.configAccountAPI.updateConfigNotification(id, configNotification),
                deleteConfigNotification: (_, {id}, {dataSources}) => dataSources.configAccountAPI.deleteConfigNotification(id),


                createWay: (_, {way}, {dataSources}) => dataSources.configAccountAPI.createWay(way),
                updateWay: (_, {id, way}, {dataSources}) => dataSources.configAccountAPI.updateWay(id, way),
                deleteWay: (_, {id}, {dataSources}) => dataSources.configAccountAPI.deleteWay(id),


                //createSession: (_, {session}, {dataSources}) => dataSources.configAccountAPI.createSession(session),
                updateSession: (_, {id, session}, {dataSources}) => dataSources.configAccountAPI.updateSession(id, session),
                deleteSession: (_, {id}, {dataSources}) => dataSources.configAccountAPI.deleteSession(id),


                createLinkedAccount: (_, {linkedAccount}, {dataSources}) => dataSources.configAccountAPI.createLinkedAccount(linkedAccount),
                updateLinkedAccount: (_, {id, linkedAccount}, {dataSources}) => dataSources.configAccountAPI.updateLinkedAccount(id, linkedAccount),
                deleteLinkedAccount: (_, {id}, {dataSources}) => dataSources.configAccountAPI.deleteLinkedAccount(id)
        },
};
//Exporta los resolvers de examples
module.exports = configAccountResolvers;