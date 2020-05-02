
const {ApolloError} = require('apollo-server');
const verficateAuthentication = (data) => {if(data.id == null){ throw new ApolloError("Need Authentication", 400);}}


const profileResolver = {
  Query: {
    allUsers: async (_, __, { dataSources, data }) => {
        verficateAuthentication(data);
        return await dataSources.profileAPI.getAllUser()
    },
    userById: async (_, { id }, { dataSources, data }) => {
        verficateAuthentication(data);
        return await dataSources.profileAPI.getUserbyId(id)
    },
    userByName: async (_, { name }, { dataSources, data }) => {
        verficateAuthentication(data);
        return await dataSources.profileAPI.getUserbyName(name)
    },
  },
  
  Mutation: {
    createUser: async (_, { user }, { dataSources, data }) => {
        verficateAuthentication(data);
        return await dataSources.profileAPI.createUser(user)
    },
    createAuth: async (_, { auth }, { dataSources, data }) => {
        verficateAuthentication(data);
        return await dataSources.profileAPI.createAuth(auth)
    },
    createProfile: async (_, { profile }, { dataSources, data }) => {
        verficateAuthentication(data);
        return await dataSources.profileAPI.createProfile(profile)
    },
    createCountry: async (_, { country }, { dataSources, data }) => {
        verficateAuthentication(data);
        return await dataSources.profileAPI.createCountry(country)
    },
    createRecovery: async (_, { recovery }, { dataSources, data }) => {
        verficateAuthentication(data);
        return await dataSources.profileAPI.createRecovery(recovery)
    },
    createReport: async (_, { report }, { dataSources, data }) => {
        verficateAuthentication(data);
        return await dataSources.profileAPI.createReport(report)
    },
    createCause: async (_, { cause }, { dataSources, data }) => {
        verficateAuthentication(data);
        return await dataSources.profileAPI.createCause(cause)
    },
    updateUser: async (_, { id, user }, { dataSources, data }) => {
        verficateAuthentication(data);
        return await dataSources.profileAPI.updateUser(id, user)
    },
    deleteUser: async (_, { id }, { dataSources, data }) => {
        verficateAuthentication(data);
        return await dataSources.profileAPI.deleteUser(id)
    },
  },
};

module.exports = profileResolver;
