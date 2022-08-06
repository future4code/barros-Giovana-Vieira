import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-around;
    background-color: white;
    align-items: center;
    text-align: center;
    padding: 1vw;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    margin-bottom: 0.3vw;

    span{
        color: #66CDAA;
        font-size: 2vw;
        font-weight: bold;
    }

    button {
        border-style: none;
        border-radius: 100%;

        :hover {
            transform: scale(1.1);
            transition: all 0.5s;
        }

        img{
            width: 4.5vw;
        }
    }

    p {
        font-size: 1.8vw;
        font-weight: bold;
        span {
            color: #66CDAA;
        }
    }
`