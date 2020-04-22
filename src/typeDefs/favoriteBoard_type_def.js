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
    }
    type BoardFollow {
        id: Int!
        board_id: String!
        user_id: String!
    }
    type UserFollow {
        id: Int!
        user_follower_id: Int!
        user_following_id: Int!
    }
    
    input UserInput {
       id: Int!
    }
    input BoardInput {
        name: String!
        description: String       
    }
       input BoardFollowInput {
        board_id: String!
        user_id: String!
    }
    input UserFollowInput {
        user_follower_id: Int!
        user_following_id: Int!
    }
     
    extend type Query {
        allUser: [User]!
        allBoard: [Board]!
        allUserFollow: [UserFollow]!
        allBoardFollow: [BoardFollow]!
        
        userById (id: Int!): User!
        usersFollowingByFollower (follower_id: Int!): [User]!
        allBoardsByUser(id: Int!): [Board]!
        boardById(id: Int!): Board!
        userFollowById(id: Int!): UserFollow!
        boardFollowById(id: Int!): BoardFollow!
        
           
        
    }
    extend type Mutation {
        createUser(user: UserInput!): User!
        deleteUser(id: Int!): Int
        createBoard(user_id:Int!,board:BoardInput!):Board       
        updateBoard(id: Int!, board: BoardInput!): Board!
        deleteBoard(id: Int!): Int
        createUserFollow(userFollow: UserFollowInput!): UserFollow!
        deleteUserFollow(id: Int!): Int
        createBoardFollow(boardFollow: BoardFollowInput!): BoardFollow!
        deleteBoardFollow(id: Int!): Int
        
    }
`;

//Se exporta el typeDef
module.exports = favoriteBoardDefs;