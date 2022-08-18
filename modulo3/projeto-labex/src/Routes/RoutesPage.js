import { BrowserRouter, Routes, Route } from "react-router-dom"
import TripsListPage from "../Pages/Trips List/TripsListPage"
import HomePage from "../Pages/Home/HomePage"
import ApplicationFormPage from "../Pages/Application Form/ApplicationFormPage"
import LoginPage from "../Pages/Login/LoginPage"
import AdminHomePage from "../Pages/Administration Home/AdminHomePage"
import CreateTripPage from "../Pages/Create Trip/CreateTripPage"
import TripDetailsPage from "../Pages/Trip Details/TripDetailsPage"

const RoutesPage = ({dataTrips, isLoadingTrips, errorTrips, tripDetails, setTripDetails})=>{
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/trips/list" element={<TripsListPage dataTrips={dataTrips} isLoadingTrips={isLoadingTrips} errorTrips={errorTrips}/>}/>
                    <Route path="/trips/application" element={<ApplicationFormPage dataTrips={dataTrips}/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/admin/trips/list" element={ <AdminHomePage dataTrips={dataTrips} isLoadingTrips={isLoadingTrips} errorTrips={errorTrips} tripDetails={tripDetails} setTripDetails={setTripDetails}/> }/>
                    <Route path="/admin/trips/create" element={<CreateTripPage dataTrips={dataTrips}/>}/>
                    <Route path="/admin/trips/:id" element={<TripDetailsPage tripDetails={tripDetails}/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default RoutesPage;