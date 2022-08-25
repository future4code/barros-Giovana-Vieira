import styled from "styled-components";

export const TripDetailsPageContainer= styled.section`
    
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    text-align: center;

    h1{
        margin-top: 2vw;
        margin-bottom: 2vw;
        font-size: 2vw;
    }

`

export const TripDetails = styled.ul`
    display: flex;
    flex-direction: column;
    border: solid 1px;
    padding: 0.3vw;
    margin: 0.2vw 0;
    background-color: transparent;
    backdrop-filter: blur(40px);
    font-size: 0.9vw;
    text-align: center;
    list-style: none;
    max-width: 40vw;

    h2{
        font-size: 1.5vw;
    }

    li{
        margin: 0.5vw 0.7vw;
    }
`

export const ListOfCandidates = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 1px;
    padding: 0.3vw;
    margin: 0.6vw 0;
    background-color: transparent;
    backdrop-filter: blur(40px);
    font-size: 0.9vw;
    text-align: center;
    list-style: none;
    max-width: 40vw;

    h3{
        margin: 0.2vw 0;
        font-size: 1.4vw;
    }

    p{
        margin: 0.3vw 0;
        width: 30vw;
        overflow-wrap: break-word;  
        word-wrap: break-word; 
        word-break: break-word;
    }

    div{ 
        button{
            white-space: nowrap;
            border: solid 0.2vw white;
            background-color: transparent;
            color: white;
            text-align: center;
            border-radius: 25%;
            margin-right: 2vw;
            margin-left: 2vw;
            margin-bottom: 1vw;
            margin-top: 1vw;
            max-width: 7vw;
            padding:0.5vw;
            white-space: nowrap;
            font-size: 0.8vw;
            :hover{
                transform: scale(1.2);
                transition: all 0.5s;
            }
        }
    }      

`
export const Candidate = styled.li`
    display: flex;
    flex-direction: column;
    margin: 0.7vw;
`

export const ApprovedCandidates = styled.div`
    display: flex;
    flex-direction: column;
    border: solid 1px;
    padding: 0.5vw;
    margin: 0.4vw 0;
    background-color: transparent;
    backdrop-filter: blur(40px);
    font-size: 0.8vw;
    text-align: center;
    list-style: none;

    h2{
        margin: 0.2vw 0;
    }

`

export const ApprovedContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const CandidatesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const TripDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ButtonReturn = styled.div`
    
    button{
        white-space: nowrap;
        border: solid 0.3vw white;
        background-color: transparent;
        color: white;
        text-align: center;
        border-radius: 25%;
        margin-right: 7vw;
        margin-left: 7vw;
        margin-bottom: 1vw;
        margin-top: 8vw;
        padding:0.6vw;
        white-space: nowrap;
        font-size: 1.5vw;
        :hover{
                transform: scale(1.2);
                transition: all 0.5s;
        }
    }           
`