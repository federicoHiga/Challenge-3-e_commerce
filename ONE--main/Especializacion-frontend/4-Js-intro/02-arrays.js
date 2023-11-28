//Arrays
let los5Grandes = ["boca", "boquita", "booque", "boke", "tiene un hijo bobo"]

//Funciones y propiedades de un Array    .asdas()     variable, punto, funcion y () 
 

//.push()/Inserta al final
los5Grandes.push("xeneizes");
//console.log(los5Grandes);


//.unshift()/inserta al inicio
los5Grandes.unshift("bocaMiVidaSoLalegriaa");
//console.log(los5Grandes);


//Mostrar un elmento especifico por su ubicacion
console.log(los5Grandes[0]); // 0 en este caso es "bocaMiVidaSoLalegriaa" porq se fueron agregando elemetnos con el push y el unshift


//.splice()/quita y puede reemplazar elementos por su ubicacion
los5Grandes.splice(0,1,"bostero");
console.log(los5Grandes);
//[ resultado 
//     'bostero',
//     'boca',   
//     'boquita',
//     'booque',
//     'boke',
//     'tiene un hijo bobo',
//     'xeneizes'
//   ]


//Propiedad .length, para saber la longitud de un array
let cantidadDeEquipos=los5Grandes.length; 
console.log(cantidadDeEquipos);
console.log(`La cantidad de equipos es de ${los5Grandes.length}`);


//.shift()/quita el primer elemento
los5Grandes.shift();
console.log(los5Grandes);


//.pop()/quita el ultimo elemento
los5Grandes.pop();
console.log(los5Grandes);


//.filter()/puede filtrar por dato especifico (string, numero o letra) o por la longitud del string(cantidad de strings)
const apodoMasLargo= los5Grandes.filter((apodo) => apodo.length > 6)
console.log(apodoMasLargo); // resultado en terminal [ 'boquita', 'tiene un hijo bobo' ]
//apodoMasLargo es la variable donde se ejecuta el filter al array. El .filter() devuelve un array con lo filtrado. Y apodo es la nueva variable donde se almacena ese nuevo array con el resultado del filtro. Se deben crear dos nuevas variablesss...aguante boca gg
const apodoFiltrado=los5Grandes.filter((apodo) => apodo == "booque");
console.log(apodoFiltrado); // resultado en terminal [ 'booque' ]


//.join()/devuelve el array completo con sus elementos separados por el caracter q insertes, ya no como array sino como cadena de texto
console.log(los5Grandes.join("_")); // boca_boquita_booque_boke_tiene un hijo bobo


//.sort()/ordena de mayor a menor (caracteres) y lo deja asi (modifica el array)
console.log(los5Grandes.sort()); //[ 'boca', 'boke', 'booque', 'boquita', 'tiene un hijo bobo' ]


//indexOf()/muestra la posicion de un elemnto especifico
console.log(los5Grandes.indexOf("boke")); //1


//.concat()/unifica dos arrays, no los modifica solo los muetra.
let equiposChicos=["riber plai", "rasin", "bojo"];
let todosLosEquipos=los5Grandes.concat(equiposChicos);
console.log(todosLosEquipos);
