const { RESTDataSource } = require("apollo-datasource-rest");
//import { url, port, entryPoint } from '../server.js';
const serverConfig = require("../server");

class ProfileAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `http://${serverConfig.profile_url}:${serverConfig.profile_port}/${serverConfig.profile_entryPoint}`;
  }

  //Realiza una peticion get para obtener todos los usuarios
  async getAllUser() {
    const response = await this.get("user");
    return Array.isArray(response)
      ? response.map((user) => this.userReducer(user))
      : [];
  }

  //Peticion get para obtener un usu
  async getUserbyId(id) {
    const response = await this.get(`user/${id}`);
    return this.userReducer(response);
  }

  async createUser(user) {
    user = new Object(JSON.parse(JSON.stringify(user)));
    const response = await this.post("users", user);
    return this.userReducer(response);
  }

  async updateUser(id, user) {
    user = new Object(JSON.parse(JSON.stringify(user)));
    const response = await this.put(`users/${id}`, user);
    return this.userReducer(response);
  }

  async deleteUser(id) {
    const response = await this.delete(`user/${id}`);
    return this.userReducer(response);
  }

  //Le da el formato necesario a la salida
  userReducer(user) {
    return {
      id: user.id,
      nombre: user.nombre,
      apellido: user.apellido,
      nick: user.nick,
      correo: user.correo,
      eliminado: user.eliminado,
      privado: user.privado,
      createdDate: user.createdDate,
    };
  }
}

module.exports = ProfileAPI;
