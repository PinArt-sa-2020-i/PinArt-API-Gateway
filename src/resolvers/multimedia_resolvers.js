const {ApolloError} = require('apollo-server');
  
function reviewResponse(response){
    if(response.status == 200){
        return response.data;
    }
    else {
        return new ApolloError(`API ERROR: ${response.message} - ${response.status} `, response.status);
    }
}

const multimediaResolvers = {
    
    Mutation: {
        addMultimedia:async (_, {multimedia}, {dataSources})  => {
            //Datos General de la imagen
            let url_imagen;
            let id_bucket;
            let idUsuario = multimedia.idUsuario;
            let descripcion = multimedia.descripcion;
            let idEtiquetas = multimedia.idEtiquetas;
            let formato = "imagen-default";
            let tamano = "size-default";

            //Subida de la imagen al bucket
            let response;
            try {response = await dataSources.bucketAPI.addFile(multimedia.file);} 
            catch (error) {return new ApolloError(`STORAGE ERROR: ${500}: ${error}`, 500)}
            
            //Respuesta del bucket
            if(response.status == 200){
                url_imagen = `https://pinart-images-storage.s3.amazonaws.com/${response.data.message}`
                id_bucket = response.data.message;
            }
            else {return new ApolloError(`API ERROR: ${response.message} - ${response.status} `, response.status);}
            

            //Guardando los datos de la multimedia
            try {
                response = await dataSources.multimediaAPI.addMultimedia(idUsuario,
                                                                         descripcion, 
                                                                         idEtiquetas, 
                                                                         id_bucket, 
                                                                         url_imagen, 
                                                                         formato, 
                                                                         tamano);
            } catch (error) {
                return new ApolloError(`DATASOURCE ERROR: ${500}: ${error}`, 500)
            }
            //Manejando entrada
            return reviewResponse(response)
        },     

        deleteTagMultimedia: async (_, {idMultimedia, idTag}, {dataSources}) => {
            let response;
            try {
                response = await dataSources.multimediaAPI.deleteTagMultimedia(idMultimedia, idTag)
            } catch (error) {
                return new ApolloError(`DATASOURCE ERROR: ${500}: ${error}`, 500)
            }
            return reviewResponse(response);
            
        }, 
        
        addTagMultimedia: async (_, {idMultimedia, idTag}, {dataSources}) => {
            let response;
            try {
                response = await dataSources.multimediaAPI.addTagMultimedia(idMultimedia, idTag)
            } catch (error) {
                return new ApolloError(`DATASOURCE ERROR: ${500}: ${error}`, 500)
            }
            return reviewResponse(response);
            
        }, 
        
        deleteMultimedia: async(_, {idMultimedia}, {dataSources}) =>{
            //Se recupera el id del bucket
            let id_bucket;
            try {id_bucket = (await dataSources.feedAPI.getMultimediaById(idMultimedia)).id_bucket;} 
            catch(error){return new ApolloError(`DATASOURCE ERROR: ${500}: ${error}`, 500)}

            //Se elimina el file del Bucket 
            let response;
            try {response = await dataSources.bucketAPI.deleteFile(id_bucket);} 
            catch (error) { return new ApolloError(`DATASOURCE ERROR: ${500}: ${error}`, 500) }

            //Respuesta del Bucket
            if(response.status == 200){}
            else {return new ApolloError(`API ERROR: ${response.message} - ${response.status} `, response.status);}

            //Se elimina la informacion relacionada con la datata
            try {response = await dataSources.multimediaAPI.deleteMultimedia(idMultimedia);} 
            catch (error) {return new ApolloError(`DATASOURCE ERROR: ${500}: ${error}`, 500)}

            //Se analiza la respuesta
            return reviewResponse(response);
        },

        updateMultimedia: async(_, {multimedia}, {dataSources}) => {
            let response;
            try {
                response = await dataSources.multimediaAPI.updateMultimedia(multimedia);
            } catch (error) {
                return new ApolloError(`DATASOURCE ERROR: ${500}: ${error}`, 500)
            }
            return reviewResponse(response);
        },

        addMultimediaTablero: async (_, {idMultimedia, idTablero}, {dataSources}) => {
            let response;
            try {
                response = await dataSources.multimediaAPI.addMultimediaTablero(idMultimedia, idTablero)
            } catch (error) {
                return new ApolloError(`DATASOURCE ERROR: ${500}: ${error}`, 500)
            }
            return reviewResponse(response);
            
        },

        deleteMultimediaTablero: async (_, {idMultimedia, idTablero}, {dataSources}) => {
            let response;
            try {
                response = await dataSources.multimediaAPI.deleteMultimediaTablero(idTablero, idMultimedia)
            } catch (error) {
                return new ApolloError(`DATASOURCE ERROR: ${500}: ${error}`, 500)
            }
            return reviewResponse(response);
            
        },
        
        deleteTablero_multimedia: async (_, {idTablero}, {dataSources}) => {
            let response;
            try {
                response = await dataSources.multimediaAPI.deleteTablero_multimedia(idTablero)
            } catch (error) {
                return new ApolloError(`DATASOURCE ERROR: ${500}: ${error}`, 500)
            }
            return reviewResponse(response);
            
        },

        deleteUsuario_multimedia: async (_, {idUsuario}, {dataSources}) => {
            //Traer imagenes del usuario
            let response;
            try { response = await dataSources.feedAPI.getMultimediaByUser(idUsuario);} 
            catch (error) { return new ApolloError(`DATASOURCE ERROR: ${500}: ${error}`, 500) } 

            //Se eliminan imagenes del bucket
            for(let i =0; i<response.length; i++){
                try {
                    let response_bucket =  await dataSources.bucketAPI.deleteFile(response[i].id_bucket);
                    if(response_bucket.status == 200){}
                    else {return new ApolloError(`API ERROR: ${response_bucket.message} - ${response_bucket.status} `, response_bucket.status);}
                } catch (error) {
                    return new ApolloError(`DATASOURCE ERROR: ${500}: ${error}`, 500);
                }
            }
            
            //Se eliminan datos del usuario
            try { response = await dataSources.multimediaAPI.deleteUsuario_multimedia(idUsuario);} 
            catch (error) {return new ApolloError(`DATASOURCE ERROR: ${500}: ${error}`, 500);}
            return reviewResponse(response);
        },

        deleteEtiqueta_multimedia: async (_, {idEtiqueta}, {dataSources}) => {
            let response;
            try {
                response = await dataSources.multimediaAPI.deleteEtiqueta_multimedia(idEtiqueta)
            } catch (error) {
                return new ApolloError(`DATASOURCE ERROR: ${500}: ${error}`, 500)
            }
            return reviewResponse(response);
            
        }
    }
    
};


module.exports = multimediaResolvers;