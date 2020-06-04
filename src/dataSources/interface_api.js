const { RESTDataSource } = require("apollo-datasource-rest");
//import { url, port, entryPoint } from '../server.js';
const serverConfig = require("../server");

class InterfaceAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `http://${serverConfig.interface_url}:${serverConfig.interface_port}`;
  }

  async getLikes(username) {
    return this.get(`getAllGustos/${username}`);
  }


}

module.exports = InterfaceAPI;
