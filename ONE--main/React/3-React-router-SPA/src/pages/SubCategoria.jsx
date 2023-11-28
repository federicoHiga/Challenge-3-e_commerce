import { useParams } from "react-router-dom";
import ListPosts from "../Componentes/ListPost";

const SubCategoria=()=>{
    const {subcategoria}=useParams()
    return (
        <ListPosts url={`/posts?subcatecoria=${subcategoria}`} />
    )
}

export default SubCategoria 