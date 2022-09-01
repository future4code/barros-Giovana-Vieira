import { useNavigate } from "react-router-dom"
import {TripsListContainer, TripPublic} from "./style"


const TripsListPage = ({isLoadingTrips, dataTrips, erorrTrips})=>{

    const navigate = useNavigate()

    const trips = dataTrips && dataTrips.map((trip)=>{
        return(
        <TripPublic key={trip.id}>
        <h3>{trip.name}</h3>
        <span>{trip.description}</span>
        <span>Destiny: {trip.planet}</span>
        <span>Durantion in Days: {trip.durationInDays}</span>
        <span>Date: {trip.date}</span>
        </TripPublic>
        )
    })

    return(

        <TripsListContainer>
            
            <div>
                <h1>Trips List</h1>

                {isLoadingTrips && "...Carregando"}

                <ul>
                    {!isLoadingTrips&&dataTrips&&trips}     
                </ul>
            </div>

                {!isLoadingTrips&&!dataTrips&&erorrTrips}

                <article>
                    <button onClick={()=>{navigate("/trips/application")}}>Applicantion Form</button>
                    <button onClick={()=>{navigate(-1)}}>Return</button>
                </article>
       

        </TripsListContainer>
    )
}

export default TripsListPage;