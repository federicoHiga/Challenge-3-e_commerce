import "../assets/css/componentes/card.css"
import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { buscar } from "../api/api"

const Post = ({url}) => {

    const [post, setPost]= useState({})

    const {id} = useParams()

    const navigate = useNavigate()

    useEffect(()=>{
        buscar(`/posts/${id}`, setPost).catch(()=>{//el . catch captura cualquier tipo de error, si lo hubiera, y ejecuta lo siguiente
            navigate=("/not-found")//en este caso como hemos definido un comodin, toda ruta no definida va a parar a la route comodin * "/not-found" no existe, podria haber sido "/asdiasfa"
        })
    }, [id])
    
 return(
   <main className = "container flex flex--center">
     <article className = "card post">
       <h2 className = "post-card__title">{post.title}</h2>
       <p className = "text__card">{post.body}</p>
     </article>
   </main>
 )
}

export default Post
