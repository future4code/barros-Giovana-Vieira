import React from "react";
import { createGlobalStyle } from "styled-components";
import RoutesPage from "./RoutesPage";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }
`

function App() {
  return (
    <div>
      <GlobalStyle/>
      <RoutesPage/>
    </div>
  );
}

export default App;
