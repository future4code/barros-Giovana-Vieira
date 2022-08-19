import React from "react";
import { createGlobalStyle } from "styled-components";
import RoutesPage from "./Routes/RoutesPage.js";
import { baseUrl } from "./Constants/Constants.js"
import useRequestData from "./Hooks/useRequestDataGet.js"
import space from "../src/Images/space.jpg";


const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }
  body{
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    background-image: url(${space});
    color: white;
    background-size: cover;
  }
  button{
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    backdrop-filter: blur(1px);
  }
  option{
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  }
`

function App() {

  const [dataTrips, isLoadingTrips, errorTrips, reload, setReload] = useRequestData(`${baseUrl}/trips`)


  return (
    <div>
      <GlobalStyle/>
      <RoutesPage dataTrips={dataTrips} isLoadingTrips={isLoadingTrips} errorTrips={errorTrips} reload={reload} setReload={setReload}/>
    </div>
  );
}

export default App;
