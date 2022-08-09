import { useNavigate } from "react-router-dom"


const CreateTripPage = ()=>{

    const navigate = useNavigate()

    return(
        <>
        <h1>Create Trip</h1>
        <form>

            <input required placeholder="Name" type="text"/>

            <select>
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

            <input required placeholder="Date" type="date"/>

            <input required placeholder="Description" type="text"/>

            <input required placeholder="Duration in Days" type="number"/>

        </form>

        <button onClick={()=>{navigate(-1)}}>Return</button>
        <button>Create</button>
        </>
    )
}

export default CreateTripPage;