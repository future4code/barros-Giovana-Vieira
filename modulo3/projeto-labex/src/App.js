import React from "react";
import RoutesPage from "./Routes/RoutesPage.js";
import { baseUrl } from "./Constants/Constants.js"
import useRequestData from "./Hooks/useRequestDataGet.js"
import { GlobalStyle } from "./GlobalStyle.js";



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
