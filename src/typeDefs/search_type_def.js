const { gql } = require('apollo-server');

const searchTypeDefs = gql`    
    type relatedUserContent {
        relatedUsers: [String]
        allUserTags: [String]
    }

    type relatedUserTag {
        relatedTags: [String]
        relatedTagUsers: [String]
    }

    extend type Query {
        getRelatedUsersByUser(idUsuario: String): relatedUserContent
        getRelatedTagsByTag(idTag: String): relatedUserTag
    }
`;

//Se exporta el typeDef
module.exports = searchTypeDefs;