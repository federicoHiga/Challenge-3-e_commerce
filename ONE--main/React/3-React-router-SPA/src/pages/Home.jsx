import ListPosts from "../Componentes/ListPost"
import ListCategories from "../Componentes/ListCategories"

const Home = () => {
  return (
    <main>
      <div className="container">
        <h2 className="title-page">Pet noticias</h2>
      </div>
      <ListCategories />
      <ListPosts url={"/posts"} /*la url ya tiene como base el localhost por el baseURL*/ />
    </main>
  )
}

export default Home
