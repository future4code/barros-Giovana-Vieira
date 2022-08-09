import { BrowserRouter, Routes, Route } from "react-router-dom"
import ApplicationFormPage from "./Pages/ApplicationFormPage";
import HomePage from "./Pages/HomePage";
import TripsListPage from "./Pages/TripsListPage";
import LoginPage from "./Pages/LoginPage";
import AdminHomePage from "./Pages/AdminHomePage";
import CreateTripPage from "./Pages/CreateTripPage";
import TripDetailsPage from "./Pages/TripDetailsPage";


const RoutesPage = ()=>{
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<HomePage/>}/>
                    <Route path="/trips/list" element={<TripsListPage/>}/>
                    <Route path="/trips/application" element={<ApplicationFormPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/admin/trips/list" element={<AdminHomePage/>}/>
                    <Route path="/admin/trips/create" element={<CreateTripPage/>}/>
                    <Route path="/admin/trips/:id" element={<TripDetailsPage/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default RoutesPage;