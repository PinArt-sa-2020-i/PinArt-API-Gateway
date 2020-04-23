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
    user = new Object(JSON.parse(JSON.stringify(user)));
    const response = await this.post("authenticate", user);
    return this.authReducer(response);
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
      lastName: user.lastName,
      token: user.token,
    };
  }
}

module.exports = AuthAPI;
