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
            let response;
            try {
                response = await dataSources.multimediaAPI.addMultimedia(multimedia.idUsuario,
                                                                         multimedia.descripcion,
                                                                         multimedia.idEtiquetas, 
                                                                         multimedia.file);                
            } catch (error) {
                return new ApolloError(`DATASOURCE ERROR: ${500}: ${error}`, 500)
            }
            return reviewResponse(response);
            
            
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
            let response;
            try {
                response = await dataSources.multimediaAPI.deleteMultimedia(idMultimedia);
            } catch (error) {
                return new ApolloError(`DATASOURCE ERROR: ${500}: ${error}`, 500)
            }
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
            let response;
            try {
                response = await dataSources.multimediaAPI.deleteUsuario_multimedia(idUsuario)
            } catch (error) {
                return new ApolloError(`DATASOURCE ERROR: ${500}: ${error}`, 500)
            }
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