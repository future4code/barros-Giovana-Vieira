import styled from "styled-components";

export const ContainerTelaInicial = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`
export const AstroMatch = styled.div`
    display: grid;
    height: 95%;
    grid-template-rows: 1fr 4fr 1fr;
    margin-top: 0.7vw;
    border: solid 0.2vw #66CDAA;   
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;

    `
export const Card = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.5vw;
    margin-bottom: 2vw;
    border-top: solid 0.2vw #66CDAA;
    border-bottom: solid 0.2vw #66CDAA;
    img {
<<<<<<< HEAD
        width: 20vw;
        height: 45vh;
        margin-bottom: 1vw;
        border-radius: 2vw;
=======
        width: 25vw;
        height: 50vh;
        background-color: green;
        margin-bottom: 0.5vw;
>>>>>>> 711f0c08454249d03ab099d259a67e26b3418947
    }

    h1{
        margin-bottom: 0.5vw;
        font-size: 2vw;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        
        span{
            font-size: 2vw;
        }
    }

    span{
        font-size: 1vw;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        margin-bottom: 1vw;
    }
`
export const Botoes = styled.section`
    display: flex;
    justify-content: space-around;
       
    button{        
        border-style: none;
        border-radius: 100%;
        background-color: white;
        
        :hover {
            transform: scale(1.1);
            transition: all 0.5s;
  } 

        img{
            width: 4.5vw;
<<<<<<< HEAD
=======
            background-color: white;
>>>>>>> 711f0c08454249d03ab099d259a67e26b3418947
        }
    }
`

export const BotaoDelete = styled.article`
    display: grid;
    justify-content: center;
    
    button{
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: 0.8vw;
        background-color: white;
        padding-left: 0.5vw;
        padding-right: 0.5vw;
        padding-top: 0.2vw;
        padding-bottom: 0.2vw;
        border: solid 0.2vw #66CDAA;
        border-radius: 10%;
        margin-top: 0.7vw;
        margin-bottom: 0.9vw;

        :hover {
            transform: scale(1.1);
            transition: all 0.5s;
        }
    }
`

export const ContainerTelaMatches = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`
export const MatchesContainer = styled.section`
    display: grid;
    grid-template-rows: 1fr 5fr 1fr;
    margin-top: 0.7vw;
    border: solid 0.2vw #66CDAA;   
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;

    main {
        border-top: solid 0.2vw #66CDAA;
        border-bottom: solid 0.2vw #66CDAA; 

        ul{
            list-style: none;
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
    }
`

export const CardMatch = styled.div`
    display: flex;
    flex-direction: column;
    width: 15vw;
    align-items: center;
    justify-content: space-evenly;
    padding: 1vw;
    
    p{
        font-size: 1.3vw;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }

    img{
        width: 6vw;
        height: 5vw;
        margin: 0.5vw 1vw;
        border-radius: 10%;
    }
`