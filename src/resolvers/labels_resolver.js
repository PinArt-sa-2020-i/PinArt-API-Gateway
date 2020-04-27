//Crea los resolver de example
const labelsResolvers = {
  Query: {
    getAllLabels: (_, __, { dataSources }) => dataSources.labelsAPI.getAllLabels(),
    boardLabels: (_, { boardId }, { dataSources }) => dataSources.labelsAPI.boardLabels(boardId),
    userLabels: (_, { userId }, { dataSources }) => dataSources.labelsAPI.userLabels(userId),
    labelById: (_, { id }, { dataSources }) => dataSources.labelsAPI.getLabel(id),
    searchLabel:(_, { fragment }, { dataSources }) => dataSources.labelsAPI.searchLabel(fragment),
  }
  ,
  Mutation: {
    createLabel: (_, { label }, { dataSources }) => dataSources.labelsAPI.createLabel(label),
    updateLabel: (_, { id, label }, { dataSources }) => dataSources.labelsAPI.updateLabel(id, label),
    deleteLabel: (_, { id }, { dataSources }) => dataSources.labelsAPI.deleteLabel(id),
    addLabelBoard: (_, { idBoard, idLabels }, { dataSources }) => dataSources.labelsAPI.addLabelBoard(idBoard, idLabels),
    removeLabelBoard: (_, { idBoard, idLabel }, { dataSources }) => dataSources.labelsAPI.removeLabelBoard(idBoard, idLabel),
    addLabelUser: (_, { idUser, idLabel }, { dataSources }) => dataSources.labelsAPI.addLabelUser(idUser, idLabel),
    removeLabelUser: (_, { idUser, idLabel }, { dataSources }) => dataSources.labelsAPI.removeLabelUser(idUser, idLabel),
  },
};
//Exporta los resolvers de examples
module.exports = labelsResolvers;