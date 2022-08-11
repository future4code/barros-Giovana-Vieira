import styled from "styled-components"

export const Application = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    
    h1{
        margin: 2vw 0;
    }

    form{
        display: flex;
        flex-direction: column;

        select{
            margin: 1vw 0;
        }

        input {
            margin: 1vw 0;
        }
        
    }

    div{
        display: flex;
        
        button{
            margin: 0 2vw;
        }
    }
`