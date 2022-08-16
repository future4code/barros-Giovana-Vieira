import styled from "styled-components";

export const LoginContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    h1{
        margin-top: 2vw;
        margin-bottom: 2.5vw;
        font-size: 2vw;
    }

    form{
    display: flex;
    flex-direction: column;
    align-items: center;

        label{
            font-size: 1vw;
        }

        input{
            width: 20vw;
            margin-bottom: 2vw;
            height: 2vw;
            margin-top: 1vw;
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