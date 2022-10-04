import React from "react";
import {CentroDaPagina, LateralUm, Meio, LateralDois} from "../style";

const ConteudoPrincipal = () => {
    return(    
    <div>
        <CentroDaPagina>
    
            <LateralUm></LateralUm>
            <Meio>
                <section>
                    <div>
                        <label>Remetente:</label>
                        <input></input>
                    </div>

                    <div>
                        <label>Msg:</label>
                        <div><input></input></div>
                    </div>

                    <button>Enviar Mensagem</button>

                </section>                
            </Meio>
            <LateralDois></LateralDois>
      
        </CentroDaPagina>
    </div>     
    )
}

export default ConteudoPrincipal;

