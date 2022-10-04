import styled from "styled-components";


export const HomeContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    h1{
        margin-top: 2vw;
        margin-bottom: 4vw;
        font-size: 3.5vw;
        backdrop-filter: blur(1px);
    }

    p{
        font-size: 1.5vw;
        margin-bottom: 4vw;
    }

`

export const Button = styled.button`
    white-space: nowrap;
    border: solid 0.3vw white;
    background-color: transparent;
    color: white;
    text-align: center;
    border-radius: 25%;
    margin: 0 7vw;
    max-width: 25vw;
    padding:1.5vw;
    white-space: nowrap;
    font-size: 2vw;

    :hover{
        transform: scale(1.2);
        transition: all 0.5s;
    }
`