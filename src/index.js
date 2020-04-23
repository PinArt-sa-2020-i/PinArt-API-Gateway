const { ApolloServer } = require("apollo-server");

const typeDefs = require("./typeDefs");

const resolvers = require("./resolvers");

//LLama a una la API de ejemplos
const ExampleAPI = require("./dataSources/example_api");
const FavoriteBoardAPI = require("./dataSources/favoriteBoard_api");

//Se crea el servidor
const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        exampleAPI: new ExampleAPI(),
        favoriteboardAPI: new FavoriteBoardAPI(),
    }),
});

//Se corre dicho servidor
server.listen({ port: 5000 }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});




