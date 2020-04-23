const feedResolver = {
    Query: {
        getMultimediaById: (_, { id }, {dataSources}) => dataSources.feedAPI.getMultimediaById(id),
        getMultimediaByUser: (_, { id }, {dataSources}) => dataSources.feedAPI.getMultimediaByUser(id),
        getMultimediaByTag: (_, { id }, {dataSources}) => dataSources.feedAPI.getMultimediaByTag(id),
        getMultimediaByTable: (_, { id }, {dataSources}) => dataSources.feedAPI.getMultimediaByTable(id),
        getUsersFeed: async (_, { idUsuario }, {dataSources}) =>{
            //Aca se simula la funcion de Elsa
            //Le envio este idUsuario y me regresa los ids de los usuariso que sigue
            
            //Supongamos que eso tiene este formato:
            const followedUsers = ["Ibai", "Ocelote"];

            return await dataSources.feedAPI.getUsersFeed(followedUsers);

        },
        getTagsFeed: async(_, { idTag }, {dataSources}) => {
            //Aca se simula la funcion de Elsa
            //Le envio este idUsuario y me regresa los ids de las etiquetas que sigue
            
            //Supongamos que eso tiene este formato:
            const followedTags = ["LOL", "G2"];
            return await dataSources.feedAPI.getTagsFeed(followedTags)
        },
    }
};

module.exports = feedResolver;