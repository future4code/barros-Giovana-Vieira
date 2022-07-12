import React from "react";
import { Formulario } from "../style";

const DadosGerais = () =>{
    return (
        <Formulario>

            <h1>Dados Gerais</h1>

            <label>Nome:</label>
            <input type="text"></input>

            <label>Idade:</label>
            <input type="text"></input>

            <label>E-mail:</label>
            <input type="email"></input>

            <label>Qual o seu grau de escolaridade?</label>
            <input list="escolaridade"/>
            <datalist id="escolaridade">
                <option>Ensino Médio Incompleto</option>
                <option>Ensino Médio Completo</option>
                <option>Ensino Superior Incompleto</option>
                <option>Ensino Superior Completo</option>
            </datalist>

        </Formulario>
    )
}

export default DadosGerais;