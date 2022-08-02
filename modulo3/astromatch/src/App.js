import React from "react";
import HeaderDaAplicacao from "./components/Header/HeaderDaAplicacao";
import FooterDaAplicacao from "./components/Footer/FooterDaAplicacao"
import { createGlobalStyle } from "styled-components";
import { ContainerPrincipal, AstroMatch, Card } from "./style";

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
      <ContainerPrincipal>

        <div/>

        <AstroMatch>

          <HeaderDaAplicacao/>
          <main>
            <Card>
              
            </Card>
          </main>
          <FooterDaAplicacao/>
        </AstroMatch>

        <div/>
      
      
      </ContainerPrincipal>    
    </>    
  );
}

export default App;
