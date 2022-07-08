import { eventWrapper } from "@testing-library/user-event/dist/utils";
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


    const [listaMinhasMensagens, setListaMinhasMensagens] = useState([    ])

    const minhasMensagensRenderizadas = listaMinhasMensagens.map((item, indice)=>{
        return <li key={indice}> <span>{item.remetente}</span> {item.mensagem}</li>
    })

    const [listaRemetenteMensagens, setListaRemetenteMensagens] = useState([    ])

    const remetenteMensagensRenderizadas = listaRemetenteMensagens.map((item, indice)=>{
        return <li key={indice}> <span>{item.remetente}</span> {item.mensagem}</li>
    })

    const renderizar = (event) => {
        event.preventDefault()
        if(inputUsuario == "eu" && inputMensagemUsuario !== ""){
            const minhasMensagens = [...listaMinhasMensagens, {mensagem: inputMensagemUsuario}]
            setListaMinhasMensagens(minhasMensagens) 
        } else if(inputUsuario !== "" && inputMensagemUsuario !== ""){            
            const remetenteMensagens = [...listaRemetenteMensagens, {remetente: inputUsuario, mensagem: inputMensagemUsuario}]
            setListaRemetenteMensagens(remetenteMensagens) 
        }
    }           
     

    return(    
    <div>
        <CentroDaPagina>
    
            <LateralUm></LateralUm>
            <Meio>

                <div>
                    <ul>
                        <div>{minhasMensagensRenderizadas}</div>
                        <div>{remetenteMensagensRenderizadas}</div>
                    </ul>
                    
                
                    <form>
                        <input type="text" required placeholder="Usuário" value={inputUsuario} onChange={mudancaNomeUsuario}></input>
                     
                        <input type="text" required placeholder="Mensagem" value={inputMensagemUsuario} onChange={mensagemUsuario}></input>

                        <button onClick={renderizar}>Enviar Mensagem</button>
                    </form>
                </div>

                                        
            </Meio>
            <LateralDois></LateralDois>
      
        </CentroDaPagina>
    </div>     
    )
}

export default ConteudoPrincipal;

