//Permite crear el servidor -> Similar a lo que hace express pero mas limitado
const { ApolloServer } = require("apollo-server");

//Llama al esquema -> los typeDefs unidos
const typeDefs = require("./typeDefs");

//Llama al los resolvers
const resolvers = require("./resolvers");

const ExampleAPI = require('./dataSources/example_api');
const FeedAPI = require('./dataSources/feed_api');
const MultimediaAPI = require('./dataSources/multimedia_api');
const ConfigAccountAPI = require('./dataSources/configAccount_api');
const ProfileAPI = require("./dataSources/profile_api");
const AuthAPI = require("./dataSources/auth_api");
const BucketAPI = require('./dataSources/bucket_api');
const FavoriteBoardAPI = require("./dataSources/favoriteBoard_api");
const LabelsAPI = require('./dataSources/labels_api');


//Authentication
const authentication = require('./utils/authentication');

//Se crea el servidor
const server = new ApolloServer({
     typeDefs,
     resolvers,
     dataSources: () => ({
       exampleAPI: new ExampleAPI(),
       feedAPI: new FeedAPI(),
       multimediaAPI: new MultimediaAPI(),
       profileAPI: new ProfileAPI(),
       authAPI: new AuthAPI(),
       configAccountAPI: new ConfigAccountAPI(),
       bucketAPI: new BucketAPI(),
       favoriteboardAPI: new FavoriteBoardAPI(),
       labelsAPI: new LabelsAPI()
    }),
    context: authentication
});

//Se corre dicho servidor
server.listen({ port: 5000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});