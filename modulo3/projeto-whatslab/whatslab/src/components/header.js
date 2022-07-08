import React from "react";
import ImagemHeader from "../img/whatsapp.png"
import {HeaderStyle} from "../style";


const Cabecalho = () => {
    return(
    
        <HeaderStyle>
            <div>
                <img src={ImagemHeader} alt="Imagem WhatsApp" />
                <h2>LabZap</h2>
            </div>
        </HeaderStyle>

    
    )
}

export default Cabecalho;