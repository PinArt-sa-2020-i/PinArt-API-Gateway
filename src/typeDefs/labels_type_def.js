//nodulo que permite crear el typeDef
const { gql } = require('apollo-server');

//Se crea el typeDef
const labelsTypeDefs = gql`
    type Label{
        id: Int!
        name: String
        description: String
        relatedLabels:[Int]
    }
    input LabelInput{
        name: String
        description: String
        relatedLabels: [Int]
    }
    type LabelBoard {
        id: Int!
        relatedLabels: [Label]
    }
    type LabelUser {
        id: Int!
        relatedLabels: [Label]
    }

    extend type Query {
        getAllLabels: [Label]
        labelById(id: Int!): Label
        boardLabels(boardId: Int!): LabelBoard
        userLabels(userId: Int!): LabelUser
    }
    extend type Mutation {
        createLabel(label: LabelInput!): Label!
        updateLabel(id: Int!, label: LabelInput): Label!
        deleteLabel(id: Int!): Int!
        addLabelBoard(idBoard: Int!, idLabels: [Int!]): LabelBoard!
        removeLabelBoard(idBoard: Int!, idLabel: Int!): LabelBoard!
        addLabelUser(idUser: Int!, idLabel: [Int!]): LabelUser!
        removeLabelUser(idUser: Int!, idLabel: Int!): LabelUser!
    }

`;

//Se exporta el typeDef
module.exports = labelsTypeDefs;