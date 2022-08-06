<<<<<<< HEAD
import { AstroMatch, Botoes, BotaoDelete, Card, ContainerTelaInicial } from "../../style"
import HeaderTelaInicial from "../Headers/HeaderTelaInicial"
=======
import { AstroMatch, Botoes, Card, ContainerPrincipal } from "../../style"
import HeaderDaAplicacao from "../Header/HeaderDaAplicacao"
>>>>>>> 711f0c08454249d03ab099d259a67e26b3418947
import imgLike from "../../img/like.png"
import imgDeslike from "../../img/deslike.png"

const TelaInicial = ({profiles, choosePersonTrue, choosePersonFalse, clearEverything, getMatches})=>{
   
    return(
        <>
        <ContainerTelaInicial>
            <div></div>
            <AstroMatch>
                <HeaderTelaInicial getMatches={getMatches}/>
                    <main>
                        <Card>
                            <img src={profiles.photo} alt={profiles.photo_alt} />
                            <h1>{profiles.name}, <span>{profiles.age}</span></h1>
                            <span>{profiles.bio}</span>
                        </Card>
                    </main>
<<<<<<< HEAD
                    <div>
                        <Botoes>
                            <button onClick={choosePersonFalse}><img src={imgDeslike} alt="Botão Deslike" /></button>
                            <button onClick={choosePersonTrue}><img src={imgLike} alt="Botão like" /></button>
                        </Botoes>
                        <BotaoDelete>
                            <button onClick={clearEverything}>Limpar swipes e matches</button>
                        </BotaoDelete>                        
                    </div>
=======
                    <Botoes>
                        <div>
                            <button onClick={choosePersonFalse}><img src={imgDeslike} alt="Botão Deslike" /></button>
                            <button onClick={choosePersonTrue}><img src={imgLike} alt="Botão like" /></button>
                        </div>
                        <article>
                            <button onClick={clearEverything}>Deletar tudo</button>
                         </article>
                    </Botoes>                                     
>>>>>>> 711f0c08454249d03ab099d259a67e26b3418947
            </AstroMatch>
            <div></div>
        </ContainerTelaInicial>      
        </>
    )
}

export default TelaInicial;