/**
 * NOTAS
 */

//1 HTTP traductor de pedidos del navegador a un servidor y vesceversa

/**2
 * API web, interfaz de programación de aplicaciones, funciones agregadas al navegador
 * se encarga de: pedidos via HTTP al server, almacenamiento, audio   
 */

/**3
 * TERMINAL
 * 1) json labura como el xamp solo q para levantar el server, se hace desde el archivo .json q estes usando de backend (asi como el por default para html es index en json es db.json). En la terminal abris la carpeta q contiene el .json y le das "json-server --watch archivo.json"
 * 2) ahi carga el archivo de manera local y te da el home:"http://localhost:3000" y los resources q el archivo contenga, es decir los objetos u arreglos creados, te da un link local para cada uno. 
 * 3) en este caso te da el "http://localhost:3000/perfil" para el objeto "perfil".
 */

/**4
 * libreria uuid / generador de ids 
 * te vas a "cdnjs.com/libraries/uuid" en google y copias el script de la version q este y lo pegas en el html (el del registro digamos) como un script js
 * para corroborar en consola: uuid.v4() / .v4 o la version descargada
 */

/**5    normal     /   arrow
 * async function / async()=>{}  //codigo mas optimizado pero no siempre mas rapido (ojo el .then tampoco es q esta deprecado)
 * esta es la estructura propia para trabajar con fecths y promises. Pausa la function hasta q el fetch es completado y una vez recibe la respuesta continua ejecutando la function y hace el retunr de la respuesta. No necesita del .then, en cambio se usa await donde directaente hace el call de una function y la respuesta la guarda en euna variable. 
 */



//****************************************** db.json********************************************************/

{
  "perfil": [
    {
      "nombre": "qwe",
      "email": "asdad@gmail.com",
      "id": "4333ac6e-189c-4d48-9e62-0e1d77f21267"
    },
    {
      "nombre": "Federico",
      "email": "higafederico@gmail.com",
      "id": "6bda0ffc-ff61-49a1-ad5c-042055e836d2"
    },
    {
      "nombre": "asdasdad",
      "email": "asdad@gmail.com",
      "id": "3a4c5995-e771-4cfe-9bd9-445f0d5b63f1"
    },
    {
      "nombre": "asd",
      "email": "higafederico@gmail.com",
      "id": "d6820466-3c56-4d93-b2d7-e8bcafe4d86f"
    },
    {
      "nombre": "edinson cavani",
      "email": "eddi@gmail.com",
      "id": "7707b689-6b7c-4989-8325-e5779da79806"
    }
  ]
}
//****************************************** db.json********************************************************/







//*****************************************primeros pasos***************************************************/

/**
 * crearNuevaLinea 
 * $linea crea un (tr)
 * $contenido almacena la estructura html
 * @param {*} nombre 
 * @param {*} email 
 * @returns linea
 */

const crearNuevaLinea = (nombre,email)=>{
    const linea = document.createElement("tr");
    const contenido = 
    `</thead>
    <tbody data-table>
      <tr>
        <td class="td" data-td>${nombre}</td>
        <td>${email}</td>
        <td>
          <ul class="table__button-control">
            <li>
              <a
                href="../screens/editar_cliente.html"
                class="simple-button simple-button--edit"
                >Editar</a
              >
            </li>
            <li>
              <button
                class="simple-button simple-button--delete"
                type="button"
              >
                Eliminar
              </button>
            </li>
          </ul>
        </td>`
      ; 
    linea.innerHTML = contenido; //.innerHTML="el html q tiene dentro", en este caso "contenido"
    return linea;
};


const table = document.querySelector("[data-table]"); //conectando en una variable el data atributte del html


//metodo1 "pedidos al servido"..............................................................................


const http = new XMLHttpRequest();//guardas la peticion a un servidor en una variable para porder aplicarle distintos metodos
//Conecntadndo datos del back con el html del front via JS//guardas el pedido al servidor es decir "new xMLHttpRequest()" en una variable

