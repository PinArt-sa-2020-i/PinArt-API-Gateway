const searchResolver = {
    Query: {
        getRelatedUsersByUser: (_, { idUsuario }, {dataSources}) => dataSources.feedAPI.getRelatedUsersByUserId(idUsuario),
        getRelatedTagsByTag: (_, { idTag }, {dataSources}) => dataSources.feedAPI.getRelatedTagsByTag(idTag),
    }
};

module.exports = searchResolver;