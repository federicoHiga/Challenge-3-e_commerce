import { useState, useEffect } from "react"
import "../assets/css/componentes/card.css"
import { buscar } from "../api/api"
import {Link} from "react-router-dom"


/**
 * ListPost: 
 * @param { url } //es toda la data del db.json en un arreglo para poder iterar a posterior, el cual se almacena en un hook useState para ir actualizandolo al ejecutar "buscar" y "setPosts"
 * @returns 
 * A) useEffect(): este hook linkea una funcion a un useState (en este caso manda a llmar el "buscar" (para filtrar por endpoints) y el "setPosts" (para ir almacenando y actualizando el arreglo "post")) con un arreglo de dependencias (osea depende de) en este caso el objeto del db.json, enteonces cada vez q se actualice se vuelve a ejecutar y actualiza de nuevo con el setPosts
 */

const ListPosts = ({ url }) => {

    const [posts, setPosts] = useState([])

    useEffect(()=>{
        buscar(url, setPosts)
    }, [url])
    

    return (
        <section className="posts container">
              {
                posts.map(post => {
                    const { id, title, metadescription, categoria } = post;
                    return <Link to={`/posts/${id}`} className={`post__card post-card--${categoria}`} key={id}>
                        <article >
                            <h3 className="post-card__title">
                                {title}
                            </h3>
                            <p className="post-card__meta">{metadescription}</p>
                        </article>
                    </Link>
                })
            }
        </section>
    )
}

export default ListPosts