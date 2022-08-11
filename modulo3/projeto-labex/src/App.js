import React from "react";
import { createGlobalStyle } from "styled-components";
import RoutesPage from "./RoutesPage";
import { baseUrl } from "./Constants/Constants.js"
import useRequestData from "./Hooks/UseRequestDataGet.js"
import {Trip, TripsListContainer} from "./Pages/Trips List/style"


const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }
`

function App() {

  const [dataTrips, isLoadingTrips, errorTrips] = useRequestData(`${baseUrl}/trips`)

    const trips = dataTrips && dataTrips.map((trip)=>{
        return <TripsListContainer key={trip.id}> 
        <Trip>
        <h3>{trip.name}</h3>
        <p>{trip.description}</p>
        <p>{trip.planet}</p>
        <p>{trip.duration}</p>
        <p>{trip.date}</p>
        </Trip>
        </TripsListContainer>
    })


  return (
    <div>
      <GlobalStyle/>
      <RoutesPage dataTrips={dataTrips} isLoadingTrips={isLoadingTrips} errorTrips={errorTrips} trips={trips}/>
    </div>
  );
}

export default App;
