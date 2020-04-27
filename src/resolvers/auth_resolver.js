const {AuthenticationError} = require('apollo-server');


const authResolver = {
  Mutation: {
    registerUser: (_, { register }, { dataSources }) =>
      dataSources.authAPI.registerUser(register),
    authenticateUser: async (_, { auth }, { dataSources }) => {
      //Se autentifica el usuario
      //Datos de la auth
      const dataAuth = {
        username: auth.username,
        password: auth.password
      }

      //Se realiza la peticion
      const responseAuth = await dataSources.authAPI.authenticateUser(dataAuth)

      //Se valida la respuesta
      if(responseAuth.status != 200){
        return new AuthenticationError(`${responseAuth.status} - ${responseAuth.data}`);
      }
      
      //Se crea la sesion
      //Data de la sesion
      const dataSesion = {
        IdUsuario: responseAuth.data.id,
        MedioAuth: 1,
        Dispositivo: auth.dispositivo || "Not found",
        Activo: true
      }

      //Se realiza la peticion
      const responseSesion = await dataSources.configAccountAPI.createSession(dataSesion);

      //Se valida la respuesta
      if(responseSesion.status != 200){
        return new AuthenticationError(`${responseAuth.status} - ${responseAuth.data}`);
      }

      //Se retorna la respuesta
      return {
        id: responseAuth.data.id,
        username: responseAuth.data.username,
        firstName: responseAuth.data.firstName,
        lastName: responseAuth.data.lastName,
        token: responseSesion.token
      };
    }
      
  },
};

module.exports = authResolver;
