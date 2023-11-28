
/**
 * 1 asigna  cada data- (id del input) a la validaciopn correspondiente ingresando al objeto "validadores"
 * 2 valida si el input esta bien o mal y le adiciona o remueve el css q marca el input de rojo
 * 3 pickea el "span" del html con el error generico y si es true lo deja vacio, y si es false lo cambia con la funcion "mostrarMensajeDeError()" en el innerHTML
 * @param_input (elemento)
 * @return void
 */

export function valida (input){//este input no esta definido queda ahi. Recien se define en el forEach de app.js
    const tipoDeInput = input.dataset.tipo;//aca se almacena como un "id" de un input especifico ( con el data-)
    if(validadores[tipoDeInput]){//si la funcion de abajo conicide con el "id" del input  
        validadores[tipoDeInput](input);//el ultimo input? 
    }
    if(input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML="";
    }else{
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML=mostrarMensajeDeError(tipoDeInput, input);
    }
};



//OBJETOS

const mensajesDeError={//en la consola, con "$0" + enter, se accede primero al elemento (en este caso un input), y segundo con "$0.validity" + enter, entramos en "ValidityState{}" es un array q nos muetra los tipos de errores q pueden surgir en el elemento y marca si son true o false (si ocurre o no). Por ejemplo: "valueMissing:true" (no se ingreso ningun valor), "typeMismatch" (valida el tipo de input, si es e-mail va a esperar un "@") y asi.  
    nombre:{
        valueMissing:"El campo esta vacio",
    },
    email:{
        valueMissing:"El campo esta vacio",
        typeMismatch:"El correo no es valido",
    },
    password:{
        valueMissing:"El campo esta vacio",
        patternMismatch:"Al menos 6 caracteres max 12...",//el regex
    },
    nacimiento:{
        valueMissing:"El campo esta vacio",
        customError:"Debes ser mayor de edad",//la validacion de edad con el mesnaje customizado q programamos
    },
    numero:{
        valueMissing:"El campo esta vacio",
        patternMismatch:"El formato debe ser el siguiente: XXXXXXXXXX (10 numeros)",
    },
    direccion:{
        valueMissing:"El campo esta vacio",
        patternMismatch:"El formato debe ser el siguiente: XXXXXXXXXX (10 numeros)",
    },
    ciudad:{
        valueMissing:"El campo esta vacio",
        patternMismatch:"El formato debe ser el siguiente: XXXXXXXXXX (10 numeros)",
    },
    estado:{
        valueMissing:"El campo esta vacio",
        patternMismatch:"El formato debe ser el siguiente: XXXXXXXXXX (10 numeros)",
    },
}

const validadores={//este es un objeto, por eso no la sigo tanto, es una especie de array q une elementos con funciones?
    nacimiento: (input)=> validarNacimiento(input),
};


//ARRAYS

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
]

//FUNCTIONS

/**
 * pickea segun el input un mensja de error dentro del array "tiposDeErrores"
 * @param {} input
 * @param {} tipoDeInput  
 * @return string 
 */

function mostrarMensajeDeError(tipoDeInput, input){
    let mensaje=""
    tipoDeErrores.forEach(error=>{
        if(input.validity[error]){
            console.log(tipoDeInput, error);
            console.log(input.validity[error]);
            console.log(mensajesDeError[tipoDeInput][error]);
            mensaje=mensajesDeError[tipoDeInput][error];
        }
    })
    return mensaje;
}


/**
 * valida la mayoria de edad
 * @param_input (elemento input) 
 * @return string  
 */

function validarNacimiento(input){
    const fechaCliente = new Date(input.value);
    let mensaje = "";
    if (!mayorDeEdad(fechaCliente)){
        mensaje="Debes ser mayot de edad";
    }
    
    input.setCustomValidity(mensaje);
}
 
/**
 * compara las fechas   
 * @param_int $fecha 
 * @returns boolean
 */

function mayorDeEdad(fecha){
    const fechaActual = new Date();
    const diferenciaEdad = new Date(
        fecha.getUTCFullYear() + 18,
        fecha.getUTCMonth(),
        fecha.getUTCDate()
    );
    return diferenciaEdad <= fechaActual;
}