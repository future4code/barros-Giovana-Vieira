import HeaderTelaMatches from "../Headers/HeaderTelaMatches"
import { BotaoDelete, CardMatch, ContainerTelaMatches, MatchesContainer } from "../../style"

const Matches = ({arrayMatches, voltarInicio, clearEverything})=>{

    const arrayMatchesMapeado = arrayMatches.map((item)=>{
    return(
         <li key={item.id}>
        <CardMatch>
            <img src={item.photo}></img>
            <p>{item.name}</p>
        </CardMatch></li>
    )
    })
    
    return (
    <>
        <ContainerTelaMatches>
            <div></div>       
            <MatchesContainer>
                <HeaderTelaMatches/>
                    <main>
                        <ul>
                            {arrayMatchesMapeado}                       
                        </ul>
                    </main>
                <div>    
                    <BotaoDelete>
                        <button onClick={clearEverything}>Limpar swipes e matches</button>
                        <button onClick={voltarInicio}>Voltar ao Início</button>
                    </BotaoDelete>                        
                </div>
            </MatchesContainer>     
            <div></div>          
        </ContainerTelaMatches>     
    </>
    )
 }
 
 export default Matches;