//Permite crear el servidor -> Similar a lo que hace express pero mas limitado
const { ApolloServer } = require("apollo-server-express");

//Llama al esquema -> los typeDefs unidos
const typeDefs = require("./typeDefs");

//Llama al los resolvers
const resolvers = require("./resolvers");

//Add SSL Termination
const express = require("express");
const fs = require("fs");
const https = require("https");
const http = require("http");


//Apis
const ExampleAPI = require('./dataSources/example_api');
const FeedAPI = require('./dataSources/feed_api');
const MultimediaAPI = require('./dataSources/multimedia_api');
const ConfigAccountAPI = require('./dataSources/configAccount_api');
const ProfileAPI = require("./dataSources/profile_api");
const AuthAPI = require("./dataSources/auth_api");
const BucketAPI = require('./dataSources/bucket_api');
const FavoriteBoardAPI = require("./dataSources/favoriteBoard_api");
const LabelsAPI = require('./dataSources/labels_api');
const InterfaceAPI = require('./dataSources/interface_api');


//Authentication
const authentication = require('./utils/authentication');

//Add SSL Terminal
const configurations = {
    development: { ssl: true, port: 443, hostname: 'ec2-3-209-34-155.compute-1.amazonaws.com' }
}
const environment = 'development'
const config = configurations[environment]


//Se crea el servidor
const apollo = new ApolloServer({
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
       labelsAPI: new LabelsAPI(),
       interfaceAPI: new InterfaceAPI(),
    }),
    context: authentication
});


const app = express()
apollo.applyMiddleware({ app })


let server
if (config.ssl) {
  // Assumes certificates are in a .ssl folder off of the package root. Make sure
  // these files are secured.
  server = https.createServer(
    {
      key: fs.readFileSync(`./src/ssl/${environment}/server.key`),
      cert: fs.readFileSync(`./src/ssl/${environment}/server.crt`)
    },
    app
  )
} else {
  server = http.createServer(app)
}

server.listen({ port: config.port }, () =>
  console.log(
    '🚀 Server ready at',
    `http${config.ssl ? 's' : ''}://${config.hostname}:${config.port}${apollo.graphqlPath}`
  )
)

/*
//Se corre dicho servidor
server.listen({ port: 5000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
*/
