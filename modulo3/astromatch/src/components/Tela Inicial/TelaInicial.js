import axios from "axios"
import { useEffect, useState } from "react"
import { AstroMatch, Botoes, Card, ContainerPrincipal } from "../../style"
import HeaderDaAplicacao from "../Header/HeaderDaAplicacao"


const TelaInicial = ()=>{

    const [profiles, setProfiles] = useState({})    

    useEffect(()=>{
        getProfileToChoose()
    },[])

    const getProfileToChoose = ()=>{
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/giovana-vieira-barros/person")
        .then((response)=>{
            console.log(response.data.profile)
            setProfiles(response.data.profile)
        })
        .catch((error)=>{
            console.log(error.response.data)
        })
    }

   
    return(
        <>
        <ContainerPrincipal>
            <div></div>
            <AstroMatch>
                <HeaderDaAplicacao/>
                    <main>
                    <Card>
                        <img src={profiles.photo} alt={profiles.photo_alt} />
                        <h1>{profiles.name}, <span>{profiles.age}</span></h1>
                        <span>{profiles.bio}</span>
                    </Card>
                    </main>
                    <Botoes>
                        <button><img src="https://cdn-icons-png.flaticon.com/512/6520/6520105.png" alt="" /></button>
                        <button><img src="https://cdn-icons-png.flaticon.com/512/8059/8059390.png" alt="" /></button>
                    </Botoes>                                     
            </AstroMatch>
            <div></div>
        </ContainerPrincipal>      
        </>
    )
}

export default TelaInicial;