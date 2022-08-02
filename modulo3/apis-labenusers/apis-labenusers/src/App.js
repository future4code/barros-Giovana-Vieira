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
    console.log(response.data)
    setUsuarios(response.data)
  })
  .catch((error)=>{
    console.log(error.response.data)
  })
  }

  const deletarUser = (user) =>{
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${user.id}`, {
      headers: {
        Authorization: "giovana-vieira-barros"
    }
    })
    .then((response)=>{
      alert(response.data)
      getAllUsers()
    })
    .catch((error)=>{
      alert(error.response.data)
      console.log(error.response.data)
    })
  }

  const users = usuarios.map((user)=>{
    return (
      <li key={user.id}>{user.name}
      <button onClick={()=>{deletarUser(user)}}>Deletar</button>
      </li>
      
    )
  })

  const trocar= (e) =>{
    e.preventDefault()
  }
  

  return (
    <>
      <button onClick={trocar}>Trocar de Tela</button>
      <TelaUm inputName={inputName} inputEmail={inputEmail} setInputName={setInputName} setInputEmail={setInputEmail} usuarios={usuarios} setUsuarios={setUsuarios}></TelaUm>
      <TelaDois users={users}/>
    </>
  )
}

export default App;
