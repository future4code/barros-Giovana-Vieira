import React from "react";
import TelaUm from "./TelaUm"
import TelaDois from "./TelaDois"
import axios from "axios";
import { useEffect } from "react"
import { useState } from "react"

const SeletorPagina = () =>{

    const [trocarTela, setTrocarTela] = useState(false)
    const [usuarios, setUsuarios] = useState([])
    const [inputName, setInputName] = useState("")
    const [inputEmail, setInputEmail] = useState("")
  
    const users = usuarios.map((user)=>{
      return (
        <li key={user.id}>{user.name}
        <button onClick={()=>{deletarUser(user)}}>Deletar</button>
        </li>        
      )
    })
  
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
  
    if(trocarTela === true){
        return(        
          <TelaDois users={users} setTrocarTela={setTrocarTela}/>
          )
        } else {
          return(
            <TelaUm setTrocarTela={setTrocarTela} inputName={inputName} inputEmail={inputEmail} setInputName={setInputName} setInputEmail={setInputEmail} usuarios={usuarios} setUsuarios={setUsuarios}></TelaUm>
        )
    }
  }

  export default SeletorPagina;