import React from 'react';
import './CardPequeno.css';

function CardPequeno(props) {
    return (
        <div className="smallcard-container">
            <img src={props.imagem} />
            <p>{props.conteudo}</p>
        </div>
    )
}

export default CardPequeno;