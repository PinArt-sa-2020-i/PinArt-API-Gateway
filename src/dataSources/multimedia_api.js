const { RESTDataSource } = require('apollo-datasource-rest');

const fetch = require('node-fetch');
const FormData = require('form-data');
const fs = require('fs');

const serverConfig = require('../server');

class MultimediaAPI extends RESTDataSource {
    willSendRequest(request) {
        request.headers.set('Content-Type', "multipart/form-data");
    }

    constructor() {
        super();
        this.baseURL = `http://${serverConfig.multimedia_url}:${serverConfig.multimedia_port}/${serverConfig.multimedia_entryPoint}`;    
    }
    

    async addMultimedia(idUsuario, descripcion, idEtiquetas, file){

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
        formdata.append("idUsuario", idUsuario);
        formdata.append("descripcion", descripcion);
        formdata.append('file', fs.readFileSync(fileFormData.path), fileFormData.name);
        for(let i=0; i<idEtiquetas.length; i++){
            formdata.append("idEtiquetas[]", idEtiquetas[i]);
        }
        
        //Configurando opcion es del formulario
        var requestOptions = {
            method: 'POST',
            body: formdata
        };

        //Se realiza la consulta
        const response=  await fetch( `${this.baseURL}multimedia/add`, requestOptions)
                                    .then(response => { return response.json(); })
                                    .then(myJson => { return myJson; });
        
        //Se elimina el archivo
        await fs.unlink(fileFormData.path, function (err) { if (err) throw err;});
        return JSON.stringify(response);
    }
    
}


module.exports = MultimediaAPI;