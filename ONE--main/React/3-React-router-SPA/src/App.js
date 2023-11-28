import './assets/css/base/base.css';
import './assets/css/componentes/card.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import Page404 from './pages/Page404';
import Header from './Componentes/Header';
import Post from './pages/Post';
import Categoria from './pages/Categoria';

function App() {
  
  return (
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Sobre' element={<Sobre />}/>
          <Route path='/Posts/:id' element={<Post />} />
          <Route path='/Categoria/:id/*' element={<Categoria />} /> {/*como este componente lo trabajamos con rutas anidadas, react te pide q a este sistema de rutas tambn  le definas un comodin o un destino por si seguis descendiendo en ese sitema de rutas y no encuentra nada*/}
          <Route path='*' element={<Page404 />} /> {/*este route con el path='*', hace de comodin para cuando ninguna route coincide, y le pasamos como element un componente de error404*/}
        </Routes>
      </Router>
  );
}

export default App;
