import React, { useState } from "react";
import { Formulario } from "../style";
import Agradecimento from "./Agradecimento";
import Graduados from "./Graduados";
import NaoGraduados from "./NaoGraduados";


const DadosGerais = () =>{

    const escolaridade = [
        {id: 1 , nome:"Ensino Médio Incompleto"},
        {id: 2 , nome:"Ensino Médio Completo"},
        {id: 3, nome:"Ensino Superior Incompleto"},
        {id: 4, nome: "Ensino Superior Completo"}
    ]


    const [etapa, setEtapa] = useState(1) 

        
    const renderizaEtapa = (event) => {
        event.preventDefault()
        setEtapa(etapa+1)    
      }

    let retorno;
    

    switch(etapa){
        case 1:
        retorno = <NaoGraduados/>
        break
        case 2:
        retorno = <NaoGraduados/>
        break
        case 3:
        retorno = <NaoGraduados/>
        break
        case 4:
        retorno = <Graduados/>
        break
        case 5:
        retorno = <Agradecimento/>
        break
        default: 
        retorno = <Agradecimento/>
        break
    }


    return (

        <div>

        <Formulario>

            <h1>LabenuForms</h1>

            <label>Nome:</label>
            <input type="text"></input>

            <label>Idade:</label>
            <input type="number"></input>

            <label>E-mail:</label>
            <input type="email"></input>

            <label>Qual o seu grau de escolaridade?</label>
            
            <select value={etapa} onChange={e => setEtapa(e.target.value)}>
                {escolaridade.map((item, indice)=> <option key={indice} value={item.id}>{item.nome}</option>)}
            </select>

            <button onClick={renderizaEtapa}>Selecionar</button>

            

        </Formulario>

        {retorno}

        </div>
    )
}

export default DadosGerais;