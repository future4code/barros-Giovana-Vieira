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
        p {

            border: solid 1px gray;
            border-radius: 2vw;
            padding: 0.7vw;
            margin: 1vw;
            font-size: 0.8vw;
            white-space: normal;
            display: flex;
            flex-direction: column;
            

            span {
                font-weight: bold;
                font-size: 0.8vw;
                text-align: left;
            }
        }
        }
                       
        form {           
            input {
                width: 20vw;
                padding: 0.3vw;
                border: solid 1px grey;
            }

            input:nth-child(1) {
                width: 7vw;
            }

            button {
                padding: 0.3vw;
                border: solid 1px grey;
                font-weight: bold;
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
export const MinhaMensagem = styled.div`
    text-align: right;
`
export const MensagemRemetente = styled.div`
    text-align: left;
`
