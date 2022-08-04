import React, {useState, useEffect} from "react";
import axios from "axios";
import { createGlobalStyle } from "styled-components";
import TelaInicial from "./components/Tela Inicial/TelaInicial";
import Matches from "./components/Matches/Matches"

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
`

function App() {

  const [profiles, setProfiles] = useState({})
  const [match, setMatch] = useState(true)
  const [arrayMatches, setArrayMatches] = useState([])


    useEffect(()=>{
      getProfileToChoose()      
    },[])


    const getProfileToChoose = ()=>{
      axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/giovana-vieira-barros/person")
        .then((response)=>{
          setProfiles(response.data.profile)
        })
        .catch((error)=>{
            console.log(error.response.data)
        })
    }

    const choosePersonTrue = ()=>{    
    
      const body= {
        "id": profiles.id,
        "choice": true
      }
      axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/giovana-vieira-barros/choose-person", body)
      .then((response)=>{
        console.log(response.data.isMatch)
        setMatch(match)
      })
      .catch((error)=>{
        console.log(error.response.data)
      })
    }

    const choosePersonFalse = ()=>{      

      const body= {
        "id": profiles.id,
        "choice": false
      }
      axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/giovana-vieira-barros/choose-person", body)
      .then((response)=>{
        console.log(response.data.isMatch)
        setMatch(false)
      })
      .catch((error)=>{
        console.log(error.response.data)
      })
    }

    const getMatches = ()=>{
      axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/giovana-vieira-barros/matches")
      .then((response)=>{
        console.log(response.data)
        setArrayMatches(response.data.matches)
      })
      .catch((error)=>{
        console.log(error.response.data)
      })
    }

    const clearEverything = ()=>{
      axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/giovana-vieira-barros/clear")
      .then((response)=>{
        console.log(response.data)
      })
      .catch((error)=>{
        console.log(error.response.data)
      })
    }


  return (
    <>
    <GlobalStyle/>
    <TelaInicial profiles={profiles} choosePersonTrue={choosePersonTrue} choosePersonFalse={choosePersonFalse} clearEverything={clearEverything} getMatches={getMatches}/>
    <Matches arrayMatches={arrayMatches}/>
    </>    
  );
}

export default App;
