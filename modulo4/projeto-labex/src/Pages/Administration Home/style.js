import styled from "styled-components";

export const AdmHomeContainer = styled.section`
    display: grid;
    grid-template-rows: 8% 94%;
    text-align: center;

    article{
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-content: center;
        align-items: center;
    }

    ul{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1vw;
        margin-left: 2vw;
    }

    h1{
        margin-top: 2vw;
        margin-bottom: 5vw;
        font-size: 2vw;
    }

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
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
    }           
`

export const TripPrivate = styled.li`
    display: grid;
    grid-template-columns: 1fr 1fr;
    border: solid 1px;
    margin: 1vw 0;
    background-color: transparent;
    backdrop-filter: blur(40px);
    font-size: 0.8vw;
    text-align: center;
    padding: 1vw 1vw;
    max-height: 30vw;
    width: 22vw;
    align-items: center;

    h2{
        margin-top: 0.5vw;
        margin-bottom: 2vw;
        font-size: 1.3vw;
        
    }

    div{ 
        button{
            white-space: nowrap;
            border: solid 0.2vw white;
            background-color: transparent;
            color: white;
            text-align: center;
            border-radius: 25%;
            margin-right: 0.5vw;
            margin-left: 1vw;
            margin-bottom: 1vw;
            margin-top: 1vw;
            max-width: 7vw;
            padding:0.4vw;
            white-space: nowrap;
            font-size: 0.8vw;
            :hover{
                transform: scale(1.2);
                transition: all 0.5s;
            }
        }
    }      
`