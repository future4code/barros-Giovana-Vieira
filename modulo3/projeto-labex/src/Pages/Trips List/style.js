import styled from "styled-components"

export const TripsListContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    h1{
        margin: 1.5vw 0;
    }

    button{
        margin: 0.5vw 5vw;
        width: 6vw;
        white-space: nowrap;
        border-style: double;
        background-color: white;
    }
`

export const Trip = styled.li`
    display: flex;
    flex-direction: column;
    border: solid 1px;
    padding: 0.3vw;
    margin: 1vw 0;

    span{
        margin: 0.4vw;
    }

    h3{
        margin-top: 0.2vw;
        margin-bottom: 0.3vw;
    }
`