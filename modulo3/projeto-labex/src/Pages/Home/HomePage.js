import { useNavigate } from "react-router-dom"


const HomePage = ()=>{

    const navigate = useNavigate()

    return(
        <>
        <h1>Home</h1>
        <button onClick={()=>{navigate("/trips/list")}}>Trips List</button>
        <button onClick={()=>{navigate("/login")}}>Administrative Area</button>
        </>
    )
}

export default HomePage;