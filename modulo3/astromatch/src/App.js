import React from "react";
import { createGlobalStyle } from "styled-components";
import TelaInicial from "./components/Tela Inicial/TelaInicial";


const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
`

function App() {
  return (
    <>
    <GlobalStyle/>
    <TelaInicial/>      
    </>    
  );
}

export default App;
