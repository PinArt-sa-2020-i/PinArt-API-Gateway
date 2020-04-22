//Modulo que permite el manejo de las APIS
const {RESTDataSource} = require('apollo-datasource-rest');

//Datos del API
const serverConfig = require('../server');

//Ver ejemplo del repositorio
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
    console.log(label);
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
    let res = await this.get(`/label/board/${id}`);
    return this.labelUserReducer(res);
  }

  async addLabelBoard(id, relatedLabels) {
    let res = await this.put(`/label/board/${id}`,{relatedLabels});
    return this.labelBoardReducer(res);
  }

  async removeLabelBoard() {
    return {msg: "not supported yet"};
  }

  async addLabelUser(id, relatedLabels) {
    let res = await this.put(`/label/board/${id}`,{relatedLabels});
    return this.labelUserReducer(res);
  }

  async removeLabelUser() {
    return {msg: "not supported yet"};
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