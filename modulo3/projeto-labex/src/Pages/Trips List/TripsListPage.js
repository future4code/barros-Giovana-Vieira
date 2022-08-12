import { useNavigate } from "react-router-dom"
import {TripsListContainer, Trip} from "./style"

const TripsListPage = ({isLoadingTrips, dataTrips, erorrTrips})=>{

    const navigate = useNavigate()

    const trips = dataTrips && dataTrips.map((trip)=>{
        return(
        <Trip key={trip.id}>
        <h3>{trip.name}</h3>
        <span>{trip.description}</span>
        <span>Destiny: {trip.planet}</span>
        <span>Durantion in Days: {trip.durationInDays}</span>
        <span>Date: {trip.date}</span>
        </Trip>
        )
    })

    return(

        <TripsListContainer>
            

                <h1>Trips List</h1>

                {isLoadingTrips && "...Carregando"}

                <ul>
                    {!isLoadingTrips&&dataTrips&&trips}     
                </ul>

                {!isLoadingTrips&&!dataTrips&&erorrTrips}

                <div>
                    <button onClick={()=>{navigate(-1)}}>Return</button>
                    <button onClick={()=>{navigate("/trips/application")}}>Applicantion Form</button>
                </div>
       

        </TripsListContainer>
    )
}

export default TripsListPage;