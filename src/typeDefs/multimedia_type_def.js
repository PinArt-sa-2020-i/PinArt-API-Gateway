const { gql } = require('apollo-server');


const multimediaTypeDefs = gql`
    type Multimedia {
        id: String!
        descripcion: String
        url: String
        formato: String
        tamano: String
        id_bucket: String
        usuario_creador_id: String
        etiquetas_relacionadas_ids: [String]
        tableros_agregados_ids:[String]
        created_at: String
        updated_at: String
    }

    input MultimediaInput{
        idUsuario:String!
        descripcion:String!
        idEtiquetas:[String]!
        file: Upload!
    }

    input UpdateMultimediaInput{
        id: String!
        descripcion: String
        idEtiquetas: [String]
    }

    extend type Mutation{
        addMultimedia( multimedia: MultimediaInput) : Multimedia
        deleteTagMultimedia(idMultimedia: String, idTag:String): Multimedia
        addTagMultimedia(idMultimedia: String, idTag:String): Multimedia
        deleteMultimedia(idMultimedia:String): String
        updateMultimedia(multimedia:UpdateMultimediaInput!):Multimedia
        addMultimediaTablero(idMultimedia: String, idTablero:String): Tablero
        deleteMultimediaTablero(idMultimedia:String, idTablero:String): Tablero
        deleteTablero_multimedia(idTablero:String):String
        deleteUsuario_multimedia(idUsuario:String):String
        deleteEtiqueta_multimedia(idEtiqueta:String):String
    }



`;


module.exports = multimediaTypeDefs;