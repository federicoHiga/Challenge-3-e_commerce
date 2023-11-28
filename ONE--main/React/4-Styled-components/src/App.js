import React, { useState }from "react";
import Container from "./Components/Container";
import Header from "./Components/Header";
import GlobalStyle from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaOscuro } from "./Components/UI/temas";
import SwitcherTema from "./Components/SwitcherTema";
import { BtnTema } from "./Components/UI";


function App() {

  const [tema, setTema]=useState(true) 
  const toggleTema = ()=>{
    setTema ((tema)=>!tema)
  }
  return (
    <ThemeProvider theme={tema ? temaClaro : temaOscuro }>
      <GlobalStyle />
      <BtnTema onClick={toggleTema}>
        <SwitcherTema tema={tema}/>
      </BtnTema>
      <Header />
      <Container />
    </ThemeProvider>
  );
}

export default App;
