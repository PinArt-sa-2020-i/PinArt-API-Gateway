const multimediaResolvers = {
    //Query: {
    //  
    //}
    // ,
    Mutation: {
        addMultimedia: (_, {idUsuario, descripcion, idEtiquetas, file}, {dataSources}) => 
            dataSources.multimediaAPI.addMultimedia(idUsuario, descripcion, idEtiquetas, file)
    }
    
};
module.exports = multimediaResolvers;