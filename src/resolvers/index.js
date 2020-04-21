//Modulo que permite unir los example
const lodash = require("lodash");

const exampleResolvers = require("./example_resolvers");
const profileResolvers = require("./profile_resolver");
const authResolvers = require("./auth_resolver");
const configAccountResolvers = require('./configAccount_resolvers');
const multimediaResolvers = require('./multimedia_resolvers');

const resolvers = lodash.merge(
  exampleResolvers,
  profileResolvers,
  authResolvers,
  configAccountResolvers, 
  multimediaResolvers
);

//const resolvers = lodash.merge(exampleResolvers, others, others);

//Exporta los resolver
module.exports = resolvers;
