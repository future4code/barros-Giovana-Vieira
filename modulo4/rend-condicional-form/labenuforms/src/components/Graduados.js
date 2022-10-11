import React, { useState } from "react";
import { Formulario } from "../style";

const Graduados = () =>{

    const [inputCurso, setInputCurso] = useState("")
    const [inputUnidade, setInputUnidade] = useState("")

    const handleInputCurso = (event) =>{
        setInputCurso(event.target.value)
        console.log(inputCurso)
    }

    const handleInputUnidade = (event) =>{
        setInputUnidade(event.target.value)
        console.log(inputUnidade)
    }


    return (
        <Formulario>

            <label>Qual o curso?</label>
            <input value={inputCurso} onChange={handleInputCurso} type="text"></input>

            <label>Qual a unidade de ensino?</label>
            <input value={inputUnidade} onChange={handleInputUnidade} type="text"></input>

        </Formulario>
    )
}

export default Graduados;