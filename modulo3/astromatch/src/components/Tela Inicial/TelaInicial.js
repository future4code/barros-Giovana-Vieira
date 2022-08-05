import { AstroMatch, Botoes, Card, ContainerPrincipal } from "../../style"
import HeaderDaAplicacao from "../Header/HeaderDaAplicacao"
import imgLike from "../../img/like.png"
import imgDeslike from "../../img/deslike.png"

const TelaInicial = ({profiles, choosePersonTrue, choosePersonFalse, clearEverything, getMatches})=>{
   
    return(
        <>
        <ContainerPrincipal>
            <div></div>
            <AstroMatch>
                <HeaderDaAplicacao getMatches={getMatches}/>
                    <main>
                        <Card>
                            <img src={profiles.photo} alt={profiles.photo_alt} />
                            <h1>{profiles.name}, <span>{profiles.age}</span></h1>
                            <span>{profiles.bio}</span>
                        </Card>
                    </main>
                    <Botoes>
                        <div>
                            <button onClick={choosePersonFalse}><img src={imgDeslike} alt="Botão Deslike" /></button>
                            <button onClick={choosePersonTrue}><img src={imgLike} alt="Botão like" /></button>
                        </div>
                        <article>
                            <button onClick={clearEverything}>Deletar tudo</button>
                         </article>
                    </Botoes>                                     
            </AstroMatch>
            <div></div>
        </ContainerPrincipal>      
        </>
    )
}

export default TelaInicial;