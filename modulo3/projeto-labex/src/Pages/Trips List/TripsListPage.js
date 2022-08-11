import { useNavigate } from "react-router-dom"

const TripsListPage = ({isLoadingTrips, dataTrips, erorrTrips, trips})=>{

    const navigate = useNavigate()

    return(
        <>
        <h1>Trips List</h1>

        {isLoadingTrips && "...Carregando"}

        {!isLoadingTrips&&dataTrips&&trips}        

        {!isLoadingTrips&&!dataTrips&&erorrTrips}


        <button onClick={()=>{navigate("/trips/application")}}>Applicantion Form</button>
        <button onClick={()=>{navigate(-1)}}>Return</button>
        </>
    )
}

export default TripsListPage;