//Abrir http (metodo,url)

//CRUD   -  Metodos HTTP
//Create -  POST
//Read   -  GET
//Update -  PUT/PATCH
//Delete -  DELETE 

http.open("GET","http://localhost:3000/perfil");//"abrime el pedido al servido y leeme (GET) la siguiente pagina del backend "hhttp:..." (archivo db.json)

http.send();//envia la peticion del .open en este caso al json-server

http.onload= () => {//.onload una vez cargado el html ejecutame esto (con una arrow function)
    const response = JSON.parse(http.response);//.response te manda el body del archivo en txt dentro de un array(u objeto?), lo guardas en una variable. JSON.parse() convierte el txt en codigo
    data.forEach(perfil => {//por eso se usa forEach (data=array/objeto), para cada uno ejecutame esto
        const nuevaLinea = crearNuevaLinea(perfil.nombre, perfil.email);
        table.appendChild(nuevaLinea);//table=data-table (del html) .appendchild (crear como un hijo "nuevaLinea")
    });
};


//metodo2 "pedidos al servido"..............................................................................


//pasado en limpio el CRUD de arriba. Se utiliza el motodo .promise(), dejando tdodo el CRUD dentro de una funcion la cual devuelve un mensaje segun el status del CRUD (400 not found por ejemplo)

const listaClientes = () => {
    const promise = new Promise((resolve, reject) => {//el new Promise es una estructura de callback con una function de dos argumentos "resolve" y "reject" por si el pedido se resuelve o es rechazado
        const http = new XMLHttpRequest();

        http.open("GET", "http://localhost:3000/perfil");

        http.send();

        http.onload = () => {
            const response = JSON.parse(http.response);
            if(http.status >= 400){//con un if damos las opciones de rechazado o aceptado segun el status
                reject(response);
            }else{
                resolve(response);
            }
        };
    });
    return promise;// enteonces la variable "promise" contiene el pedido de XMLHttpRequest, el open, el send y el camino a seguir con el onload (acrhivo encontrado o no)
};

listaClientes()//en el llamado a la function se utiliza el .then y el .catch a modo de if y else. Si el new promise devuelve "resolve" se ejecuta el .then con el forEach q crea la estructra del archivo .json del back en el html del front
.then((data)=>{
    data.forEach(perfil => {
        const nuevaLinea = crearNuevaLinea(perfil.nombre, perfil.email)
        table.appendChild(nuevaLinea);
    });
})
.catch((error)=>alert("Ocurrio un problema"));//el .cacth es a modod de else si nos devuelve "reject"


//metodo3 "pedidos al servido"..............................................................................


const listaClientes = () => {
    return fetch("http://localhost:3000/perfil").then((respuesta) => {
        return respuesta.json();
    });
};

//el pedido al servidor puede quedar simplemente en una linea teniendo en cuenta las facilidades de las arow functions, quedando de la siguiente manera:

//**************************************** primeros pasos **************************************************/






//*************************************** JS client-service **************************************************/

//error 404 cant fetch // acordat q estas trabajando con un local server (json) y si tira el error hay q volver a levantarlo, se abre la terminal donde este el archivo .json en este caso es "db.json" y se le da un "json-server --watch archivo.json"

//fetch API. //este fetch (busqueda/pedido) por default lo hace por "GET" y devuelve una "promisse"
const listaClientes = () => fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json());


/**
 * crearCliente // le ponemos las condiciones al fetch del form, al ser "POST" plasma los datos del "body: JSON.stringify({nombre,email, id: uuid.v4()})" en el archivo db.json con la url q nos dio el server (localhost3000perfil)
 * @param {*} nombre 
 * @param {*} email 
 * @returns 
 */
const crearCliente = (nombre, email) => {
  return fetch("http://localhost:3000/perfil",{
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({nombre,email, id: uuid.v4()}),
  });
};


