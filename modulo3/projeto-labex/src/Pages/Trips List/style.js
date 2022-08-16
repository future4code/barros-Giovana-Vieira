import styled from "styled-components"

export const TripsListContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    h1{
        margin-top: 2vw;
        margin-bottom: 2vw;
        font-size: 2vw;
    }

    button{
        white-space: nowrap;
        border-style: double;
        background-color: white;
        margin: 1vw 5vw;
        width: 10vw;
        padding: 0.3vw;
        white-space: nowrap;
        font-size: 1vw;

    :hover{
        transform: scale(1.2);
        transition: all 0.5s;
    }
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