import { AstroMatch, Botoes, Card, ContainerPrincipal } from "../../style"
import HeaderDaAplicacao from "../Header/HeaderDaAplicacao"


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
                            <button onClick={choosePersonFalse}><img src="https://cdn-icons-png.flaticon.com/512/6520/6520105.png" alt="Botão Deslike" /></button>
                            <button onClick={choosePersonTrue}><img src="https://cdn-icons-png.flaticon.com/512/8059/8059390.png" alt="Botão like" /></button>
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