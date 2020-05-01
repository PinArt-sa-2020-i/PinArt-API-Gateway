const {ApolloError} = require('apollo-server');
const verficateAuthentication = (data) => {if(data.id == null){ throw new ApolloError("Need Authentication", 400);}}

const searchResolver = {
    Query: {
        getRelatedUsersByUser: async (_, { idUsuario }, {dataSources, data}) => {
            verficateAuthentication(data);
            return await dataSources.feedAPI.getRelatedUsersByUserId(idUsuario)
        },
        getRelatedTagsByTag: async (_, { idTag }, {dataSources, data}) => {
            verficateAuthentication(data);
            return await dataSources.feedAPI.getRelatedTagsByTag(idTag)
        },
    }
};

module.exports = searchResolver;