import styled from "styled-components";

export const ContainerPrincipal = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`
export const AstroMatch = styled.div`
    display: grid;
    grid-template-rows: 1fr 6fr 1fr

    main {
        display: grid;
        grid-template-rows: 6.5fr 1fr;
    }
`
export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1vw;
   
    img {
        width: 30vw;
        height: 55vh;
        background-color: green;
        margin-bottom: 0.5vw;
    }

    h1{
        margin-bottom: 0.5vw;
        font-size: 2vw;
        span{
            margin-bottom: 0.5vw;
            font-size: 2vw;
        }
    }

    span{
        margin-bottom: 0.5vw;
        font-size: 1vw;
    }
`
export const Botoes = styled.section`
    display: grid;

    div{
        display: flex;
        justify-content: space-around;
    }

    article{
        display: flex;
        justify-content: center;
    }
    
    button{        
        border-style: none;

        img{
            width: 6vw;
            background-color: white;
        }
    }
`
