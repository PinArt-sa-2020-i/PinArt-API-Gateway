const authResolver = {
  Mutation: {
    registerUser: (_, { register }, { dataSources }) =>
      dataSources.authAPI.registerUser(register),
    authenticateUser: (_, { auth }, { dataSources }) =>
      dataSources.authAPI.authenticateUser(auth),
  },
};

module.exports = authResolver;
