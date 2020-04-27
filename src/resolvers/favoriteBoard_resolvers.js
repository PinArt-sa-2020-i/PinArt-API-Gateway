//Crea los resolver de example
const favoriteBoardResolvers = {
    Query: {
        allUser: (_, __, { dataSources }) => dataSources.favoriteboardAPI.getAllUser(),
        allBoard: (_, __, { dataSources }) => dataSources.favoriteboardAPI.getAllBoard(),
        allUserFollow: (_, __, { dataSources }) => dataSources.favoriteboardAPI.getAllUserFollow(),
        allBoardFollow: (_, __, { dataSources }) => dataSources.favoriteboardAPI.getAllBoardFollow(),

        userByIdBoards: (_, { id }, {dataSources}) => dataSources.favoriteboardAPI.getUserbyId(id),
        usersFollowingByFollower: (_, { follower_id }, {dataSources}) => dataSources.favoriteboardAPI.getUsersFollowingByFollower(follower_id),
        allBoardsByUser:(_, { id }, {dataSources}) => dataSources.favoriteboardAPI.getAllBoardsByUser(id),
        boardById: (_, { id }, {dataSources}) => dataSources.favoriteboardAPI.getBoardbyId(id),
        userFollowById: (_, { id }, {dataSources}) => dataSources.favoriteboardAPI.getUserFollowbyId(id),
        boardFollowById: (_, { id }, {dataSources}) => dataSources.favoriteboardAPI.getBoardFollowbyId(id),
        allBoardsByName:(_, { name }, {dataSources}) => dataSources.favoriteboardAPI.getAllBoardsByName(name),


    },

    Mutation: {
        createUserBoards: (_, {id}, {dataSources}) => dataSources.favoriteboardAPI.createUser(id),
        deleteUserBoards: (_, {id}, {dataSources}) => dataSources.favoriteboardAPI.deleteUser(id),


        createBoard: (_, {board}, {dataSources}) => dataSources.favoriteboardAPI.createBoard(board),
        updateBoard: (_, {id, board}, {dataSources}) => dataSources.favoriteboardAPI.updateBoard(id, board),
        deleteBoard: (_, {id}, {dataSources}) => dataSources.favoriteboardAPI.deleteBoard(id),


        createUserFollow: (_, {userfollow}, {dataSources}) => dataSources.favoriteboardAPI.createUserFollow(userfollow),
        deleteUserFollow: (_, {id}, {dataSources}) => dataSources.favoriteboardAPI.deleteUserFollow(id),

        createBoardFollow: (_, {boardfollow}, {dataSources}) => dataSources.favoriteboardAPI.createBoardFollow(boardfollow),
        deleteBoardFollow: (_, {id}, {dataSources}) => dataSources.favoriteboardAPI.deleteBoardFollow(id),


    },
};
//Exporta los resolvers de examples
module.exports = favoriteBoardResolvers;