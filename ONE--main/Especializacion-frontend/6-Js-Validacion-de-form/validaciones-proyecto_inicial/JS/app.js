import { valida } from "./validations.js";

const inputs = document.querySelectorAll("input"); //captura todos (querySelectorAll) los "input" class y los devuelve en fomra de array

/**
 * al devolver un array se puede iterar, es decir recorrer, en este caso con un forEach para asignarle a todods los elementos "input" el addEvenListener "blur" y la funcion
 * @param input cada uno de los inputs capturados en $inputs
 * @return void 
 */
inputs.forEach((input)=>{
    input.addEventListener("blur", (input)=>{
        valida(input.target);//aca le definimos el parametro (input pero .value) a la funcion valida
    });
});