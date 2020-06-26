const { RESTDataSource } = require('apollo-datasource-rest');

const fetch = require('node-fetch');
const FormData = require('form-data');
const fs = require('fs');

const serverConfig = require('../server');

class MultimediaAPI extends RESTDataSource {
    willSendRequest(request) {
        request.headers.set('Content-Type', "multipart/form-data");
    }

    constructor() {
        super();
        this.baseURL = `http://${serverConfig.multimedia_url}/${serverConfig.multimedia_entryPoint}`;    
    }
    

    async addMultimedia(idUsuario, descripcion, idEtiquetas, id_bucket, url_imagen, formato, tamano){

        //Creando la data del formulario
        let formdata = new FormData();
        formdata.append("idUsuario", idUsuario);
        formdata.append("descripcion", descripcion);
        formdata.append("id_bucket", id_bucket);
        formdata.append("url_imagen", url_imagen);
        formdata.append("formato", formato);
        formdata.append("tamano", tamano);
        for(let i=0; i<idEtiquetas.length; i++){
            formdata.append("idEtiquetas[]", idEtiquetas[i]);
        }
        
        
        //Configurando opcion es del formulario
        var requestOptions = {
            method: 'POST',
            body: formdata
        };

        //Se realiza la consulta
        const response=  await fetch( `${this.baseURL}multimedia/add`, requestOptions)
                                    .then(response => { 
                                        return { 
                                            status:response.status,
                                            body: response.json()
                                        }; 
                                    })
                                    .then(response => { return response; });

        //Manejando las respuestas
        if(response.status == 200){
            return {
                status: 200,
                data: this.multimediaReducer(await response.body)
            };
        }
        else{
            return{
                status: response.status,
                message: (await response.body).message
            }
        }
    }

    async deleteTagMultimedia(idMultimedia, idEtiqueta){
        try {
            const response = await this.delete(`/multimedia/deleteEtiqueta/${idMultimedia}/${idEtiqueta}`);
            return {
                status: 200,
                data: this.multimediaReducer(response)
            };
        } catch (error) {
            return {
                status:error.extensions.response.status,
                message: error.extensions.response.body.message
            };
        }
    }

    async deleteMultimedia(idMultimedia){
        try {
            const response = await this.delete(`/multimedia/delete/${idMultimedia}`);
            return {
                status: 200,
                data: response.message
            };
        } catch (error) {
            return {
                status:error.extensions.response.status,
                message: error.extensions.response.body.message
            };
        }
    }

    async addTagMultimedia(idMultimedia, idTag){
        let formdata = new FormData();
        formdata.append("idMultimedia", idMultimedia);
        formdata.append("idEtiqueta", idTag);

        let requestOptions = {
            method: 'PUT',
            body: formdata
        };

        const response=  await fetch(`${this.baseURL}multimedia/addEtiqueta`, requestOptions)
                                    .then(response => { 
                                        return { 
                                            status:response.status,
                                            body: response.json()
                                        }; 
                                    })
                                    .then(response => { return response; });
        //Manejando las respuestas
        if(response.status == 200){
            return {
                status: 200,
                data: this.multimediaReducer(await response.body)
            };
        }
        else{
            return{
                status: response.status,
                message: (await response.body).message
            }
        }
    }

    async addMultimediaTablero(idMultimedia, idTablero){
        
        let formdata = new FormData();
        formdata.append("idMultimedia", idMultimedia);
        formdata.append("idTablero", idTablero);
        
        let requestOptions = {
            method: 'POST',
            body: formdata
        };

        const response=  await fetch(`${this.baseURL}tablero/addMultimedia`, requestOptions)
                                    .then(response => { 
                                        return { 
                                            status:response.status,
                                            body: response.json()
                                        }; 
                                    })
                                    .then(response => { return response; });
        //Manejando las respuestas
        if(response.status == 200){
            return {
                status: 200,
                data: this.tableroReducer(await response.body)
            };
        }
        else{
            return{
                status: response.status,
                message: (await response.body).message
            }
        }
        
    }

    async updateMultimedia(multimedia){
        
        let formdata = new FormData();
        formdata.append("id", multimedia.id);
        formdata.append("descripcion", multimedia.descripcion);
        for(let i=0; i<multimedia.idEtiquetas.length; i++){
            formdata.append("idEtiquetas[]", multimedia.idEtiquetas[i]);
        }

        let requestOptions = {
            method: 'PUT',
            body: formdata
        };

        const response=  await fetch(`${this.baseURL}multimedia/update`, requestOptions)
                                    .then(response => { 
                                        return { 
                                            status:response.status,
                                            body: response.json()
                                        }; 
                                    })
                                    .then(response => { return response; });
        //Manejando las respuestas
        if(response.status == 200){
            return {
                status: 200,
                data: this.multimediaReducer(await response.body)
            };
        }
        else{
            return{
                status: response.status,
                message: (await response.body).message
            }
        }
        
    }

    async deleteMultimediaTablero(idTablero, idMultimedia){
        try {
            const response = await this.delete(`/tablero/deleteMultimedia/${idTablero}/${idMultimedia}`);
            return {
                status: 200,
                data: this.tableroReducer(response)
            };
        } catch (error) {
            return {
                status:error.extensions.response.status,
                message: error.extensions.response.body.message
            };
        }
    }

    async deleteTablero_multimedia(idTablero){
        try {
            const response = await this.delete(`/tablero/delete/${idTablero}`);
            return {
                status: 200,
                data: response.message
            };
        } catch (error) {
            return {
                status:error.extensions.response.status,
                message: error.extensions.response.body.message
            };
        }
    }

    async deleteUsuario_multimedia(idUsuario){
        try {
            const response = await this.delete(`/usuario/delete/${idUsuario}`);
            return {
                status: 200,
                data: response.message
            };
        } catch (error) {
            return {
                status:error.extensions.response.status,
                message: error.extensions.response.body.message
            };
        }
    }
    
    async deleteEtiqueta_multimedia(idEtiqueta){
        try {
            const response = await this.delete(`/etiqueta/delete/${idEtiqueta}`);
            return {
                status: 200,
                data: response.message
            };
        } catch (error) {
            return {
                status:error.extensions.response.status,
                message: error.extensions.response.body.message
            };
        }
    }

    multimediaReducer(response){
        return{
            id: response.multimedia.id || "0000",
            descripcion: response.multimedia.descripcion,
            url: response.multimedia.url,
            formato: response.multimedia.formato,
            tamano: response.multimedia.tamano,
            id_bucket: response.multimedia.id_bucket,
            usuario_creador_id: response.multimedia.usuario_creador_id,
            etiquetas_relacionadas_ids: response.multimedia.etiquetas_relacionadas_ids,
            tableros_agregados_ids:response.multimedia.tableros_agregados_ids,
            created_at: response.multimedia.created_at,
            updated_at: response.multimedia.updated_at,
        }
    };

    tableroReducer(response){
        return{
            id: response.tablero.id || "0000",
            multimedia_agregada_ids: response.tablero.multimedia_agregada_ids
        }
    }
    
}


module.exports = MultimediaAPI;
