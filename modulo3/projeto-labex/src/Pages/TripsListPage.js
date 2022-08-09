import { useNavigate } from "react-router-dom"


const TripsListPage = ()=>{

    const navigate = useNavigate()

    return(
        <>
        <h1>Trips List</h1>
        <button onClick={()=>{navigate("/trips/application")}}>Applicantion Form</button>
        <button onClick={()=>{navigate(-1)}}>Return</button>
        </>
    )
}

export default TripsListPage;