//Modulo que permite el manejo de las APIS
const { RESTDataSource } = require('apollo-datasource-rest');

//Datos del API
const serverConfig = require('../server');

//Ver ejemplo del repositorio
class FavoriteBoardAPI extends RESTDataSource {
    constructor() {
        super();
       // this.baseURL = `http://${serverConfig.favoriteBoard_url}:${serverConfig.favoriteBoard_port}/${serverConfig.favoriteBoard_entryPoint}`;
        this.baseURL = `http://${serverConfig.favoriteBoard_url}`;
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


    async getAllUserFollow(){
        const response = await this.get('/userfollow/getAll');
        return Array.isArray(response)
            ? response.map((userfollow) => this.userfollowReducer(userfollow))
            : [];
    }

    async getAllBoardFollow(){
        const response = await this.get('boardfollow/getAll');
        return Array.isArray(response)
            ? response.map((boardfollow) => this.boardfollowReducer(boardfollow))
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
            ? response.map((user) => this.userfollowReducer(user))
            : [];
    }

    async getAllBoardsByUser(id) {
        const response = await this.get(`/board/getAllBoardsByUser/${id}`);
        return Array.isArray(response)
            ? response.map((board) => this.boardReducer(board))
            : [];
    }

    async getBoardbyId(id) {
        const response = await this.get(`/board/${id}`);
        return this.boardReducer(response);
    }

    async getallBoardsByName(name) {
        const response = await this.get(`/board/getAllBoardsByName/${name}`);
        return Array.isArray(response)
            ? response.map((board) => this.boardReducer(board))
            : [];
    }

    async getUserFollowbyId(id) {
        const response = await this.get(`/userfollow/${id}`);
        return this.userfollowReducer(response);
    }

    async getBoardFollowbyId(id) {
        const response = await this.get(`/boardfollow/${id}`);
        return this.boardfollowReducer(response);
    }

    async getBoardFollowbyId(id) {
        const response = await this.get(`/boardfollow/${id}`);
        return this.boardfollowReducer(response);
    }

    async getAllBoardsFollowByUser(user_id) {
        const response = await this.get(`/boardfollow/getAllBoardsFollowByUser/${user_id}`);
        return Array.isArray(response)
            ? response.map((board) => this.boardReducer(board))
            : [];
    }





    //Realiza una peticion post

    async createUser(id){
        id = {id: id}
        id = new Object(JSON.parse(JSON.stringify(id)));
        const response = await this.post('/user/create', id);
        return response;
    }

    async createBoard(board){
        board = new Object(JSON.parse(JSON.stringify(board)));
        const response = await this.post(`/board/create/`, board);
        return this.boardReducer(response);
    }

    async createUserFollow(userfollow){
        userfollow= new Object(JSON.parse(JSON.stringify(userfollow)));
        const response = await this.post(`/userfollow/create`, userfollow);
        return this.userfollowReducer(response);
    }

    async createBoardFollow(boardfollow){
        boardfollow= new Object(JSON.parse(JSON.stringify(boardfollow)));
        const response = await this.post(`boardfollow/create/`, boardfollow);
        return this.boardfollowReducer(response);

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
        const response = await this.delete(`/boardfollow/delete/${id}/`);
        return response.id;
    }

    async deleteUserFollow(id){
        const response = await this.delete(`/userfollow/delete/${id}/`);
        return response.id;
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
            user:board.user
        };
    }

    boardfollowReducer(boardfollow) {
        return {
            id: boardfollow.id || 0,
            board: boardfollow.board,
            user: boardfollow.user
        };
    }

    userfollowReducer(userfollow) {
        return {
            id: userfollow.id || 0,
            userFollower: userfollow.userFollower,
            userFollowing: userfollow.userFollowing
        };
    }

}

//exporta el api
module.exports = FavoriteBoardAPI;
