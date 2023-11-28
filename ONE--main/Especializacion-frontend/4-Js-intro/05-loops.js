//loops 

//while: cuando no se la cantidad de iteraciones a ejecutar
//do while: al menos una iteracion si o si a ejecutar
//for: numero finito y conocido de iteraciones a ejecutar

const ciudadesDisponibles=["Bogota", "Santiago", "Quito", "Mendoza"];
const precioCiudad=[500,400,380,200]; //aca el orden lo pongo yo, para q coordine con el array de arriba.
const presupuesto=310; //cambiar variable para probar el codigo

let i=0;

//1_while/mietras se cumpla esto ejecutame esto

console.log("1_while")

while(precioCiudad[i]>presupuesto && i < ciudadesDisponibles.length){
    i++;
}
if(i==ciudadesDisponibles.length){
    console.log("No hay pasajes disponibles my bro");
}else
    console.log(`Podes comprar pasajes para ${ciudadesDisponibles[i]}`);

//2_map de arrays

console.log("2_mapa");

const datos=[
    {
        "ciudad":"Bogota",
        "precio":500
    },
    {
        "ciudad":"Santiago",
        "precio":400
    },
    {
        "ciudad":"Quito",
        "precio":380
    },
    {
        "ciudad":"Mendoza",
        "precio":200
    },
];

console.log(datos);

//3_do/ejecuta(do) este codigo mientras(while) esta condicion se cumpla. Primero ejecuta despues verifica.

console.log("3_do");

let ciudadSeleccionada= "";

do{
    if(datos[i].precio <= presupuesto){
        ciudadSeleccionada=datos[i].ciudad;
        break;
    }
    i++;
}while(i < datos.length && ciudadSeleccionada==""){
    if(ciudadSeleccionada=="")
        console.log("No tenemos pasajes disponibles");
    else
        console.log(`podes comprar pasajes para ${ciudadSeleccionada}`);
}

//4_for/ejecuta para(for) esta condicion

// estrcuctura base:
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }    

console.log("4_for");

for (let i = 0; i < datos.length && ciudadSeleccionada==""; i++) {
    if(datos[i].precio <= presupuesto){
        ciudadSeleccionada=datos[i].ciudad;
    }
}