import React from "react";
import Cabecalho from "./components/header";
import ConteudoPrincipal from "./components/main";
import Rodape from "./components/footer";


function App() {
  return (
    <div>        
        <Cabecalho/>     
        <ConteudoPrincipal/>       
        <Rodape/>      
    </div>      
  )
}

export default App;
