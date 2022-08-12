import React from "react";
import { createGlobalStyle } from "styled-components";
import RoutesPage from "./RoutesPage";
import { baseUrl } from "./Constants/Constants.js"
import useRequestData from "./Hooks/UseRequestDataGet.js"


const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }
  body{
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  }
  button{
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  }
  option{
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  }
`

function App() {

  const [dataTrips, isLoadingTrips, errorTrips] = useRequestData(`${baseUrl}/trips`)


  return (
    <div>
      <GlobalStyle/>
      <RoutesPage dataTrips={dataTrips} isLoadingTrips={isLoadingTrips} errorTrips={errorTrips}/>
    </div>
  );
}

export default App;
