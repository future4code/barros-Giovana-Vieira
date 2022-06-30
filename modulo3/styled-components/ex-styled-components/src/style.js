import styled from "styled-components";



export const HeaderStyle = styled.header`

    display: flex;
    justify-content: center;
    font-size: 1vw;
    padding: 0;

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
    display: flex;   
`
export const LateralUm = styled.div`
    background-color: orange;
    padding: 5vw;    
    width: 100%;
`

export const Meio = styled.div`
    display: flex;   
    width: 100%;
    white-space: nowrap;
      
    section {

        display: flex;
        padding: 40vw 30vw 0 0;
        margin: 0 0 1vw 1vw;

        div{
        display: flex;
        margin: 0 0.4vw;        

        label {
            margin: 0 0.5vw;            
        }
        div {
            input {
                width: 20vw;
            }
        }
        }
    }
`

export const LateralDois = styled.div`
    background-color: orange;
    padding: 5vw;    
    width: 100%;
`

export const FooterStyle = styled.footer`
    background-color: DarkGrey;
    margin: 0px;
    position: fixed;
    width: 100%;
    padding: 0.1vw;
    text-align: center;

    p{
            padding: 0;
            margin: 0;
            font-size: 0.8vw;
    }
`

