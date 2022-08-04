import React from "react";

const TelaDois = ({users, setTrocarTela}) =>{

    const trocar = (e)=>{
        e.preventDefault()
        setTrocarTela(false)
    } 

    return(
        <div>
            <button onClick={trocar}>Trocar Tela</button>        
            {users}
        </div>
    )
}

export default TelaDois;