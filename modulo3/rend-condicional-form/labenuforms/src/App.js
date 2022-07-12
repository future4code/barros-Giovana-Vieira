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

  const [etapa, setEtapa] = useState(1)

  const irParaProximaEtapa = () => {
    setEtapa(etapa+1)
  }
   
  const renderizaEtapa = () => {

    switch(etapa){
      case 1:            
        return (
          <DadosGerais/>   
        )               
      break
      case 2:        
        return (
          <Graduados/> 
        )    
      break
      case 3:
        return (
          <NaoGraduados/>
        )
      break
      case 4:        
        return (
          <Agradecimento/>
        )                        
      break
      default:        
        return (
          null
        )       
      break
    }    
  } 

  return (
    
    <Conteudo>
    <GlobalStyle/>
        {renderizaEtapa()}
        <button onClick={irParaProximaEtapa}>Próxima Etapa</button>
    </Conteudo>
  );
}

export default App;
