import styled from "styled-components";

export const AdmHomeContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1{
        margin-top: 2vw;
        margin-bottom: 3vw;
        font-size: 2vw;
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
`