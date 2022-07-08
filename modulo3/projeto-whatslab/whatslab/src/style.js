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
    display: flex;   
`
export const LateralUm = styled.div`
    background-color: orange;
    padding: 5vw;    
    width: 100%;
`

export const Meio = styled.div`
    display: flex;   
    width: 50vw;
    white-space: nowrap;
    padding: 0.5vw;
      
    section {
        display: flex;
        padding-top: 100%;
        justify-content: center;
        width: 50vw;
        margin-left: 0.2vw;
        margin-bottom: 0.3vw;

        
        display: flex;       

        input {
            width: 10vw;
        }
     
        button {
            padding: 0 0.2vw;
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
    width: 100%;
    padding: 0.1vw;
    text-align: center;

    p{
        font-size: 0.8vw;
    }
`

