import styled from "styled-components"

export const Application = styled.section`
    display: flex;
    flex-direction: column;
    text-align: center;
    
    h1{
        margin-top: 2vw;
        margin-bottom: 2vw;
        font-size: 2vw;
    }

    form{
        display: flex;
        flex-direction: column;
        align-items: center;

        label{
            font-size: 1vw;
        }

        select{
            margin: 1vw 0;
        }

        input {
            margin: 1vw 0;
            min-width: 15vw;
            max-width: 40vw;
        }

        div{ 
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
        }
    }

`