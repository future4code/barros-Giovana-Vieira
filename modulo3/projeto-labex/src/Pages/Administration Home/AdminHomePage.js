import { useNavigate } from "react-router-dom"


const AdminHomePage = ()=>{

    const navigate = useNavigate()

    return(
        <>
        <h1>Administration</h1>
        <button onClick={()=>{navigate(-1)}}>Return</button>
        <button onClick={()=>{navigate("/admin/trips/create")}}>Create Trip</button>
        </>
    )
}

export default AdminHomePage;