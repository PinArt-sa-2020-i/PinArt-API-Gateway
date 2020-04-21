//llama al typeDef de example
const root = require("./root");
const exampleTypeDefs = require("./example_type_def");
const labelTypeDefs = require("./labels_type_def");

//Añande el typeDef al example
const schemaArrays = [root, exampleTypeDefs, labelTypeDefs];
//const schemaArrays = [root, exampleTypeDefs, other, other,...];

//Exporta los typeDefs
module.exports = schemaArrays;