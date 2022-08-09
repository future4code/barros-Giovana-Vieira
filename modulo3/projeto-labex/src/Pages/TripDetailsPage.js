import { useNavigate } from "react-router-dom"


const TripDetailsPage = ()=>{

    const navigate = useNavigate()

    return(
        <>
        <h1>Trip Details</h1>
        <button onClick={()=>{navigate(-1)}}>Return</button>
        </>
    )
}

export default TripDetailsPage;