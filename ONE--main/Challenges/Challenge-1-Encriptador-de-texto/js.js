const mensajeUsuario = document.querySelector ("textarea");

//limitar caracteres 
var limitar=true;
function limitarCaracteres(){
    if(/^[a-z\s]*$/gi.test(mensajeUsuario.value)){
        limitar=true;
        document.getElementById("mensaje").style.outline="none";
    }else{
        limitar=false;
        placeholder();
    }
}
function placeholder(){
    if(limitar==false){
        document.getElementById("mensaje").style.outline="solid";
        document.getElementById("mensaje").style.outlineColor="red";
        mensajeUsuario.value="";
        document.getElementById("mensaje").placeholder ="Favor de no utilizar numeros o caracteres especiales";
    }
}
//limitar caracteres
//calls
function triggerEncriptar(){
    limitarCaracteres();
    if(mensajeUsuario.value==""){
        alert("Cuidado!: el campo esta vacio o introdujo caracteres especiales");
    }else if(mensajeUsuario.value!=""){
        showOutput(encriptar(mensajeUsuario.value));
    }
}
function triggerDesencriptar(){
    limitarCaracteres();
    if(mensajeUsuario.value==""){
        alert("Cuidado!: el campo esta vacio o introdujo caracteres especiales");
    }else if(mensajeUsuario!=""){
        showOutput(desencriptar(mensajeUsuario.value));
    }
}
//calls
//logica cifrar/descifrar
function encriptar(mensaje){ 
    mensaje=mensaje.replace(/e/gi, "enter");
    mensaje=mensaje.replace(/i/gi, "imes");
    mensaje=mensaje.replace(/a/gi, "ai");
    mensaje=mensaje.replace(/o/gi, "over");
    mensaje=mensaje.replace(/u/gi, "ufat");
    return mensaje;
}
function desencriptar(mensaje){ 
    mensaje=mensaje.replace(/enter/gi, "e");
    mensaje=mensaje.replace(/imes/gi, "i");
    mensaje=mensaje.replace(/ai/gi, "a");
    mensaje=mensaje.replace(/over/gi, "o");
    mensaje=mensaje.replace(/ufat/gi, "u");
    return mensaje;
}
//logica cifrar/descifrar
//copiar button
function copiar() {
    let textarea = document.getElementById("output");
    textarea.select();
    document.execCommand("copy");//el .execCommand esta deprecado para firefox, pero aun no encontre una solucion superadora
    document.getElementById ("output").value="";
}
//copiar button
//output
function showOutput(mensaje){
    mensajeUsuario.value=mensaje;
    console.log(mensajeUsuario.value);
    document.getElementById("frente").style.display="none";
    document.getElementById("dorso").style.display="block";
    document.getElementById ("output").value=mensajeUsuario.value.toLowerCase();
    document.getElementById ("mensaje").value="";
}
//output

 


