const { ApolloError } = require("apollo-server");

const verficateAuthentication = (data) => {
  if (data.id == null) {
    throw new ApolloError("Need Authentication", 400);
  }
};

function reviewResponse(response) {
  if (response) {
    return response;
  } else {
    return new ApolloError(
      `API ERROR: ${response.message} - ${response.status} `,
      response.status
    );
  }
}

const profileResolver = {
  Query: {
    allUsers: async (_, __, { dataSources, data }) => {
      verficateAuthentication(data);
      return await dataSources.profileAPI.getAllUser();
    },
    userById: async (_, { id }, { dataSources, data }) => {
      verficateAuthentication(data);
      return await dataSources.profileAPI.getUserbyId(id);
    },
    userByName: async (_, { name }, { dataSources, data }) => {
      verficateAuthentication(data);
      return await dataSources.profileAPI.getUserbyName(name);
    },
  },

  Mutation: {
    createUser: async (_, { user }, { dataSources, data }) => {
      verficateAuthentication(data);
      return await dataSources.profileAPI.createUser(user);
    },
    createAuth: async (_, { auth }, { dataSources, data }) => {
      verficateAuthentication(data);
      return await dataSources.profileAPI.createAuth(auth);
    },
    createProfile: async (_, { profile, username }, { dataSources, data }) => {
      verficateAuthentication(data);
      return await dataSources.profileAPI.createProfile(profile_2);
    },
    createCountry: async (_, { country }, { dataSources, data }) => {
      verficateAuthentication(data);
      return await dataSources.profileAPI.createCountry(country);
    },
    createRecovery: async (_, { recovery }, { dataSources, data }) => {
      verficateAuthentication(data);
      return await dataSources.profileAPI.createRecovery(recovery);
    },
    createReport: async (_, { report }, { dataSources, data }) => {
      verficateAuthentication(data);
      return await dataSources.profileAPI.createReport(report);
    },
    createCause: async (_, { cause }, { dataSources, data }) => {
      verficateAuthentication(data);
      return await dataSources.profileAPI.createCause(cause);
    },
    updateProfilePhoto: async (_, { image }, { dataSources, data }) => {
      verficateAuthentication(data);

      let url_imagen;
      let id_bucket;
      const file = image.file;

      console.log(typeof file);

      //Subida de la imagen al bucket
      let response;
      try {
        response = await dataSources.bucketAPI.addFile(file);
      } catch (error) {
        return new ApolloError(`STORAGE ERROR: ${500}: ${error}`, 500);
      }

      //Respuesta del bucket
      if (response.status == 200) {
        url_imagen = `https://pin-art-images-storage.s3.amazonaws.com/${response.data.message}`;
        id_bucket = response.data.message;
      } else {
        return new ApolloError(
          `API ERROR: ${response.message} - ${response.status} `,
          response.status
        );
      }
      url_imagen = `https://pin-art-images-storage.s3.amazonaws.com/${response.data.message}`;
      return reviewResponse(url_imagen);
    },
    updateProfile: async (_, { id, profile }, { dataSources, data }) => {
      verficateAuthentication(data);
      return await dataSources.profileAPI.updateProfile(id, profile);
    },
    deleteUser: async (_, { id }, { dataSources, data }) => {
      verficateAuthentication(data);
      return await dataSources.profileAPI.deleteUser(id);
    },
  },
};

module.exports = profileResolver;
