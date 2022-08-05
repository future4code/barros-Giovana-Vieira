import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    padding: 1vw;


    button {
        border-style: none;
        img{
            width: 4.5vw;
            background-color: white;
        }
    }

    p {
        font-size: 1.8vw;
        font-weight: bold;
        span {
            color: #0ABAB5;
        }
    }
`