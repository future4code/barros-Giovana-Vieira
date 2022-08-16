import { useNavigate } from "react-router-dom"
import { CreateTripContainer } from "./style"
import useForm from "../../Hooks/useForm"
import { baseUrl } from "../../Constants/Constants"
import axios from "axios"


const CreateTripPage = ()=>{

    const [setForm, form, onChange] = useForm({name: "", planet: "", date: "", description: "", duration: ""})

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
        axios.post(url, body)
        .then((response)=>{
            console.log(response.data)
        })
        .catch((er)=>{
            console.log(er.response.data.message)
        })
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
            <input name="date" id="date" type="date" value={form.date} onChange={onChange} required/>

            <label htmlFor="description">Description:</label>
            <input name="description" pattern="^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ' ']{50,5000}$" id="description" type="text" value={form.description} onChange={onChange} required/>

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