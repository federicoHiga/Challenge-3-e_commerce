import './App.css';
import {useState} from "react"
import CompoConteiner from './components/function-vs-class/SwitchComponents';
import HiddenCompo from './components/HiddenCompo';
import FormSignUp from './components/FormSignUp';
import Container from "@mui/material/Container";
import { Typography } from '@mui/material';


function App() {

  /**
   * on: switch para el div de component functional vs class
   */
  const [on, setOn]= useState(false)
  const mostrarCompo = ()=>{
    setOn(!on)
  }

  const handleSubmit = (valores)=>{
    console.log("desde App.js ", valores)
  }
  return (

    <>
      <div>
        { on && <CompoConteiner /> }
        <HiddenCompo mostrarCompo={mostrarCompo} />
      </div>
     <Container component="section" maxWidth="sm">
        <Typography variant='h3' align="center" component="h3">Formulario Registro</Typography>
        <FormSignUp handleSubmit={handleSubmit} />
     </Container>
     
    </>
  );
}

export default App;
