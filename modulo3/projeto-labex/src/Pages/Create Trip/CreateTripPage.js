import { useNavigate } from "react-router-dom"
import { CreateTripContainer } from "./style"
import useForm from "../../Hooks/useForm"
import { baseUrl } from "../../Constants/Constants"
import axios from "axios"
import useProtectPage from "../../Hooks/useProtectPage"


const CreateTripPage = ({reload, setReload})=>{

    useProtectPage()

    const date = new Date("2022-08-22");
    const year = date.getFullYear();
    const day = date.getDate();
    const month = date.getMonth() + 1;
  
    const adaptedMonth=()=>{
        if(month<10){
            return `0${month}`
        }
    }

    const [form, onChange, clear] = useForm({name: "", planet: "", date: "", description: "", duration: ""})

    const navigate = useNavigate()

    const body = {
        "name": form.name,
        "planet": form.planet,
        "date": form.date,
        "description": form.description,
        "durationInDays": form.duration
    }

    const url = `${baseUrl}/trips`

    const createTrip=(e)=>{
        e.preventDefault()
        axios.post(url, body, {headers:{
            auth: localStorage.getItem("token")
        }
        })
        .then((response)=>{
            alert("Trip create sucessfull!!")
            setReload(!reload)
        })
        .catch((er)=>{
            alert(er.response.data.message)
        })
        clear()
    }

    return(
        <CreateTripContainer>
        <h1>Create Trip</h1>
        <form onSubmit={createTrip}>

            <label htmlFor="name">Name:</label>
            <input name="name" pattern="^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ' ']{5,100}$" id="name" value={form.name} onChange={onChange} type="text" required/>

            <label htmlFor="planet">Choose a Planet:</label>
            <select name="planet" id="planet" value={form.planet} onChange={onChange} required>
                <option>Choose a Planet</option>
                <option value="Neptune">Neptune</option>
                <option value="Mercury">Mercury</option>
                <option value="Venus">Venus</option>
                <option value="Earth">Earth</option>
                <option value="Mars">Mars</option>
                <option value="Saturn">Saturn</option>
                <option value="Uranus">Uranus</option>
                <option value="Jupiter">Jupiter</option>
            </select>           

            <label htmlFor="date">Date:</label>
            <input type="date" value={form.date} onChange={onChange} maxLength="10" name="date" pattern="[0-9]{2}\/[0-9]{2}\/[0-9]{4}$" min={`${year}-${adaptedMonth()}-${day}`} max="9999-12-31" required/>

            <label htmlFor="description">Description:</label>
            <input name="description" pattern="^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ' '!.,?;]{50,5000}$" id="description" type="text" value={form.description} onChange={onChange} required/>

            <label htmlFor="duration">Duration in Days:</label>
            <input name="duration" min={50} id="duration" type="number" value={form.duration} onChange={onChange} required/>

            <div>
                <button type="button" onClick={()=>{navigate(-1)}}>Return</button>
                <button>Create</button>
            </div>
        </form>


        </CreateTripContainer>
    )
}

export default CreateTripPage;