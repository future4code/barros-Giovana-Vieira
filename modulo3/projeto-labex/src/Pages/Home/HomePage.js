import { useNavigate } from "react-router-dom"
import { Button, HomeContainer } from "./style"


const HomePage = ()=>{

    const navigate = useNavigate()

    return(
        <HomeContainer>

            <h1>LabeX</h1>
            <div>
                <Button onClick={()=>{navigate("/trips/list")}}>Trips List</Button>
                <Button onClick={()=>{navigate("/login")}}>Administrative Area</Button>
            </div>
        
        </HomeContainer>
    )
}

export default HomePage;