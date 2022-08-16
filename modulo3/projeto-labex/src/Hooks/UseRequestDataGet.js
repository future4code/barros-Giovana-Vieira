import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"


const useRequestData=(url)=>{

    const [data, setData] = useState(undefined)
    const [isLoading, setIsLoading] = useState(undefined)
    const [error, setError] = useState(undefined)

    useEffect(()=>{
        setIsLoading(true)
        axios.get(url,)
        .then((response)=>{
        setIsLoading(false)
        setData(response.data.trips)
    })
        .catch((er)=>{
        setIsLoading(false)
        setError(er.response.data.message)
        })
    },[])


    return [data, isLoading, error]
}

export default useRequestData;


