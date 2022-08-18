import { useNavigate, useParams } from "react-router-dom"
import useProtectPage from "../../Hooks/useProtectPage"
import { TripDetailsContainer } from "./style"


const TripDetailsPage = ({tripDetails})=>{

    useProtectPage()

    const pathParams = useParams()
    const navigate = useNavigate()

    return(
        <TripDetailsContainer>
            <h1>Trip Details</h1>

            {pathParams.id}

            {tripDetails.name}

            <button onClick={()=>{navigate(-1)}}>Return</button>
        </TripDetailsContainer>
        
    )
}

export default TripDetailsPage;