import { clientServices } from "../service/client-service.js";

const formulario = document.querySelector ("[data-form]");

formulario.addEventListener("submit", (evento)=>{
    evento.preventDefault();
    const nombre = document.querySelector ("[data-nombre]").value;
    const email = document.querySelector ("[data-email]").value;
    clientServices.crearCliente(nombre,email).then((respuesta) =>{
            window.location.href = "http://127.0.0.1:5500/ONE--main/Especializacion-frontend/7-Js-CRUD/CRUD-proyecto_base/screens/registro_completado.html"; 
    }).catch((err) => console.log(err)); 
});
