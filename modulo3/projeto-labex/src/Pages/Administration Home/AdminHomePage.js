import { useNavigate } from "react-router-dom"
import useProtectPage from "../../Hooks/useProtectPage.js"
import { AdmHomeContainer } from "./style.js"
import { TripPrivate } from "./style.js"
import axios from "axios";
import { baseUrl } from "../../Constants/Constants"
import { useEffect, useState } from "react";



const AdminHomePage = ({isLoadingTrips, dataTrips, erorrTrips, tripDetails, setTripDetails})=>{

    useProtectPage()

    const navigate = useNavigate()

    const logOut=()=>{
        localStorage.removeItem("token")
        navigate("/login")
    }

    const getTripDetails=(id)=>{

        axios.get(`${baseUrl}/trip/${id}`, {headers:{
            auth: localStorage.getItem("token")
        }
        })
        .then((response)=>{            
            console.log(response.data)
            setTripDetails(response.data)
            /* navigate(`/admin/trips/${id}`) */
        })
        .catch((er)=>{
            alert(er.response.data.message)
        })
    }

    console.log(tripDetails)

    useEffect(()=>{getTripDetails()}, [])

    const deleteTrip=(id)=>{
        axios.delete(`${baseUrl}/trips/${id}`, {headers:{
            auth: localStorage.getItem("token")
        }
        })
        .then((response)=>{
            console.log(response.data)
        })
        .catch((er)=>{
            console.log(er.response.data.message)
        })
    }

    const trips = dataTrips && dataTrips.map((trip)=>{
        return(
        <TripPrivate key={trip.id}>
        <h3>{trip.name}</h3>
        <div>
            <button onClick={()=>{deleteTrip(trip.id)}}>Delete Trip</button>
            <button onClick={()=>{getTripDetails(trip.id)}}>Trip Details</button>
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