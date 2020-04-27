const { RESTDataSource } = require("apollo-datasource-rest");
//import { url, port, entryPoint } from '../server.js';
const serverConfig = require("../server");

class AuthAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `http://${serverConfig.auth_url}:${serverConfig.auth_port}/${serverConfig.auth_entryPoint}`;
  }

  //Realiza una peticion get para obtener todos los usuarios

  async registerUser(user) {
    user = new Object(JSON.parse(JSON.stringify(user)));
    const response = await this.post("register", user);
    return this.registerReducer(response);
  }

  async authenticateUser(user) {
    try {
      user = new Object(JSON.parse(JSON.stringify(user)));
      const response = await this.post("authenticate", user);  
      return {status: 200, data: this.authReducer(response)};
    }catch (error) {
      return {
        status: error.extensions.response.status,
        data: error.extensions.response.body.message
      };
    }
  }

  //Le da el formato necesario a la salida
  registerReducer(user) {
    return {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
    };
  }

  authReducer(user) {
    return {
      id: user.id,
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName
    };
  }
}

module.exports = AuthAPI;
