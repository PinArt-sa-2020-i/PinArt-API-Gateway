//llama al typeDef de example
const exampleTypeDefs = require("./example_type_def");
const profileTypeDefs = require("./profile_type_def");

//Añande el typeDef al example
const schemaArrays = [exampleTypeDefs, profileTypeDefs];
//const schemaArrays = [exampleTypeDefs, other, other,...];

//Exporta los typeDefs
module.exports = schemaArrays;
