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
      return []
    },
    userById: async (_, { id }, { dataSources, data }) => {
      verficateAuthentication(data);
      return {
        id: 0,
        firstName: "boot",
        lastName: "boot",
        username: "boot",
        correo: "boot",
        eliminado: false,
        privado: false,
        createdDate: "boot",
        auth: [{
          id: 0,
          estado: "activo",
          userId: 0
        }],
        profiles: [{
          country: {
            id: 0,
            nombre: "boot",
            prefijo: "boot"
          },
          id: 0,
          fechaNacimiento: "boot",
          genero: "boot",
          foto:"data:image/png;base64,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",
          descripcion: "boot",
          noTelefono: "boot",
          edad: "boot",
          userId: 0,
          countryId: 0,
          gustos: "boot"
        }],
        recoveries: [],
        received: []
      };
    },
    userByName: async (_, { name }, { dataSources, data }) => {
      verficateAuthentication(data);
      return {
        id: 0,
        firstName: "boot",
        lastName: "boot",
        username: "boot",
        correo: "boot",
        eliminado: false,
        privado: false,
        createdDate: "boot",
        auth: [{
          id: 0,
          estado: "activo",
          userId: 0
        }],
        profiles: [{
          country: {
            id: 0,
            nombre: "boot",
            prefijo: "boot"
          },
          id: 0,
          fechaNacimiento: "boot",
          genero: "boot",
          foto: "data:image/png;base64,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",
          descripcion: "boot",
          noTelefono: "boot",
          edad: "boot",
          userId: 0,
          countryId: 0,
          gustos: "boot"
        }],
        recoveries: [],
        received: []
      };
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
        url_imagen = `https://pinart-images-storage.s3.amazonaws.com/${response.data.message}`;
        id_bucket = response.data.message;
      } else {
        return new ApolloError(
          `API ERROR: ${response.message} - ${response.status} `,
          response.status
        );
      }
      url_imagen = `https://pinart-images-storage.s3.amazonaws.com/${response.data.message}`
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
