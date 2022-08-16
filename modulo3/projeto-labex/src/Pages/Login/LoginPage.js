import {useNavigate} from "react-router-dom"
import { LoginContainer } from "./style"
import useForm from "../../Hooks/useForm"
import axios from "axios"
import { baseUrl } from "../../Constants/Constants"


const LoginPage = ()=>{

    const navigate = useNavigate()

    const[setForm, form, onChange] = useForm({email: "", password: ""})

    const body = {
        "email": form.email,
        "password": form.password
    }
    
    const logIn=(e)=>{
        e.preventDefault()
        axios.post(`${baseUrl}/login`, body)
        .then((response)=>{
            navigate("/admin/trips/list")
        })
        .catch((er)=>{
            alert(er.response.data.message)
        })
    }

    return(
        <LoginContainer>
            <h1>Login</h1>
                <form onSubmit={logIn}>
                    <label htmlFor="email">E-mail:</label>
                    <input pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" onChange={onChange} name="email" value={form.email} id="email" type="email" required/>
                    
                    <label htmlFor="password">Password:</label>
                    <input onChange={onChange} name="password" value={form.password} id="password" type="password" required/>
                <div>
                    <button type="button" onClick={()=>{navigate(-1)}}>Return</button>
                    <button>Log In</button>
                </div>
                </form>
        </LoginContainer>
    )
}

export default LoginPage;