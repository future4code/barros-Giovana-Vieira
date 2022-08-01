import React, { useEffect, useState } from "react";
import TelaDois from "./components/TelaDois";
import TelaUm from "./components/TelaUm";
import axios from "axios";

function App() {

  const [usuarios, setUsuarios] = useState([])
  const [inputName, setInputName] = useState("")
  const [inputEmail, setInputEmail] = useState("")

  useEffect(()=>{
    getAllUsers()
  },[])

  const getAllUsers= () =>{
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
    headers: {
      Authorization: "giovana-vieira-barros"
  }
  })
  .then((response)=>{
    setUsuarios(response.data)
  })
  .catch((error)=>{
    console.log(error.response.data)
  })
  }

  console.log(usuarios)


  return (
    <>
      <TelaUm inputName={inputName} inputEmail={inputEmail} setInputName={setInputName} setInputEmail={setInputEmail} usuarios={usuarios} setUsuarios={setUsuarios}></TelaUm>
      <TelaDois>
      {usuarios.map=((usuario)=>{
                return (
                    <li key={usuario.id}>{usuario.name}</li>
                )
            })}
      </TelaDois>
    </>
  )
}

export default App;
