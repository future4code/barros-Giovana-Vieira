import React from "react";
import Cabecalho from "./components/header";
import ConteudoPrincipal from "./components/main";
import Rodape from "./components/footer";
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
  }

`

function App() {
  return (
    <div>
        <GlobalStyle/>
        <Cabecalho/>     
        <ConteudoPrincipal/>       
        <Rodape/>      
    </div>      
  )
}

export default App;
