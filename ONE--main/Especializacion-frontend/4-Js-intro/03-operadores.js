const ciudadesDisponibles=["Bogota", "Santiago", "Quito", "Mendoza"];
const ciudadSolicitada="Mendoza";

//1_if else y operadores logicos (> < =)

console.log("1_if");

console.log(ciudadesDisponibles.indexOf(ciudadSolicitada)); //retorna 3
if (ciudadesDisponibles.indexOf(ciudadSolicitada)>=0){
    console.log("Ciudad disponible");
}else{
    console.log("Ciudad no disponible");
}


//2_operadores logicos &&, ||, !

console.log("2_&&, ||, !");

let edadPasajero=17;
let acompanado=false;

if ((ciudadesDisponibles.indexOf(ciudadSolicitada)>=0) && edadPasajero>=18 || acompanado==true ){
    console.log("Viaje habilitado");
}else{
    if(edadPasajero>=16 && ciudadSolicitada=="Quito")
    console.log("Viaje a Quito habilitado");
    else{
       console.log("Ciudad no disponible o no cumple las reglas"); 
    }
}

//3_mas operadores logicos / ejemplo del !

console.log("3_mas operadores");

edadPasajero=18;
acompanado=false;

let pasaporte=true;
let esNegro=false;

if ((ciudadesDisponibles.indexOf(ciudadSolicitada)>=0) && edadPasajero>=18 || acompanado==true &&(pasaporte==true && !esNegro)){
    console.log("Viaje habilitado___");
}else{
    if(edadPasajero>=16 && ciudadSolicitada=="Quito")
    console.log("Viaje a Quito habilitado");
    else{
       console.log("Ciudad no disponible o no cumple las reglas"); 
    }
}





