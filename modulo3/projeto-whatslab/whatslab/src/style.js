import styled from "styled-components";

export const HeaderStyle = styled.header`

    display: flex;
    justify-content: center;
    font-size: 1vw;
    padding: 0.5vw;

    div {
        display: flex;
        align-items: center;
    }

    img {
        width: 2.3vw;
        margin-right: 0.2vw;
    }
`

export const CentroDaPagina = styled.main`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`

export const LateralUm = styled.div`
    background-color: orange;
    height: 91vh;
`

export const Meio = styled.div`
    display: flex;
    flex-direction: column;    
    white-space: nowrap;
    justify-content: end;
    align-items: center;
      


    div {

        ul {
            list-style: none;
            margin: 0 0 2vw 1vw;
            display: grid;
            grid-template-columns: 1fr 1fr;
                        

            div:nth-child(1){
                background-color: green;
            }

            div:nth-child(2){
                background-color: red;
            }

        li {
            span {
                font-weight: bold;
            }
        }
        }
                       
        form {           
            input {
                width: 20vw;
            }

            input:nth-child(1) {
                width: 7vw;
            }

            button {
                padding: 0 0.2vw;
            }
        }
    }   
`

export const LateralDois = styled.div`
    background-color: orange;
      
     
`

export const FooterStyle = styled.footer`
    background-color: DarkGrey;
    margin: 0px;
    width: 100%;
    padding: 0.1vw;
    text-align: center;

    p{
        font-size: 0.8vw;
    }
`

