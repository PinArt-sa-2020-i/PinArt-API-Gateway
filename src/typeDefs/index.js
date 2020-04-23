//llama al typeDef de example
const root = require("./root");
const exampleTypeDefs = require("./example_type_def");
const feedTypeDefs = require("./feed_type_def");
const configAccountTypeDefs = require("./configAccount_type_def");
const profileTypeDefs = require("./profile_type_def");
const authTypeDefs = require("./auth_type_def");
const multimediaTypeDefs = require("./multimedia_type_def");
const searchTypeDefs = require("./search_type_def");

const schemaArrays = [
                      root, 
                      exampleTypeDefs, 
                      profileTypeDefs, 
                      authTypeDefs, 
                      configAccountTypeDefs, 
                      multimediaTypeDefs,
                      feedTypeDefs,
                      searchTypeDefs
                     ];


//Exporta los typeDefs
module.exports = schemaArrays;
