import React, { useState } from "react";
import { Formulario } from "../style";


const DadosGerais = () =>{

    const [inputNome, setInputNome] = useState("")
    const [inputIdade, setInputIdade] = useState("")
    const [inputEmail, setInputEmail] = useState("")
    const [medioIncompleto, setMedioIncompleto] = useState("")
    const [medioCompleto, setMedioCompleto] = useState("")
    const [superiorCompleto, setSuperiorCompleto] = useState("")
    const [superiorIncompleto, setSuperiorIncompleto] = useState("")


    const handleInputNome = (event) => {
        setInputNome(event.target.value)
        console.log(inputNome)
    }

    const handleInputIdade = (event) => {
        setInputIdade(event.target.value)
        console.log(inputIdade)
    }

    const handleInputEmail = (event) => {
        setInputEmail(event.target.value)
        console.log(inputEmail)
    }

    const handleMedioIncompleto = (event) => {
        setMedioIncompleto(event.target.value)
        console.log(medioIncompleto)
    }

    const handleMedioCompleto = (event) => {
        setMedioCompleto(event.target.value)
        console.log(medioCompleto)
    }

    const handleSuperiorIncompleto = (event) => {
        setSuperiorIncompleto(event.target.value)
        console.log(superiorIncompleto)
    }

    const handleSuperiorCompleto = (event) => {
        setSuperiorCompleto(event.target.value)
        console.log(superiorCompleto)
    }

    

    return (
        <Formulario>

            <h1>LabenuForms</h1>

            <label>Nome:</label>
            <input type="text" value={inputNome} onChange={handleInputNome}></input>

            <label>Idade:</label>
            <input type="number" value={inputIdade} onChange={handleInputIdade}></input>

            <label>E-mail:</label>
            <input type="email" value={inputEmail} onChange={handleInputEmail}></input>

            <label>Qual o seu grau de escolaridade?</label>
            <select>
                <option value={medioIncompleto} onChange={handleMedioIncompleto}>Ensino Médio Incompleto</option>
                <option value={medioCompleto} onChange={handleMedioCompleto}>Ensino Médio Completo</option>
                <option value={superiorIncompleto} onChange={handleSuperiorIncompleto}>Ensino Superior Incompleto</option>
                <option value={superiorCompleto} onChange={handleSuperiorCompleto}>Ensino Superior Completo</option>
            </select>

        </Formulario>
    )
}

export default DadosGerais;