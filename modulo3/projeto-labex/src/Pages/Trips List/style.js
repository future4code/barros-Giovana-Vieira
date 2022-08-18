import styled from "styled-components"

export const TripsListContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    h1{
        margin-top: 2vw;
        margin-bottom: 1vw;
        font-size: 2vw;
    }
    
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
        margin-top: 1vw;
        max-width: 10vw;
        padding:0.6vw;
        white-space: nowrap;
        font-size: 1vw;
        :hover{
            transform: scale(1.2);
            transition: all 0.5s;
        }
    }     
`

export const TripPublic = styled.li`
    display: flex;
    flex-direction: column;
    border: solid 1px;
    padding: 0.3vw;
    margin: 1vw 0;
    background-color: transparent;
    backdrop-filter: blur(40px);
    font-size: 0.8vw;
    text-align: center;

    span{
        margin: 0.4vw;
    }

    h3{
        margin-top: 0.2vw;
        margin-bottom: 0.3vw;
        font-size: 1.2vw;
    }
`