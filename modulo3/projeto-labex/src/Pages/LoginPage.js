import {useNavigate} from "react-router-dom"


const LoginPage = ()=>{

    const navigate = useNavigate()

    const logIn=()=>{
        navigate("/admin/trips/list")
    }

    return(
        <>
        <h1>Login</h1>
        <input placeholder="E-mail" type="text"/>
        <input placeholder="Password" type="password"/>
        <button onClick={logIn}>Log In</button>
        <button onClick={()=>{navigate(-1)}}>Return</button>
        </>
    )
}

export default LoginPage;