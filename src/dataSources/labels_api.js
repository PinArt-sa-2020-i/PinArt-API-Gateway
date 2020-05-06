//Modulo que permite el manejo de las APIS
const {RESTDataSource} = require('apollo-datasource-rest');

//Datos del API
const serverConfig = require('../server');

class LabelsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `http://${serverConfig.labels_url}:${serverConfig.labels_port}`;
  }

  async getAllLabels(){
    return await this.get("/label");
  }

  async createLabel(label) {
    label = new Object(JSON.parse(JSON.stringify(label)));
    let resLabel = await this.put("/label", label);
    return this.labelReducer(resLabel);
  }

  async updateLabel(id, label) {
    label.id = id;
    label = new Object(JSON.parse(JSON.stringify(label)));
    let resLabel = await this.post("/label", label);
    return this.labelReducer(resLabel)
  }

  async getLabel(id) {
    let label = await this.get(`/label?id=${id}`);
    label["id"] = id;
    return this.labelReducer(label);
  }

  async deleteLabel(id) {
    let res = await this.delete(`/label/${id}`);
    return res.id;
  }

  async boardLabels(id) {
    let res = await this.get(`/label/board/${id}`);
    return this.labelBoardReducer(res);
  }

  async userLabels(id) {
    let res = await this.get(`/label/user/${id}`);
    return this.labelUserReducer(res);
  }

  async addLabelBoard(id, relatedLabels) {
    let res = await this.put(`/label/board/${id}`,{relatedLabels});
    return this.labelBoardReducer(res);
  }

  async removeLabelBoard(idBoard, id) {
    let response = await this.delete(`/label/board/${idBoard}`,{id});
    return response.id;
  }

  async addLabelUser(id, relatedLabels) {
    let res = await this.put(`/label/user/${id}`,{relatedLabels});
    return this.labelUserReducer(res);
  }

  async removeLabelUser(idUser, id) {
    let response = await this.delete(`/label/user/${idUser}`,{id});
    return response.id;
  }

  async searchLabel(fragment) {
    return await this.get('/label/search',{fragment});
  }

  labelReducer(label) {
    return {
      id: label.id,
      name: label.name,
      description: label.description,
      relatedLabels: label.relatedLabels,
    };
  }

  labelBoardReducer(board) {
    return {
      id: board.id,
      relatedLabels: board.relatedLabels,
    };
  }

  labelUserReducer(user) {
    return {
      id: user.id,
      relatedLabels: user.relatedLabels,
    };
  }
}

//exporta el api
module.exports = LabelsAPI;
