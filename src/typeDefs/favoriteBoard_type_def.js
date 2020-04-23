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
        userFollower: UserBoards
        userFollowing: UserBoards
    }
    
    input UserInput {
       id: Int!
    }
    input BoardInput {
        name: String!
        description: String       
    }
       input BoardFollowInput {
        board_id: Int
        user_id: Int
    }
    input UserFollowInput {
        user_follower_id: Int
        user_following_id: Int
    }
     
    extend type Query {
        allUser: [UserBoards]!
        allBoard: [Board]!
        allUserFollow: [UserFollow]!
        allBoardFollow: [BoardFollow]
        
        userById (id: Int!): UserBoards!
        usersFollowingByFollower (follower_id: Int!): [UserBoards]!
        allBoardsByUser(id: Int!): [Board]!
        boardById(id: Int!): Board!
        userFollowById(id: Int!): UserFollow!
        boardFollowById(id: Int!): BoardFollow!
        
           
        
    }
    extend type Mutation {
        createUserBoards(id: Int!): Int!
        deleteUserBoards(id: Int!): Int
        createBoard(user_id:Int!,board:BoardInput!):Board       
        updateBoard(id: Int!, board: BoardInput!): Board!
        deleteBoard(id: Int!): Int
        createUserFollow(  userFollowing:Int!, userFollower:Int!,userfollow: UserFollowInput): UserFollow
        deleteUserFollow(id: Int!): Int
        createBoardFollow(user_id:Int!, board_id:Int!, boardfollow:BoardFollowInput): BoardFollow
        deleteBoardFollow(id: Int!): Int
        
    }
`;

//Se exporta el typeDef
module.exports = favoriteBoardDefs;