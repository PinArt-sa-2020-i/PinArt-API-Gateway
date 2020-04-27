const verficateAuthentication = (data) => {if(data.id == null){ throw new ApolloError("Need Authentication", 400);}}

const feedResolver = {
    Query: {
        getMultimediaById: async (_, { id }, {dataSources, data}) => {
            verficateAuthentication(data);
            return await dataSources.feedAPI.getMultimediaById(id)
        },
        getMultimediaByUser: async (_, { id }, {dataSources, data}) => {
            verficateAuthentication(data);
            return await dataSources.feedAPI.getMultimediaByUser(id)
        },
        getMultimediaByTag: async (_, { id }, {dataSources, data}) => {
            verficateAuthentication(data);
            return await dataSources.feedAPI.getMultimediaByTag(id)
        },
        getMultimediaByTable: async (_, { id }, {dataSources, data}) => {
            verficateAuthentication(data);
            return await dataSources.feedAPI.getMultimediaByTable(id)
        },


        getUsersFeed: async (_, { idUsuario }, {dataSources, data}) =>{
            verficateAuthentication(data)
            //Aca se simula la funcion de Elsa
            //Le envio este idUsuario y me regresa los ids de los usuariso que sigue
            
            //Supongamos que eso tiene este formato:
            const followedUsers = ["Ibai", "Ocelote"];

            return await dataSources.feedAPI.getUsersFeed(followedUsers);

        },
        getTagsFeed: async(_, { idTag }, {dataSources, data}) => {
            verficateAuthentication(data)
            //Aca se simula la funcion de Elsa
            //Le envio este idUsuario y me regresa los ids de las etiquetas que sigue
            
            //Supongamos que eso tiene este formato:
            const followedTags = ["LOL", "G2"];
            return await dataSources.feedAPI.getTagsFeed(followedTags)
        },
    }
};

module.exports = feedResolver;