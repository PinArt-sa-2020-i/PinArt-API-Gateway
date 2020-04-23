//Modulo que permite el manejo de las APIS
const { RESTDataSource } = require('apollo-datasource-rest');
const fetch = require('node-fetch');
const FormData = require('form-data');
const fs = require('fs');

//Datos del API
const serverConfig = require('../server');

//Ver ejemplo del repositorio
class BucketAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = `http://${serverConfig.bucket_url}:${serverConfig.bucket_port}/${serverConfig.bucket_entryPoint}`;    
    }

     //Guardando File en el Bucket
    async addFile(file) {        
        //Manejo del Stream que permite almacenar el archivo en temp
        const storeUpload = ({ stream, filename }) =>
                                new Promise((resolve, reject) =>
                                    stream
                                    .pipe(fs.createWriteStream(filename))
                                    .on("finish", () => resolve())
                                    .on("error", reject)
                            );
        //Resuelve la promesa manejada por el archivo
        let { stream, filename } = await file;

        //Salva datos para recuperar el archivo
        let fileFormData = {
            name: filename,
            path: `src/tmp/${filename}`
        }

        //Guarda el archivo
        filename = "src/tmp/" + filename;
        await storeUpload({ stream, filename});

        //Creando la data del formulario
        let formdata = new FormData();
        formdata.append('file', fs.readFileSync(fileFormData.path), fileFormData.name);

        //Configurando opcion es del formulario
        var requestOptions = {
            method: 'POST',
            body: formdata
        };
        
        //Se realiza la consulta
        const response=  await fetch( `${this.baseURL}AddFile`, requestOptions)
                                    .then(response => { 
                                        return { 
                                            status:response.status,
                                            body: response.json()
                                        }; 
                                    })
                                    .then(response => { return response; });

        //Se elimina el archivo
        await fs.unlink(fileFormData.path, function (err) { if (err) throw err;});

        //Manejando las respuestas
        if(response.status == 200){
            return {
                status: 200,
                data: (await response.body)
            };
        }
        else{
            return{
                status: response.status,
                message: (await response.body).message
            }
        }
    }

    //Eliminado File del Bucket
    async deleteFile(idFile){
        try {
            const response = await this.delete(`DelFile/${idFile}`);
            return {
                status: 200,
                data: response.message
            };
        } catch (error) {
            return {
                status:error.extensions.response.status,
                message: error.extensions.response.body.message
            };
        }
    }
}   

//exporta el api
module.exports = BucketAPI;