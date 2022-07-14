import React, { useState } from "react";
import DadosGerais from "./components/DadosGerais";
import Agradecimento from "./components/Agradecimento";
import Graduados from "./components/Graduados";
import NaoGraduados from "./components/NaoGraduados";
import { Conteudo } from "./style";
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
`

function App() {

  return (    
    <Conteudo>
    <GlobalStyle/>
    <DadosGerais/>
    </Conteudo>
  );
}

export default App;
