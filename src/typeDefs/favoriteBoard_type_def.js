//nodulo que permite crear el typeDef
const { gql } = require('apollo-server');

//Se crea el typeDef
const favoriteBoardDefs = gql`
    type User {
        id: Int!
    }
    type Board {
        id: Int!
        name: String!
        description: String
        createdAt: String
        user: User
        
    }
    
   
    type BoardFollow {
        id: Int!
        user: User
        board: Board
    }
    type UserFollow {
        id: Int!
        userFollower: User
        userFollowing: User
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
        allUser: [User]!
        allBoard: [Board]!
        allUserFollow: [UserFollow]!
        allBoardFollow: [BoardFollow]
        
        userById (id: Int!): User!
        usersFollowingByFollower (follower_id: Int!): [User]!
        allBoardsByUser(id: Int!): [Board]!
        boardById(id: Int!): Board!
        userFollowById(id: Int!): UserFollow!
        boardFollowById(id: Int!): BoardFollow!
        
           
        
    }
    extend type Mutation {
        createUser(id: Int!): Int!
        deleteUser(id: Int!): Int
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