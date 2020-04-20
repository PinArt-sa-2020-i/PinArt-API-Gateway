  //Permite crear el servidor -> Similar a lo que hace express pero mas limitado
const { ApolloServer } = require('apollo-server');

//Llama al esquema -> los typeDefs unidos
const typeDefs = require('./typeDefs');

//Llama al los resolvers
const resolvers = require('./resolvers');

//LLama a una la API de ejemplos
const ExampleAPI = require('./dataSources/example_api');
const MultimediaAPI = require('./dataSources/multimedia_api');



//Se crea el servidor
const server = new ApolloServer({
     typeDefs,
     resolvers,
     dataSources: () => ({
       exampleAPI: new ExampleAPI(),
       multimediaAPI: new MultimediaAPI()
     })
});


//Se corre dicho servidor
server.listen({port:5000}).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});