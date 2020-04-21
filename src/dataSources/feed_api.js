//Modulo que permite el manejo de la API Feed
const { RESTDataSource } = require('apollo-datasource-rest');

//Datos del API
const serverConfig = require('../server');

class FeedAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = `http://${serverConfig.feed_url}:${serverConfig.feed_port}/`;    
    }

    //Realiza una peticion get para obtener la informacion de una multimedia
     async getMultimediaById(id){
        const response = await this.get(`getMultimediaInformation/${id}`);
        return this.multimediaReducer(response);
    }

    //Realiza una peticion get para obtener la multimedia dado el id de un usuario
    async getMultimediaByUser(id){
        const response = await this.get(`getMultimediaByUser/${id}`);
        return Array.isArray(response)
        ? response.map(multimedia => this.multimediaWithIdReducer(multimedia))
        : [];
    }

    //Realiza una peticion get para obtener la multimedia dado el id de un Tag
    async getMultimediaByTag(id){
        const response = await this.get(`getMultimediaByTag/${id}`);
        return Array.isArray(response.multimediaByTag)
        ? response.multimediaByTag.map(multimedia => this.multimediaWithIdReducer(multimedia))
        : [];
    }

    //Realiza una peticion get para obtener la multimedia dado el id de una Table
    async getMultimediaByTable(id){
        const response = await this.get(`getMultimediaByTable/${id}`);
        return Array.isArray(response.multimediaByTable)
        ? response.multimediaByTable.map(multimedia => this.multimediaWithIdReducer(multimedia))
        : [];
    }

    //Realiza una peticion post para obtener el feed de un usuario dados sus usuarios seguidos
    async getUsersFeed(followedUsers){
        //Formato esperado para el funcionamiento de la peticion 
        let petition = `{"followedUsers": ${JSON.stringify(followedUsers)}}`;
        let petitionFixed = petition.replace(/'/g, '"');
        // TODO: formatear el followedUser al tipo esperado.
        const response = await this.post('getUsersFeed', JSON.parse(petitionFixed));
        return Array.isArray(response.userFeed)
        ? response.userFeed.map(multimedia => this.multimediaWithIdReducer(multimedia))
        : [];
    }

    //Realiza una peticion post para obtener el feed de un usuario dados sus tags seguidos
    async getTagsFeed(followedTags){
        let petition = `{"followedTags": ${JSON.stringify(followedTags)}}`;
        let petitionFixed = petition.replace(/'/g, '"');
        const response = await this.post('getTagsFeed', JSON.parse(petitionFixed));
        return Array.isArray(response.tagFeed)
        ? response.tagFeed.map(multimedia => this.multimediaWithIdReducer(multimedia))
        : [];
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
            etiquetas_relacionadas_ids: multimedia.etiquetas_relacionada_ids,
            tableros_agregados_ids: multimedia.tableros_agregado_ids,
            created_at: multimedia.created_at,
            updated_at: multimedia.updated_at,
            tamano: multimedia.tamano
        };
    }

    multimediaWithIdReducer(multimedia) {
        return {
            id: multimedia.id,
            url: multimedia.url,
            descripcion: multimedia.descripcion,
            tipo: multimedia.tipo,
            formato: multimedia.formato,
            id_bucket: multimedia.id_bucket,
            usuario_creador_id: multimedia.usuario_creador_id,
            etiquetas_relacionadas_ids: multimedia.etiquetas_relacionada_ids,
            tableros_agregados_ids: multimedia.tableros_agregado_ids,
            created_at: multimedia.created_at,
            updated_at: multimedia.updated_at,
            tamano: multimedia.tamano
        };
    }
}



//Exporta el api
module.exports = FeedAPI;