
/***********************************************API************************************************************/

/**
 *1) Esta carpeta con su archivo api, es la encargada de procesar los pedidos y conectar el back con el front
 *2) La libreria axios se encarga de procesar la respuesta del fetch en un arreglo con toda la info del pedido http: conf, los headers, data, status (200, 404 etc).
 */

import axios from "axios"


/***************************************************************************************************************/

/**
 * api // basicmanete: configuramos donde el axios va a hacer los pedidos
 * 1) axios procesa la resuesta del pedido en un arreglo (status, headres, data, etc)
 * 2) .create() es un metodo (una function pero para objetos) y recibe un objeto de configracion
 * 3) en este caso el objeto es baseURL: "urlLocal". Esto hace q todas las peticiones q generemos tengana como url de base el localhost:5000 (donde se levanto el db.json), mas adelante le indexamos la sub url (endpoint) para cada objeto del db.json
 */

export const api = axios.create({
    baseURL: "http://localhost:5000"
})


/*****************************************ASYNC FUNCTION*******************************************************/


/**
 * buscar // busca los datos pedidos por medio de la "api" y los desgloza con setData para tener solo el data del pedido, osea el contenido del db.json sin el status del pedido o los headers
 * @param url: este url q le pasemos es la subruta o endpoint q diferencia los distintos objetos q contiene el db.json como "/post" o "/categorias"
 * @param setData: es una function q va a actualizar/desglozar la respuetsa q devuelve el axios (o const=api), es decir solo la informacion del db.json 
 * 
 * 1) la const respuesta: guarda el pedido q se hace via "await" a la api (localhost)(el await seria el call de la function api, osea el pedido), y el "api.get(url)" concatena la api con sub url q le pasemos para diferneicar los distintos objetos = http://localhost:5000/post
 * 2) setData: devuelve solo el .data de axios, por eso el respuesta.data
 */

export const buscar = async (url, setData) => {
    const respuesta = await api.get(url) 
    setData(respuesta.data)
    
}


//creo entender por fin las asyncs, en la pag de poscgradosUCA cuando descargas un archivo en la pantalla aparece un alert q dice "initializando descarga" y hasta q no se resuelve el pedido te bloquea la pag con ese alert. En cambio con las asyncs al retornar una promise (una promesa de, el pedido y no el pedido en si) te deja seguir ejecutando codigo o interactuar con la pagina de manera paralela  

/***************************************************************************************************************/
