//Modulo que permite el manejo de las APIS
const { RESTDataSource } = require('apollo-datasource-rest');

//Datos del API
const serverConfig = require('../server');

//Ver ejemplo del repositorio
class FavoriteBoardAPI extends RESTDataSource {
    constructor() {
        super();
       // this.baseURL = `http://${serverConfig.favoriteBoard_url}:${serverConfig.favoriteBoard_port}/${serverConfig.favoriteBoard_entryPoint}`;
        this.baseURL = `http://${serverConfig.favoriteBoard_url}:${serverConfig.favoriteBoard_port}`;
    }

    //Realiza una peticion get para obtener todos los datos
    async getAllUser() {
        const response = await this.get("/user/getall");
        return Array.isArray(response)
            ? response.map((user) => this.userReducer(user))
            : [];
    }


    async getAllBoard(){
        const response = await this.get('/board/getall');
        return Array.isArray(response)
            ? response.map((board) => this.boardReducer(board))
            : [];
    }

    //arreglar metodo hola
    async getAllUserFollow(){
        const response = await this.get('/userfollow/getAll');
        return Array.isArray(response)
            ? response.map((userfollow) => this.boardReducer(userfollow))
            : [];
    }

    async getAllBoardFollow(){
        const response = await this.get('boardfollow');
        return Array.isArray(response)
            ? response.map((boardfollow) => this.boardReducer(boardfollow))
            : [];
    }


    //Realiza una peticion get por id para obtener todos los datos

    async getUserbyId(id) {
        const response = await this.get(`/user/${id}`);
        return this.userReducer(response);
    }

    async getUsersFollowingByFollower(follower_id) {
        const response = await this.get(`/userfollow/getUsersFollowingByFollower/${follower_id}`);
        return Array.isArray(response)
            ? response.map((user) => this.boardReducer(user))
            : [];
    }

    async getAllBoardsByUser(id) {
        const response = await this.get(`/board/getAllBoardsByUser/${id}`);
        return Array.isArray(response)
            ? response.map((board) => this.boardReducer(board))
            : [];
    }




    async getBoardbyId(id) {
        return {msg: "not supported yet"};
    }

    async getUserFollowbyId(id) {
        return {msg: "not supported yet"};
    }

    async getBoardFollowbyId(id) {
        return {msg: "not supported yet"};
    }

    //Realiza una peticion post

    async createUser(id){
        id = {id: id}
        id = new Object(JSON.parse(JSON.stringify(id)));
        const response = await this.post('/user/create', id);
        return response;
    }

    async createBoard(user_id,board){
        board = new Object(JSON.parse(JSON.stringify(board)));
        const response = await this.post(`board/create/user/${user_id}/`, board);
        return this.boardReducer(response);
    }

    async createUserFollow(userfollow){
        return {msg: "not supported yet"};
    }

    async createBoardFollow(boardfollow){
        return {msg: "not supported yet"};
    }

    // Realiza la peticion  put
    async updateBoard(id, board){
        board = new Object(JSON.parse(JSON.stringify(board)));
        const response = await this.put(`board/update/board/${id}/`, board);
        return this.boardReducer(response);
    }




    //Realiza una peticion delete

    async deleteUser(id){
        const response = await this.delete(`user/delete/${id}`);
        console.log(response);
        return response;
    }

    async deleteBoard(id){
        const response = await this.delete(`/board/delete/${id}/`);
        return response.id;
    }

    async deleteBoardFollow(id){
        return {msg: "not supported yet"};
    }

    async deleteUserFollow(id){
        return {msg: "not supported yet"};
    }

// Reducers

    userReducer(user) {
        return {
            id: user.id || 0,
        };
    }

    boardReducer(board) {
        return {
            id: board.id || 0,
            name: board.name,
            description: board.description,
            id_user:board.user_id
        };
    }

    boardfollowReducer(boardfollow) {
        return {
            id: boardfollow.id || 0,
            board_id: boardfollow.board_id,
            user_id: boardfollow.user_id
        };
    }

    userfollowReducer(userfollow) {
        return {
            id: userfollow.id || 0,
            user_follower_id: userfollow.user_follower_id,
            user_following_id: userfollow.user_following_id
        };
    }
    
}

//exporta el api
module.exports = FavoriteBoardAPI;