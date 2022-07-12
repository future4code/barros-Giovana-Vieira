import React from "react";
import { Formulario } from "../style";

const NaoGraduados = () =>{
    return (
        <Formulario>
            
            <label>Por que você não terminou um curso de graduação?</label>
            <input type="text"></input>
            
            <label>Você fez algum curso complementar?</label>
            <input type="text" list="complementares"/>
                <datalist id="complementares">
                    <option>Curso técino</option>
                    <option>Curso de inglês</option>
                    <option>Não fiz curso complementar</option>
                </datalist>
        
        </Formulario>
    )
}

export default NaoGraduados;