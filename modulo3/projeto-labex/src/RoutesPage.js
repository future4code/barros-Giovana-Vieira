import { BrowserRouter, Routes, Route } from "react-router-dom"
import TripsListPage from "../src/Pages/Trips List/TripsListPage"
import ApplicationFormPage from "./Pages/Application Form/ApplicationFormPage"
import LoginPage from "./Pages/Login/LoginPage"
import AdminHomePage from "./Pages/Administration Home/AdminHomePage"
import CreateTripPage from "./Pages/Create Trip/CreateTripPage"
import TripDetailsPage from "./Pages/Trip Details/TripDetailsPage"
import HomePage from "./Pages/Home/HomePage"

const RoutesPage = ({dataTrips, isLoadingTrips, errorTrips, trips})=>{
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<HomePage/>}/>
                    <Route path="/trips/list" element={<TripsListPage dataTrips={dataTrips} isLoadingTrips={isLoadingTrips} errorTrips={errorTrips} trips={trips} />}/>
                    <Route path="/trips/application" element={<ApplicationFormPage dataTrips={dataTrips}/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/admin/trips/list" element={ <AdminHomePage/> }/>
                    <Route path="/admin/trips/create" element={<CreateTripPage/>}/>
                    <Route path="/admin/trips/:id" element={<TripDetailsPage/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default RoutesPage;