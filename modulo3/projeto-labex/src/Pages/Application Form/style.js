import styled from "styled-components"

export const Application = styled.section`
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
            width: 25vw;
        }        
        div{        
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
        }
    }

`