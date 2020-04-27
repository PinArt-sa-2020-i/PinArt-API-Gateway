const ConfigAccountAPI = require('../dataSources/configAccount_api');
const {ApolloError} = require('apollo-server');

const authentication = async ({ req }) => {
    //Recupera el token
    const token = req.headers.authorization || '';
    
    //Se valida la existencia del Token
    if(token == ''){return {data: {id:null}}}
    else{
        //Se crea una instancia de la API
        const configAccountAPI = new ConfigAccountAPI();
        
        //Se realiza la peticion y se verifica si se realiza de manera correcta
        let response;
        try { response = await configAccountAPI.validateToken(token);} 
        catch (error) { throw new ApolloError(`TOKEN ERROR: ${500}: ${error}`, 500);}

        //Se verificala respuesta
        if(response.status != 200){ throw new ApolloError(`SESION INACTIVA - ${400}`, 400) }
        return {data: {id: response.data}};    
    }
}

module.exports = authentication;
