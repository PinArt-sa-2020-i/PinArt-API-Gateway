//llama al typeDef de example
const root = require("./root");
const exampleTypeDefs = require("./example_type_def");
const feedTypeDefs = require("./feed_type_def");


//Añande el typeDef al example
const schemaArrays = [root, exampleTypeDefs, feedTypeDefs];
//const schemaArrays = [root, exampleTypeDefs, other, other,...];

//Exporta los typeDefs
module.exports = schemaArrays;