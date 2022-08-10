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
<<<<<<< HEAD

=======
>>>>>>> 711f0c08454249d03ab099d259a67e26b3418947
`
function App() {

  const [profiles, setProfiles] = useState({})
  const [match, setMatch] = useState(true)
  const [arrayMatches, setArrayMatches] = useState([])
  const [seletor, setSeletor] = useState(true)

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
      
      getProfileToChoose()
    
      const body= {
        "id": profiles.id,
        "choice": true
      }
      axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/giovana-vieira-barros/choose-person", body)
      .then((response)=>{
        setMatch(match)
      })
      .catch((error)=>{
        console.log(error.response.data)
      })
    }

    const choosePersonFalse = ()=>{      

      getProfileToChoose()

      const body= {
        "id": profiles.id,
        "choice": false
      }
      axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/giovana-vieira-barros/choose-person", body)
      .then((response)=>{
        setMatch(false)
      })
      .catch((error)=>{
        console.log(error.response.data)
      })
    }

    const getMatches = ()=>{

      setSeletor(false)

      axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/giovana-vieira-barros/matches")
      .then((response)=>{
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

    const seletorPagina = ()=>{
      
      if(seletor === true){
        return(
          <TelaInicial profiles={profiles} choosePersonTrue={choosePersonTrue} choosePersonFalse={choosePersonFalse} clearEverything={clearEverything} getMatches={getMatches}/>
        )
      } else{
        return(
<<<<<<< HEAD
          <Matches voltarInicio={voltarInicio} arrayMatches={arrayMatches} setSeletor={setSeletor} getMatches={getMatches} clearEverything={clearEverything}/>
=======
          <Matches voltarInicio={voltarInicio} arrayMatches={arrayMatches} setSeletor={setSeletor} getMatches={getMatches}/>
>>>>>>> 711f0c08454249d03ab099d259a67e26b3418947
        )
      }
    }

    const voltarInicio = (e)=> {
      e.preventDefault()
      setSeletor(true)
  }

  return (
  <>
    <GlobalStyle/>
    {seletorPagina()}
<<<<<<< HEAD
  </>    
=======
    </>    
>>>>>>> 711f0c08454249d03ab099d259a67e26b3418947
  );
}

export default App;
