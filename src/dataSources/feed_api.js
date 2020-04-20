//Modulo que permite el manejo de la API Feed
const { RESTDataSource } = require('apollo-datasource-rest');

//Datos del API
const serverConfig = require('../server');

class FeedAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = `${serverConfig.multimedia_ms_url}:${serverConfig.multimedia_ms_port}/`;    
    }

    //Realiza una peticion get para obtener la informacion de una multimedia
     async getMultimediaById(id){
        const response = await this.get(`getMultimediaInformation/${id}`);
        return this.multimediaReducer(response);
    }

    //Realiza una peticion get para obtener la multimedia dado el id de un usuario
    async getMultimediaByUser(id){
        const response = await this.get(`getMultimediaByUser/${id}`);
        return response;
    }

    //Realiza una peticion get para obtener la multimedia dado el id de un Tag
    async getMultimediaByTag(id){
        const response = await this.get(`getMultimediaByTag/${id}`);
        return response;
    }

    //Realiza una peticion get para obtener la multimedia dado el id de una Table
    async getMultimediaByTable(id){
        const response = await this.get(`getMultimediaByTable/${id}`);
        return response;
    }

    //Realiza una peticion post para obtener el feed de un usuario dados sus usuarios seguidos
    async getUsersFeed(followedUsers){
        followedUsers = new Object(JSON.parse(JSON.stringify(followedUsers)));
        const response = await this.post('getUsersFeed', followedUsers);
        return response;
    }

    //Realiza una peticion post para obtener el feed de un usuario dados sus tags seguidos
    async getTagsFeed(followedTags){
        followedTags = new Object(JSON.parse(JSON.stringify(followedTags)));
        const response = await this.post('getTagsFeed', followedTags);
        return response;
    }



    //Le da el formato necesario a la salida



    multimediaReducer(multimedia) {
        return {
            url: multimedia.url,
            descripcion: multimedia.descripcion,
            tipo: multimedia.tipo,
            formato: multimedia.formato,
            id_bucket: multimedia.id_bucket,
            usuario_creador_id: multimedia.usuario_creador_id,
            etiquetas_relacionadas_ids: multimedia.etiquetas_relacionadas_ids,
            tableros_agregados_ids: multimedia.tableros_agregados_ids,
        };
    }
}



//Exporta el api
module.exports = FeedAPI;