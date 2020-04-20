const feedResolver = {
    Query: {
        getMultimediaById: (_, { id }, {dataSources}) => dataSources.feedAPI.getMultimediaById(id),
        getMultimediaByUser: (_, { id }, {dataSources}) => dataSources.feedAPI.getMultimediaByUser(id),
        getMultimediaByTag: (_, { id }, {dataSources}) => dataSources.feedAPI.getMultimediaByTag(id),
        getMultimediaByTable: (_, { id }, {dataSources}) => dataSources.feedAPI.getMultimediaByTable(id),
    },
    Mutation: {
        getUsersFeed: (_, { followedUsers }, {dataSources}) => dataSources.feedAPI.getUsersFeed(followedUsers),
        getTagsFeed: (_, { followedTags }, {dataSources}) => dataSources.feedAPI.getUsersFeed(followedTags),
    }
};

module.exports = feedResolver;