import { useEffect, useState } from "react";
import "../assets/css/blog.css"
import { buscar } from "../api/api";
import ListCategories from "../Componentes/ListCategories"
import ListPosts from "../Componentes/ListPost";
import SubCategoria from "./SubCategoria";
import { useParams, Routes, Route, Link, useResolvedPath } from "react-router-dom";

const Categoria = ()=>{

    const [subcategorias, setSubcategorias]=useState([])
    const { id }=useParams()

    const url=useResolvedPath("").pathname //

    useEffect(()=>{
        buscar(`/categorias?id=${id}`, (response)=>{
            setSubcategorias(response[0].subcategorias)//forma de ingresar al arreglo
        })
    }, [id])

    return (
        <>
            <div className="container">
                <h2 className="title-page">Pet Noticias</h2>
            </div>
            <ListCategories />
            <ul className='category-list container flex'>
                {
                    subcategorias.map(subcategoria => (
                        <li className={`category-list__category category-list__category--${id}`} key={subcategoria}>
                            <Link to={`${url}/${subcategoria}`}>
                                {subcategoria}
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <Routes>
                <Route path="/" element= {<ListPosts url={`/posts?categoria=${id}`}/> }/> {/*el string "post?categoria=${id}" se usa a modod de filtro para las distintas categorias del db.json, el id del useParams() en este caso es "comportamiento" o "bienestar"*/}{/*Concepto de rutas anidadas, para filtrar dependiendo donde nos encintremos renderizar un componente u otro*/}
                <Route path="/:subcategoria" element={<SubCategoria />} />
            </Routes>
        </>
    )
}

export default Categoria

