//Modulo que permite unir los example
const lodash = require('lodash');

//Trae el resolver de example
const exampleResolvers = require('./example_resolvers');
const configAccountResolvers = require('./configAccount_resolvers');

//Une todos los resolver
const resolvers = lodash.merge(exampleResolvers, configAccountResolvers);
//const resolvers = lodash.merge(exampleResolvers, others, others);

//Exporta los resolver
module.exports = resolvers;
