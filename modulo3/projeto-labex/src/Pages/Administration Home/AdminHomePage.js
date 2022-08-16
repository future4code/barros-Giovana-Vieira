import { useNavigate } from "react-router-dom"
import { AdmHomeContainer } from "./style.js"


const AdminHomePage = ()=>{

    const navigate = useNavigate()

    return(
        <AdmHomeContainer>
            <h1>Administration</h1>
            <div>
                <button onClick={()=>{navigate(-1)}}>Logout</button>
                <button onClick={()=>{navigate("/admin/trips/create")}}>Create Trip</button>
            </div>
        </AdmHomeContainer>
        
    )
}

export default AdminHomePage;