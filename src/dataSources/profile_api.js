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
    const response = await this.post("user", user);
    return this.userReducer(response);
  }

  async updateUser(id, user) {
    user = new Object(JSON.parse(JSON.stringify(user)));
    const response = await this.put(`user/${id}`, user);
    return this.userReducer(response);
  }

  async deleteUser(id, user) {
    user = new Object(JSON.parse(JSON.stringify(user)));
    const response = await this.put(`user/${id}`, user);
    return this.userReducer(response);
  }

  async createAuth(auth) {
    auth = new Object(JSON.parse(JSON.stringify(auth)));
    const response = await this.post("auth", auth);
    return this.authReducer(response);
  }

  async createProfile(profile) {
    profile = new Object(JSON.parse(JSON.stringify(profile)));
    const response = await this.post("profile", profile);
    return this.profileReducer(response);
  }

  async createCountry(country) {
    country = new Object(JSON.parse(JSON.stringify(country)));
    const response = await this.post("country", country);
    return this.countryReducer(response);
  }

  async createRecovery(recovery) {
    recovery = new Object(JSON.parse(JSON.stringify(recovery)));
    const response = await this.post("recovery", recovery);
    return this.recoveryReducer(response);
  }

  async createReport(report) {
    report = new Object(JSON.parse(JSON.stringify(report)));
    const response = await this.post("report", report);
    return this.reportReducer(response);
  }

  async createCause(cause) {
    cause = new Object(JSON.parse(JSON.stringify(cause)));
    const response = await this.post("cause", cause);
    return this.causeReducer(response);
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
      auth: user.auth,
      profiles: user.profiles,
      recoveries: user.recoveries,
      received: user.received,
    };
  }

  authReducer(auth) {
    return {
      id: auth.id,
      estado: auth.estado,
      userId: auth.userId,
    };
  }

  profileReducer(profile) {
    return {
      country: profile.country,
      id: profile.id,
      fechaNacimiento: profile.fechaNacimiento,
      genero: profile.genero,
      foto: profile.foto,
      descripcion: profile.descripcion,
      noTelefono: profile.noTelefono,
      edad: profile.edad,
      userId: profile.userId,
      countryId: profile.countryId,
    };
  }

  countryReducer(country) {
    return {
      id: country.id,
      nombre: country.nombre,
      prefijo: country.prefijo,
    };
  }

  recoveryReducer(recovery) {
    return {
      id: recovery.id,
      recoveryCode: recovery.recoveryCode,
      used: recovery.used,
      createdDate: recovery.createdDate,
      userId: recovery.userId,
    };
  }

  reportReducer(report) {
    return {
      cause: report.cause,
      id: report.id,
      comentario: report.comentario,
      userId: report.userId,
      causeId: report.causeId,
    };
  }

  causeReducer(cause) {
    return {
      id: cause.id,
      nombre: cause.nombre,
      descripcion: cause.descripcion,
    };
  }
}

module.exports = ProfileAPI;
