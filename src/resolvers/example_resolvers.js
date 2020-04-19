//Crea los resolver de example
const exampleResolvers = {
    Query: {
        getAllExamples: (_,__, {dataSources}) => dataSources.exampleAPI.getAllExample()
    }
    // ,
    // Mutation: {
        
    // }
};
//Exporta los resolvers de examples
module.exports = exampleResolvers;