import { useNavigate, useParams } from "react-router-dom"
import useProtectPage from "../../Hooks/useProtectPage"
import { ApprovedCandidates, ButtonReturn, ApprovedContainer, Candidate, CandidatesContainer, ListOfCandidates, TripDetailsContainer, TripDetailsPageContainer } from "./style"
import axios from "axios"
import { baseUrl } from "../../Constants/Constants"
import { useEffect, useState } from "react"
import { TripDetails } from "./style"


const TripDetailsPage = ({reload, setReload})=>{

    useProtectPage()

    const pathParams = useParams()
    const navigate = useNavigate()
    const [tripDetails, setTripDetails] = useState({})
    const [isLoading, setIsLoading] = useState(undefined)
    const [error, setError] = useState(undefined)

    const approve=(candidate)=>{
        axios.put(`${baseUrl}/trips/${pathParams.id}/candidates/${candidate.id}/decide`, {
            "approve": true
        }, {headers:{
            auth: localStorage.getItem("token")
        }
        })
        .then((response)=>{
            setReload(!reload)
        })
        .catch((er)=>{
            alert(er.response.data.message)
        })
    }

    const reprove=(candidate)=>{
        axios.put(`${baseUrl}/trips/${pathParams.id}/candidates/${candidate.id}/decide`, {
            "approve": false
        }, {headers:{
            auth: localStorage.getItem("token")
        }
        })
        .then((response)=>{
            setReload(!reload)
        })
        .catch((er)=>{
            alert(er.response.data.message)
        })
    }

    
    useEffect(()=>{
        setIsLoading(true)
        axios.get(`${baseUrl}/trip/${pathParams.id}`, {headers:{
            auth: localStorage.getItem("token")
        }
        })
        .then((response)=>{       
            setIsLoading(false)     
            setTripDetails(response.data.trip)
        })
        .catch((er)=>{
            setIsLoading(false)
            setError(er.response.data.message)
        })
    }, [reload])

    const candidates = tripDetails.candidates&&tripDetails.candidates.map((candidate, index)=>{
        return <ListOfCandidates key={index}>
            <Candidate>
                <h3>{candidate.name}</h3>
                <p>Profession: {candidate.profession}</p>
                <p>Age: {candidate.age}</p>
                <p>Country: {candidate.country}</p>
                <p>Application Text: {candidate.applicationText}</p>
            </Candidate>
            <div>
                <button onClick={()=>{approve(candidate)}}>Approve</button>
                <button onClick={()=>{reprove(candidate)}}>Reprove</button>
            </div>
        </ListOfCandidates>
    })

    const approvedCandidates = tripDetails.candidates&&tripDetails.approved.map((candidate, index)=>{
        return <ApprovedCandidates key={index}>
            <h2>{candidate.name}</h2>            
        </ApprovedCandidates>
    })
    
    return(
        <TripDetailsPageContainer>
            <TripDetailsContainer>
                <h1>Trip Details</h1>

                {isLoading&&"...Carregando"}

                {!isLoading&&tripDetails&&<TripDetails>
                    <h2><li>{tripDetails.name}</li></h2>
                    <li>{tripDetails.description}</li>
                    <li>Destiny: {tripDetails.planet}</li>
                    <li>Duration in Days: {tripDetails.durationInDays}</li>
                    <li>Date: {tripDetails.date}</li>
                </TripDetails>}
                    
                {!isLoading&&!tripDetails&&error}
            </TripDetailsContainer>

            <ApprovedContainer>
                <h1>List of Approved Candidates</h1>     

                {approvedCandidates}     
            </ApprovedContainer>


            <CandidatesContainer>
                <h1>List of Candidates</h1>

                {candidates}
            </CandidatesContainer>
            <ButtonReturn>
                <button onClick={()=>{navigate(-1)}}>Return</button>
            </ButtonReturn>
        </TripDetailsPageContainer>
        
    )
}

export default TripDetailsPage;