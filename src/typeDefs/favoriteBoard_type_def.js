//nodulo que permite crear el typeDef
const { gql } = require('apollo-server');

//Se crea el typeDef
const favoriteBoardDefs = gql`
    type UserBoards {
        id: Int!
    }
    type Board {
        id: Int!
        name: String!
        description: String
        createdAt: String
        user: UserBoards
    }
   
    type BoardFollow {
        id: Int!
        user: UserBoards
        board: Board
    }
    type UserFollow {
        id: Int!
        userFollower: User
        userFollowing: User
    }
    
    input UserInputBoards {
       id: Int!
    }
    input BoardInput {
        name: String!
        description: String
        user_id: Int!       
    }
       input BoardFollowInput {
        board_id: Int
        user_id: Int
    }
    input UserFollowInput {
        userFollower_id: Int
        userFollowing_id: Int
    }
     
    extend type Query {
        allUser: [UserBoards]!
        allBoard: [Board]!
        allUserFollow: [UserFollow]!
        allBoardFollow: [BoardFollow]
        
        userByIdBoards (id: Int!): UserBoards!
        usersFollowingByFollower (follower_id: Int!): [UserBoards]!
        allBoardsByUser(id: Int!): [Board]!
        boardById(id: Int!): Board!
        userFollowById(id: Int!): UserFollow!
        boardFollowById(id: Int!): BoardFollow!
        allBoardsByName(name: String!): [Board]!
           
        
    }
    extend type Mutation {
        createUserBoards(id: Int!): Int!
        deleteUserBoards(id: Int!): Int
        createBoard(board:BoardInput!):Board       
        updateBoard(id: Int!, board: BoardInput!): Board!
        deleteBoard(id: Int!): Int
        createUserFollow( userfollow: UserFollowInput): UserFollow
        deleteUserFollow(id: Int!): Int
        createBoardFollow( boardfollow:BoardFollowInput): BoardFollow
        deleteBoardFollow(id: Int!): Int
        
    }
`;

//Se exporta el typeDef
module.exports = favoriteBoardDefs;