import React from "react";
import { Box, Btn } from "../UI";
import { lista } from "../../info";
import Card from "../Card";

const List = ()=>{

    return <Box>
            {
                lista.cargos.map ((cargo, i)=>{ // map() puede recibir 2 parametros, el primero es todo el contenido del array q recorre (lista) con cualquier nombre en este caso "cargo" y el segundo es el indice de cada objeto del arreglo pudiendolo utilizar a modod de id
                    return <Card key={i} cargo={cargo}/> //le madnamos por props todo el "db.json" (info.js)
                })
            }
            <Btn>Ver mas</Btn>
        </Box>
}

export default List
