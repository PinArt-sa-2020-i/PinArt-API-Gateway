const verficateAuthentication = (data) => {if(data.id == null){ throw new ApolloError("Need Authentication", 400);}}

//Crea los resolver de example
const labelsResolvers = {
  Query: {
    getAllLabels: async (_, __, { dataSources, data }) => {
        verficateAuthentication(data);
        return await dataSources.labelsAPI.getAllLabels()
    },
    boardLabels: async (_, { boardId }, { dataSources, data }) => {
        verficateAuthentication(data);
        return await dataSources.labelsAPI.boardLabels(boardId)
    },
    userLabels: async (_, { userId }, { dataSources, data }) => {
        verficateAuthentication(data);
        return await dataSources.labelsAPI.userLabels(userId)
    },
    labelById: async (_, { id }, { dataSources, data }) => {
        verficateAuthentication(data);
        return await dataSources.labelsAPI.getLabel(id)
    },
  }
  ,
  Mutation: {
    createLabel: async (_, { label }, { dataSources, data }) => {
        verficateAuthentication(data);
        return await dataSources.labelsAPI.createLabel(label)
    },
    updateLabel: async (_, { id, label }, { dataSources, data }) => {
        verficateAuthentication(data);
        return await dataSources.labelsAPI.updateLabel(id, label)
    },
    deleteLabel: async (_, { id }, { dataSources, data }) => {
        verficateAuthentication(data);
        return await dataSources.labelsAPI.deleteLabel(id)
    },
    addLabelBoard: async (_, { idBoard, idLabels }, { dataSources, data }) => {
        verficateAuthentication(data);
        return await dataSources.labelsAPI.addLabelBoard(idBoard, idLabels)
    },
    removeLabelBoard: async (_, { idBoard, idLabel }, { dataSources, data }) => {
        verficateAuthentication(data);
        return await dataSources.labelsAPI.removeLabelBoard(idBoard, idLabel)
    },
    addLabelUser: async (_, { idUser, idLabel }, { dataSources, data }) => {
        verficateAuthentication(data);
        return await dataSources.labelsAPI.addLabelUser(idUser, idLabel)
    },
    removeLabelUser: async (_, { idUser, idLabel }, { dataSources, data }) => {
        verficateAuthentication(data);
        return await dataSources.labelsAPI.removeLabelUser(idUser, idLabel)
    },
  },
};
//Exporta los resolvers de examples
module.exports = labelsResolvers;