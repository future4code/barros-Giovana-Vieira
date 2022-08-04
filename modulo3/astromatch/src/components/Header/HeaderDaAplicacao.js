import { Header } from "./style";

const HeaderDaAplicacao = ({getMatches}) =>{
    return(
        <>
        <Header>
            <p>Astro<span>Match</span></p>
            <button onClick={getMatches}><img src="https://cdn-icons-png.flaticon.com/512/3079/3079267.png" alt="Ir para tela de matches" /></button>
        </Header>
        </>
    )
}

export default HeaderDaAplicacao;