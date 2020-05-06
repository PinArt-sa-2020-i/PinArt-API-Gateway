const {ApolloError} = require('apollo-server');
const verficateAuthentication = (data) => {if(data.id == null){ throw new ApolloError("Need Authentication", 400);}}

//Crea los resolver de example
const favoriteBoardResolvers = {
    Query: {
        allUser: async (_, __, { dataSources, data }) => {
            verficateAuthentication(data)
            return await dataSources.favoriteboardAPI.getAllUser()
        },

        allBoard: async (_, __, { dataSources, data }) => {
            verficateAuthentication(data)
            return await dataSources.favoriteboardAPI.getAllBoard()
        },

        allUserFollow: async (_, __, { dataSources, data }) => {
            verficateAuthentication(data)
            return await dataSources.favoriteboardAPI.getAllUserFollow()
        },

        allBoardFollow: async (_, __, { dataSources, data }) => {
            verficateAuthentication(data)
            return await dataSources.favoriteboardAPI.getAllBoardFollow()
        },

        userByIdBoards: async (_, { id }, {dataSources, data}) => {
            verficateAuthentication(data)
            return await dataSources.favoriteboardAPI.getUserbyId(id)
        },

        usersFollowingByFollower: async (_, { follower_id }, {dataSources, data}) => {
            verficateAuthentication(data)
            return await dataSources.favoriteboardAPI.getUsersFollowingByFollower(follower_id)
        },

        allBoardsByUser:async (_, { id }, {dataSources, data}) => {
            verficateAuthentication(data)
            return await dataSources.favoriteboardAPI.getAllBoardsByUser(id)
        },

        boardById: async (_, { id }, {dataSources, data}) => {
            verficateAuthentication(data)
            return await dataSources.favoriteboardAPI.getBoardbyId(id)
        },

        userFollowById: async (_, { id }, {dataSources, data}) => {
            verficateAuthentication(data)
            return await dataSources.favoriteboardAPI.getUserFollowbyId(id)
        },

        boardFollowById: async (_, { id }, {dataSources, data}) => {
            verficateAuthentication(data)
            return await dataSources.favoriteboardAPI.getBoardFollowbyId(id)
        },

        allBoardsByName:async (_, { name }, {dataSources, data}) => {
            verficateAuthentication(data)
            return await dataSources.favoriteboardAPI.getAllBoardsByName(name)
        },


    },

    Mutation: {
        // createUserBoards: async (_, {id}, {dataSources, data}) => {
        //     verficateAuthentication(data)
        //     return await dataSources.favoriteboardAPI.createUser(id)
        // },

        deleteUserBoards: async (_, {id}, {dataSources, data}) => {
            verficateAuthentication(data)
            return await dataSources.favoriteboardAPI.deleteUser(id)
        },

        createBoard: async (_, {board}, {dataSources, data}) => {
            verficateAuthentication(data)
            return await dataSources.favoriteboardAPI.createBoard(board)
        },

        updateBoard: async (_, {id, board}, {dataSources, data}) => {
            verficateAuthentication(data)
            return await dataSources.favoriteboardAPI.updateBoard(id, board)
        },

        deleteBoard: async (_, {id}, {dataSources, data}) => {
            verficateAuthentication(data)
            return await dataSources.favoriteboardAPI.deleteBoard(id)
        },

        createUserFollow: async (_, {userfollow}, {dataSources, data}) => {
            verficateAuthentication(data)
            return await dataSources.favoriteboardAPI.createUserFollow(userfollow)
        },

        deleteUserFollow: async (_, {id}, {dataSources, data}) => {
            verficateAuthentication(data)
            return await dataSources.favoriteboardAPI.deleteUserFollow(id)
        },

        createBoardFollow: async (_, {boardfollow}, {dataSources, data}) => {
            verficateAuthentication(data)
            return await dataSources.favoriteboardAPI.createBoardFollow(boardfollow)
        },

        deleteBoardFollow: async (_, {id}, {dataSources, data}) => {
            verficateAuthentication(data)
            return await dataSources.favoriteboardAPI.deleteBoardFollow(id)
        },

    },
};
//Exporta los resolvers de examples
module.exports = favoriteBoardResolvers;