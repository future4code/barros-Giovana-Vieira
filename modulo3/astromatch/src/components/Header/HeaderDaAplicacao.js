import { Header } from "./style";
import imgMatches from "../../img/matches.png"

const HeaderDaAplicacao = ({getMatches}) =>{
    return(
        <>
        <Header>
            <p>Astro<span>Match</span></p>
            <button onClick={getMatches}><img src={imgMatches} alt="Ir para tela de matches" /></button>
        </Header>
        </>
    )
}

export default HeaderDaAplicacao;