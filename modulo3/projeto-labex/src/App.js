import React from "react";
import { createGlobalStyle } from "styled-components";
import RoutesPage from "./Routes/RoutesPage.js";
import { baseUrl } from "./Constants/Constants.js"
import useRequestData from "./Hooks/useRequestDataGet.js"
import space from "../src/Images/space.jpg";
import { useState } from "react";


const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }
  body{
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    background-image: url(${space});
    color: white;
  }
  button{
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    backdrop-filter: blur(1px);
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  }
  option{
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  }
`

function App() {

  const [dataTrips, isLoadingTrips, errorTrips] = useRequestData(`${baseUrl}/trips`)
  const [tripDetails, setTripDetails] = useState({})


  return (
    <div>
      <GlobalStyle/>
      <RoutesPage tripDetails={tripDetails} setTripDetails={setTripDetails} dataTrips={dataTrips} isLoadingTrips={isLoadingTrips} errorTrips={errorTrips}/>
    </div>
  );
}

export default App;
