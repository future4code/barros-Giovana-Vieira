import React from "react";
import { useState } from "react";
import {CentroDaPagina, LateralUm, Meio, LateralDois} from "../style";

const ConteudoPrincipal = () => {

    const [inputUsuario, setInputUsuario] = useState("")
    const [inputMensagemUsuario, setInputMensagemUsuario] = useState("")

    const mudancaNomeUsuario = (event) => {
        setInputUsuario(event.target.value)
        console.log(inputUsuario)
    }

    const mensagemUsuario = (event) => {
        setInputMensagemUsuario(event.target.value)
        console.log(inputMensagemUsuario)
    }

    
    const mensagens= [{remetente: inputUsuario , mensagem: inputMensagemUsuario}]

    const user = mensagens.map((itens,indice) => {
        return <p key={indice}>{itens.remetente} {itens.mensagem}</p>
    })
    

    return(    
    <div>
        <CentroDaPagina>
    
            <LateralUm></LateralUm>
            <Meio>

                {user}
                           
                <section>
                    <form>
                        <input type="text" required placeholder="Usuário" value={inputUsuario} onChange={mudancaNomeUsuario}></input>
                                     
                        <input type="text" required placeholder="Mensagem" value={inputMensagemUsuario} onChange={mensagemUsuario}></input>

                        <button>Enviar Mensagem</button>
                    </form>
                </section>                
            </Meio>
            <LateralDois></LateralDois>
      
        </CentroDaPagina>
    </div>     
    )
}

export default ConteudoPrincipal;

