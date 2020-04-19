//Modulo que permite el manejo de las APIS
const { RESTDataSource } = require('apollo-datasource-rest');

//Datos del API
const serverConfig = require('../server');

//Ver ejemplo del repositorio
class ExampleAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = `http://${serverConfig.example_url}:${serverConfig.example_port}/${serverConfig.example_entryPoint}`;    
    }

     //Realiza una peticion get para obtener todos los usuarios
    async getAllExample() {        
        return [{id:"0001"}, {id:"0002"}]
    }
}

//exporta el api
module.exports = ExampleAPI;