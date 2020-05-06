const {ApolloError} = require('apollo-server');
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
            idUsuario = parseInt(idUsuario)
            const response = await dataSources.favoriteboardAPI.getUsersFollowingByFollower(idUsuario);
            let followedUsers = [];
            for(let i = 0; i < response.length; i++){
                followedUsers.push(response[i].id.toString());
            }
            return await dataSources.feedAPI.getUsersFeed(followedUsers);

        },
        getTagsFeed: async(_, { idUsuario }, {dataSources, data}) => {
            verficateAuthentication(data)
            idUsuario = parseInt(idUsuario)
            const response = await dataSources.labelsAPI.userLabels(idUsuario)
            
            let followedTags = [];
            for(let i = 0; i < response.relatedLabels.length; i++){
                followedTags.push(response.relatedLabels[i].id.toString());
            }

            console.log(followedTags)
            return await dataSources.feedAPI.getTagsFeed(followedTags)
                
        },
    }
};

module.exports = feedResolver;