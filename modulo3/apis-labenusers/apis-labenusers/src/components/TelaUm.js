import React from "react";
import axios from "axios";

const TelaUm = ({inputName, inputEmail, setInputName, setInputEmail, setTrocarTela}) =>{

    const body = {
        "name": inputName,
        "email": inputEmail
    }
      const createUser= () =>{
    
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
            headers: {
                Authorization: "giovana-vieira-barros"
            }
        })
        .then((response)=>{
            alert(response.data)
            console.log(response.data)
        })
        .catch((error)=>{
            alert(error.response.data)
            console.log(error.response.data)
        })

        setInputName("")
        setInputEmail("")
    }

    const trocar = (e)=>{
        e.preventDefault()
        setTrocarTela(true)
    }

    return (
        <>
            <button onClick={trocar}>Trocar Tela</button>       
            <form>
                <input type="text" value={inputName} placeholder="Nome" onChange={(e)=>{setInputName(e.target.value)}}></input>
                <input type="email" value={inputEmail} placeholder="E-mail" onChange={(e)=>{setInputEmail(e.target.value)}}></input>
                <input type="submit" onClick={createUser}></input>
            </form>
        </>
    )
}

export default TelaUm