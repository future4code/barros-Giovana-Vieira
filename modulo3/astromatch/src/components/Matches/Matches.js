import HeaderTelaMatches from "../Headers/HeaderTelaMatches"
import { BotaoDelete, CardMatch, ContainerTelaMatches, MatchesContainer } from "../../style"

const Matches = ({arrayMatches, voltarInicio, clearEverything})=>{

<<<<<<< HEAD
    const arrayMatchesMapeado = arrayMatches.map((item)=>{
=======

const Matches = ({arrayMatches, voltarInicio, getMatches})=>{

   const arrayMatchesMapeado = arrayMatches.map((item)=>{
>>>>>>> 711f0c08454249d03ab099d259a67e26b3418947
    return(
         <li key={item.id}>
        <CardMatch>
            <img src={item.photo}></img>
            <p>{item.name}</p>
        </CardMatch></li>
    )
    })
<<<<<<< HEAD
    
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
=======

    return (
        <>
            <button onClick={voltarInicio}>Voltar ao Início</button>
            {arrayMatchesMapeado}
        </>
>>>>>>> 711f0c08454249d03ab099d259a67e26b3418947
    )
 }
 
 export default Matches;