const { gql } = require('apollo-server');


const multimediaTypeDefs = gql`
    type Multimedia {
        id: String!
        descripcion: String
        url: String
        tipo: String
        formato: String
        tamano: String
        id_bucket: String
        usuario_creador: MulRefUsuario
        etiquetas_relacionadas: [String]
        tablero_agregados:[String]
    }

    type MulRefUsuario{
        id: String!
    }

    extend type Mutation{
        addMultimedia( idUsuario:String! 
                       descripcion:String!
                       idEtiquetas:[String]!
                       file: Upload!
                     ) :String
    }

`;


module.exports = multimediaTypeDefs;