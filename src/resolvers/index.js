//Modulo que permite unir los example
const lodash = require("lodash");

//Trae el resolver de example
const exampleResolvers = require("./example_resolvers");
const favoriteBoardResolvers = require("./favoriteBoard_resolvers");
//const authResolvers = require("./auth_resolver");

//Une todos los resolver
const resolvers = lodash.merge(
    exampleResolvers,
    favoriteBoardResolvers,

);
//const resolvers = lodash.merge(exampleResolvers, others, others);

//Exporta los resolver
module.exports = resolvers;