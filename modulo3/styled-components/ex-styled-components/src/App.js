import React from "react";
import Cabecalho from "./components/header";
import ConteudoPrincipal from "./components/main";

function App() {
  return (
    <div>

      <header>
        <Cabecalho></Cabecalho>
      </header>
      <main>
        <ConteudoPrincipal></ConteudoPrincipal>
      </main>
      <footer>
        
      </footer>

    </div>      
  )
}

export default App;