/**
 * eliminarCliente con la particularidad de q hace dinamico el id poiendolo en la url y como method el delete
 * @param {*} id 
 * @returns 
 */
const eliminarCliente = (id)=>{
  return fetch (`http://localhost:3000/perfil/${id}`, {
    method: "DELETE", 
  });
};


/**
 * detalleCLiente pedido(fetch) q plasma en la pantalla de "editar cliente" los datos via id del ciente 
 * @param {*} id 
 * @returns 
 */
const detalleCliente = (id) => {
  return fetch (`http://localhost:3000/perfil/${id}`).then((respuesta) => respuesta.json());
};

/**
 * actualizarCliente fetch para editar los datos del cliente
 */
const actualizarCliente = (nombre,email,id) => {
  return fetch (`http://localhost:3000/perfil/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({nombre, email}),
  })
  .then((respuesta) => respuesta)
  .catch((err) => console.log(err))
}


//aca divide el codigo y lo q hace es guardar este pedido (fetch) y todos los q se sumen en un objeto para poder exportarlo 
export const clientServices = {
  listaClientes, 
  crearCliente,
  eliminarCliente,
  detalleCliente,
}
//*************************************** JS client-service **************************************************/









//************************************** JS client-controllers ********************************************* */

import { clientServices } from "../service/client-service.js";

/**
 * crearNuevaLinea 
 * $linea crea un (tr)
 * $contenido almacena la estructura html
 * @param {*} nombre 
 * @param {*} email 
 * @returns $linea
 */

const crearNuevaLinea = (nombre, email, id) => {
    const linea = document.createElement("tr");
    const contenido =
        `
        <td class="td" data-td>${nombre}</td>
        <td>${email}</td>
        <td>
          <ul class="table__button-control">
            <li>
              <a
                href="../screens/editar_cliente.html?id=${id}"
                class="simple-button simple-button--edit"
                >Editar</a
              >
            </li>
            <li>
              <button
                class="simple-button simple-button--delete"
                type="button" id="${id}"
              >
                Eliminar
              </button>
            </li>
          </ul>
        </td>
        `
        ;
    linea.innerHTML = contenido;//.innerHTML=el html q tiene adentro, en este caso "contenido"
    const btn = linea.querySelector("button");// aca conectamos al button del "delete" en una variable para poder agregarle un addEventListener con su respectiva funcion
  btn.addEventListener("click", () => {
    const id = btn.id;// aca guardamos y conectamos el id q recibe el "crearNuevaLinea()" para usarla en "eliminarCliente()"
    clientServices.eliminarCliente(id).then((respuesta =>{//aca la llamada normal de "eliminarCliente()" con su respectivo then y cathc
    })).catch(err => alert("Ocurrio un error"));
  });
    return linea;
};

const table = document.querySelector("[data-table]");

clientServices.//al ser un pedido dentro de un objeto importado de otro archivo se hace el call de esta manera "objeto.pedido" 
listaClientes()
.then((data)=>{
    data.forEach(({nombre, email, id}) => {//el forEach recibe el parametro en fomra de objeto ya con todo por eso va entre llaves
        const nuevaLinea = crearNuevaLinea(nombre, email, id)
        table.appendChild(nuevaLinea);
    });
})
.catch((error)=>alert("Ocurrio un problema"));

//************************************** JS client-controllers ********************************************* */









//************************************ registro.controller.js ********************************************** */

const formulario = document.querySelector ("[data-form]");

/**
 * una vez conecntado el data atribute del form (hmtl) con una variable en el archivo JS, se le agrega un "escuchador" con los siguienes parametros
 * @param string "submit"// evento q dispara el esuchador 
 * @param arrowfunction //y una arrow q a su vez recibe tambn el evento "submit", y q deja por default la estructura de form y captura el .value del input name e email. Ademas sumamos el fetch del form ("crearCliente")
 */

import { clientServices } from "../service/client-service.js";

const formulario = document.querySelector ("[data-form]");

formulario.addEventListener("submit", (evento)=>{
    evento.preventDefault();

    const nombre = document.querySelector ("[data-nombre]").value;
    const email = document.querySelector ("[data-email]").value;
    
    clientServices.crearCliente(nombre,email).then(respuesta =>{
      window.location.href = "http://127.0.0.1:5500/ONE--main/Especializacion-frontend/7-Js-CRUD/CRUD-proyecto_base/screens/registro_completado.html"; // aca definimos como  respuesta del .then del promise un html con el mensaje "exito al registro". Deberia ir una ruta relativa pero no me la toma, tuve q poner la absoluta desde el navegador (nose si tedra q ver con el server, un json-server --watch registro_completado.html ???)
    }).catch(err => console.log(err));
});
//************************************ registro.controller.js ********************************************** */







//********************************** actualizar_controllers.js ***********************************************/

//aca irria la funcion para editar elcliente
//la aprte del "UPDATE" del CRUD
// lo q hace es dejar setteado el html del "editar cliente" con los campos llenos del cliente en cuestion, linkeadndo el "editar cliente.html" con un ?=id accediendo al cliente en cuestion

import { clientServices } from "../service/client-service.js";

const formulario = document.querySelector("[data-form]"); 

/**
 * obtenerInformacion captura los .value del id, nombre e email
 */

const obtenerInformacion = () =>{
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if(id===null){
        window.location.href = "http://127.0.0.1:5500/ONE--main/Especializacion-frontend/7-Js-CRUD/CRUD-proyecto_base/screens/error.html";
    }

    const nombre = document.querySelector("[data-nombre]");
    const email = document.querySelector("[data-email]");

    clientServices.detalleCliente(id).then((perfil)=>{
        nombre.value = perfil.nombre;  
        email.value = perfil.email;
    });
};

/**
 * formato async 
 */

const obtenerInformacion = async () =>{
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  if(id===null){
      window.location.href = "http://127.0.0.1:5500/ONE--main/Especializacion-frontend/7-Js-CRUD/CRUD-proyecto_base/screens/error.html";
  }

  const nombre = document.querySelector("[data-nombre]");
  const email = document.querySelector("[data-email]");

  try {
    const perfil = await clientServices.detalleCliente(id)// hace todo en un solo paso, el await justamente ejecuta el pedido "detalleCliente()" y espera a la respuesta, guardandola en perfil
    if(perfil.nombre && perfil.email){
      nombre.value = perfil.nombre;  
      email.value = perfil.email;
      alert ("hola");
    }else {
      throw new Error();
    }
  } catch (error) {
    window.location.href="/screens/error.html"
  }
};

obtenerInformacion();   

/**
 * aca agregamos los escuchadores al fomrulario para poder hacer el call de actualizarCliente()
 */

formulario.addEventListener("submit", (evento) => {
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  evento.preventDefault()
  const nombre = document.querySelector("[data-nombre]").value;
  const email = document.querySelector("[data-email]").value;

  clientServices.actualizarCliente(nombre,email,id).then(()=>{
      window.location.href="http://127.0.0.1:5500/ONE--main/Especializacion-frontend/7-Js-CRUD/CRUD-proyecto_base/screens/edicion_concluida.html";


/**
 * async de actualizarCliente 
 */

const actualizarCliente = async () => {//esta mal :( dice q no puede acceder a actualizarCliente 
  try {
    clientServices.actualizarCliente(nombre,email,id)
    window.location.href="http://127.0.0.1:5500/ONE--main/Especializacion-frontend/7-Js-CRUD/CRUD-proyecto_base/screens/edicion_concluida.html";
  } catch (error) {
    window.location.href="http://127.0.0.1:5500/ONE--main/Especializacion-frontend/7-Js-CRUD/CRUD-proyecto_base/screens/error.html";
  }
};
  

//********************************** actualizar_cliente.js ************************************************* */

