const { AuthenticationError } = require("apollo-server");
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
      // let idUsuario;
      // let correo = register.correo;
      // let eliminado = false;
      // let privado = false;
      // let response;

      // let reg = {
      //   firstName: register.firstName,
      //   lastName: register.lastName,
      //   username: register.username,
      //   password: register.password,
      // };

      //regsitro de la cuenta
      // try {
      //   response = await dataSources.authAPI.registerUser(reg);
      // } catch (error) {
      //   return new ApolloError(`AUTH ERROR: ${500}: ${error}`, 500);
      // }

      //respuesta del register
      // if (response) {
      //   idUsuario = response.id;
      // } else {
      //   return new ApolloError(
      //     `REGISTER ANS ERROR: ${response} `,
      //     response.status
      //   );
      // }

      //Creando Usuarios en base de datos Boards
      // try {await dataSources.favoriteboardAPI.createUser(idUsuario)}
      // catch (error) {return new ApolloError(`FAVORITE ERROR: ${500}: ${error}`, 500);}


      // let user = {
      //   id: idUsuario,
      //   firstName: register.firstName,
      //   lastName: register.lastName,
      //   username: register.username,
      //   correo: correo,
      //   eliminado: eliminado,
      //   privado: privado,
      // };

      // Guardado en base de usuarios
      // try {
      //   response = await dataSources.profileAPI.createUser(user);
      // } catch (error) {
      //   return new ApolloError(`USER ERROR: ${500}: ${error}`, 500);
      // }
      // let likes;
      // try{
      //   likes = await dataSources.interfaceAPI.getLikes(register.username);
      //   likes = likes.likes.join();
      // }catch (e) {
      //   // return new ApolloError(`INTERFACE ERROR: ${500}: ${e}`, 500);
      // }

      // console.log(likes);
      // let profile = {
      //   userId: idUsuario,
      //   countryId: 1,
      //   gustos: typeof likes == String ? likes: '',
      // };

      // Creación de perfil
      // try {
      //   response = await dataSources.profileAPI.createProfile(profile);
      // } catch (error) {
      //   return new ApolloError(`PROFILE ERROR: ${500}: ${error}`, 500);
      // }

      //Manejando entrada
      // return reviewResponse(response);
      return{
        id: 0
      }
    },



    authenticateUser: async (_, { auth }, { dataSources }) => {
      //Se autentifica el usuario
      //Datos de la auth
      //const dataAuth = { username: auth.username, password: auth.password };

      //Se realiza la peticion
      //const responseAuth = await dataSources.authAPI.authenticateUser(dataAuth);

      //Se valida la respuesta
      
      // if (responseAuth.status != 200) {
      //   return new AuthenticationError(
      //     `${responseAuth.status} - ${responseAuth.data}`
      //   );
      // }
      


      //Se crea la sesion
      //Data de la sesion
      
      
      // const dataSesion = {
      //   IdUsuario: responseAuth.data.id,
      //   MedioAuth: 1,
      //   Dispositivo: auth.dispositivo || "Not found",
      //   Activo: true,
      // };
      
      

      //Se realiza la peticion
      // const responseSesion = await dataSources.configAccountAPI.createSession(
      //   dataSesion
      // );
      
      //Se valida la respuesta
      // if (responseSesion.status != 200) {
      //   return new AuthenticationError(
      //     `${responseAuth.status} - ${responseAuth.data}`
      //   );
      // }

      //Se retorna la respuesta
      return {
        id: 0,
        username: "boot",
        firstName: "boot",
        lastName: "boot",
        idSesion: "boot",
        token: "boot",
      };
    },
  },
};

module.exports = authResolver;
