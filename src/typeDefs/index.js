//llama al typeDef de example
const root = require("./root");
const exampleTypeDefs = require("./example_type_def");
const profileTypeDefs = require("./profile_type_def");
const authTypeDefs = require("./auth_type_def");

//Añande el typeDef al example
const schemaArrays = [root, exampleTypeDefs, profileTypeDefs, authTypeDefs];
//const schemaArrays = [exampleTypeDefs, other, other,...];


//Exporta los typeDefs
module.exports = schemaArrays;
