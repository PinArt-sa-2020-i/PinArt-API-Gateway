const { ApolloError } = require("apollo-server");

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

const authResolver = {
  Mutation: {
    registerUser: async (_, { register }, { dataSources }) => {
      let idUsuario;
      let correo = register.correo;
      let eliminado = false;
      let privado = false;
      let response;

      let reg = {
        firstName: register.firstName,
        lastName: register.lastName,
        username: register.username,
        password: register.password,
      };

      //regsitro de la cuenta
      try {
        response = await dataSources.authAPI.registerUser(reg);
      } catch (error) {
        return new ApolloError(`AUTH ERROR: ${500}: ${error}`, 500);
      }

      //respuesta del register
      if (response) {
        console.log(response);
        idUsuario = response.id;
      } else {
        return new ApolloError(
          `REGISTER ANS ERROR: ${response} `,
          response.status
        );
      }

      let user = {
        id: idUsuario,
        correo: correo,
        eliminado: eliminado,
        privado: privado,
      };

      //Guardado en base de usuarios
      try {
        response = await dataSources.profileAPI.createUser(user);
      } catch (error) {
        return new ApolloError(`PROFILE ERROR: ${500}: ${error}`, 500);
      }
      //Manejando entrada
      return reviewResponse(response);
    },
    authenticateUser: (_, { auth }, { dataSources }) =>
      dataSources.authAPI.authenticateUser(auth),
  },
};

module.exports = authResolver;
