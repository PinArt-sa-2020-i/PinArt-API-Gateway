const profileResolver = {
  Query: {
    allUsers: (_, __, { dataSources }) => dataSources.profileAPI.getAllUser(),
    userById: (_, { id }, { dataSources }) =>
      dataSources.profileAPI.getUserbyId(id),
    userByName: (_, { name }, { dataSources }) =>
      dataSources.profileAPI.getUserbyName(name),
  },
  Mutation: {
    createUser: (_, { user }, { dataSources }) =>
      dataSources.profileAPI.createUser(user),
    createAuth: (_, { auth }, { dataSources }) =>
      dataSources.profileAPI.createAuth(auth),
    createProfile: (_, { profile }, { dataSources }) =>
      dataSources.profileAPI.createProfile(profile),
    createCountry: (_, { country }, { dataSources }) =>
      dataSources.profileAPI.createCountry(country),
    createRecovery: (_, { recovery }, { dataSources }) =>
      dataSources.profileAPI.createRecovery(recovery),
    createReport: (_, { report }, { dataSources }) =>
      dataSources.profileAPI.createReport(report),
    createCause: (_, { cause }, { dataSources }) =>
      dataSources.profileAPI.createCause(cause),
    updateUser: (_, { id, user }, { dataSources }) =>
      dataSources.profileAPI.updateUser(id, user),
    deleteUser: (_, { id }, { dataSources }) =>
      dataSources.profileAPI.deleteUser(id),
  },
};

module.exports = profileResolver;
