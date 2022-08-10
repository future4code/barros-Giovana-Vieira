import { HeaderContainer } from "./style";
import imgMatches from "../../img/matches.png"

const HeaderTelaInicial = ({getMatches}) =>{
    return(
        <>
        <HeaderContainer>
            <p>Astro<span>Match</span></p>
            <button onClick={getMatches}><img src={imgMatches} alt="Ir para tela de matches" /></button>
        </HeaderContainer>
        </>
    )
}

export default HeaderTelaInicial;