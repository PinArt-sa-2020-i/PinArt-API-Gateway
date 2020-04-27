//Modulo que permite el manejo de las APIS
const { RESTDataSource } = require('apollo-datasource-rest');

//Datos del API
const serverConfig = require('../server');

//Ver ejemplo del repositorio
class ConfigAccountAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = `http://${serverConfig.configAccount_url}:${serverConfig.configAccount_port}/${serverConfig.configAccount_entryPoint}`;    
    }

    // Get 
    async getAllNotificationTypes(){
        const response = await this.get('TipoNotificaciones');
        return Array.isArray(response)  
        ? response.map((notificationType) => this.notificationTypesReducer(notificationType))
        : [];
    } 

    async getAllConfigNotifications(){
        const response = await this.get('ConfigNotificaciones');
        return Array.isArray(response)  
        ? response.map(configNotification => this.configNotificationReducer(configNotification))
        : [];
    }
    
    async getAllWays(){
        const response = await this.get('Medio');
        return Array.isArray(response)  
        ? response.map(way => this.wayReducer(way))
        : [];
    } 

    async getAllSessions(){
        const response = await this.get('Sesiones');
        return Array.isArray(response)  
        ? response.map(session => this.sessionReducer(session))
        : [];
    } 

    async getAllLinkedAccounts(){
        const response = await this.get('CuentasEnlazadas');
        return Array.isArray(response)  
        ? response.map(linkedAccount => this.linkedAccountReducer(linkedAccount))
        : [];
    } 

    // Get By Id
    async getNotificationTypeById(id){
        const response = await this.get(`TipoNotificaciones/${id}`);
        return this.notificationTypesReducer(response);
    }

    async getConfigNotificationById(id){
        const response = await this.get(`ConfigNotificaciones/${id}`);
        return this.configNotificationReducer(response);
    }

    async getWayById(id){
        const response = await this.get(`Medio/${id}`);
        return this.wayReducer(response);
    }

    async getSessionById(id){
        const response = await this.get(`Sesiones/${id}`);
        return this.sessionReducer(response);
    }

    async getLinkedAccountById(id){
        const response = await this.get(`CuentasEnlazadas/${id}`);
        return this.linkedAccountReducer(response);
    }

    // Post
    async createNotificationType(notificationType){
        notificationType = new Object(JSON.parse(JSON.stringify(notificationType)));
        const response = await this.post('TipoNotificaciones/', notificationType);
        return this.notificationTypesReducer(response);
    }

    async createConfigNotification(configNotification){
        configNotification = new Object(JSON.parse(JSON.stringify(configNotification)));
        const response = await this.post('ConfigNotificaciones/', configNotification);
        return this.configNotificationReducer(response)
    }

    async createWay(way){
        way = new Object(JSON.parse(JSON.stringify(way)));
        const response = await this.post('Medio/', way);
        return this.wayReducer(response);
    }

    async createSession(session){
        try{
        session = new Object(JSON.parse(JSON.stringify(session)));
        const response = await this.post('Sesiones/', session);
        return {
            status: 200,
                data: this.sessionReducer(response.data),
                token: response.Token
            };            
        } catch (error) {
            return{
                status: error.extensions.response.status,
                data: error.extensions.response.body.message,
            }
        }
    }

    async createLinkedAccount(linkedAccount){
        linkedAccount = new Object(JSON.parse(JSON.stringify(linkedAccount)));
        const response = await this.post('CuentasEnlazadas/', linkedAccount);
        return this.linkedAccountReducer(response);
    }

    // PUT
    async updateNotificationType(id, notificationType){
        notificationType = new Object(JSON.parse(JSON.stringify(notificationType)));
        const response = await this.put(`TipoNotificaciones/${id}/`, notificationType);
        return this.notificationTypesReducer(response);
    }

    async updateConfigNotification(id, configNotification){
        configNotification = new Object(JSON.parse(JSON.stringify(configNotification)));
        const response = await this.put(`ConfigNotificaciones/${id}/`, configNotification);
        return this.configNotificationReducer(response);
    }

    async updateWay(id, way){
        way = new Object(JSON.parse(JSON.stringify(way)));
        const response = await this.put(`Medio/${id}/`, way);
        return this.wayReducer(response);
    }

    async updateSession(id, session){
        session = new Object(JSON.parse(JSON.stringify(session)));
        const response = await this.put(`Sesiones/${id}/`, session);
        return this.sessionReducer(response);
    }

    async updateLinkedAccount(id, linkedAccount){
        linkedAccount = new Object(JSON.parse(JSON.stringify(linkedAccount)));
        const response = await this.put(`CuentasEnlazadas/${id}/`, linkedAccount);
        return this.linkedAccountReducer(response);
    }

    //DELETE
    async deleteNotificationType(id){
        const response = await this.delete(`TipoNotificaciones/${id}/`);
        return this.notificationTypesReducer(response);
    }

    async deleteConfigNotification(id){
        const response = await this.delete(`ConfigNotificaciones/${id}/`);
        return this.configNotificationReducer(response);
    }

    async deleteWay(id){
        const response = await this.delete(`Medio/${id}/`);
        return this.wayReducer(response);
    }

    async deleteSession(id){
        const response = await this.delete(`Sesiones/${id}/`);
        return this.sessionReducer(response);
    }

    async deleteLinkedAccount(id){
        const response = await this.delete(`CuentasEnlazadas/${id}/`);
        return this.linkedAccountReducer(response);
    }

    // Reducers
    notificationTypesReducer(notificationType) {
        return {
            id: notificationType.id || 0,
            Nombre: notificationType.Nombre,  
            Descripcion: notificationType.Descripcion
        };
    }

    configNotificationReducer(configNotification) {
        return {
            id: configNotification.id || 0,
            IdUsuario: configNotification.IdUsuario,
            IdTipo: configNotification.IdTipo,
            Activas: configNotification.Activas
        };
    }

    wayReducer(way) {
        return {
            id: way.id || 0,
            Nombre: way.Nombre
        };
    }

    sessionReducer(session) {
        return {
            id: session.id || 0,
            IdUsuario: session.IdUsuario,
            MedioAuth: session.MedioAuth,
            Dispositivo: session.Dispositivo,
            Creacion: session.Creacion,
            Activo: session.Activo
        };
    }

    linkedAccountReducer(linkedAccount) {
        return {
            id: linkedAccount.id || 0,
            IdUsuario: linkedAccount.IdUsuario,
            MedioAuth: linkedAccount.MedioAuth,
            CorreoEnlazado: linkedAccount.CorreoEnlazado
        };
    }

}

//exporta el api
module.exports = ConfigAccountAPI;