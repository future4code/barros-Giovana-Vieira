import { useNavigate } from "react-router-dom"
import useProtectPage from "../../Hooks/useProtectPage.js"
import { AdmHomeContainer } from "./style.js"
import { TripPrivate } from "./style.js"
import axios from "axios";
import { baseUrl } from "../../Constants/Constants"


const AdminHomePage = ({isLoadingTrips, dataTrips, erorrTrips, reload, setReload})=>{

    useProtectPage()

    const navigate = useNavigate()

    const logOut=()=>{
        localStorage.removeItem("token")
        navigate("/login")
    }

        
    const deleteTrip=(id)=>{
        axios.delete(`${baseUrl}/trips/${id}`, {headers:{
            auth: localStorage.getItem("token")
        }
        })
        .then((response)=>{
            setReload(!reload)
        })
        .catch((er)=>{
            alert(er.response.data.message)
        })
    }

    const trips = dataTrips && dataTrips.map((trip)=>{
        return(
        <TripPrivate key={trip.id}>
        <h2>{trip.name}</h2>
        <div>
            <button onClick={()=>{deleteTrip(trip.id)}}>Delete Trip</button>
            <button onClick={()=>{navigate(`/admin/trips/${trip.id}`)}}>Trip Details</button>
        </div>
        </TripPrivate>
        )
    })
    

    return(
        <AdmHomeContainer>
            <h1>Administration</h1>

            {isLoadingTrips && "...Carregando"}

            <ul>
                {!isLoadingTrips&&dataTrips&&trips}     
            </ul>

            {!isLoadingTrips&&!dataTrips&&erorrTrips}

            <div>
                <button onClick={logOut}>Logout</button>
                <button onClick={()=>{navigate("/admin/trips/create")}}>Create Trip</button>
            </div>
        </AdmHomeContainer>        
    )
}

export default AdminHomePage;