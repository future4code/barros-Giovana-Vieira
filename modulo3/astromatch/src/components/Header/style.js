import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    border: solid 0.3vw lightblue;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    padding: 1vw;


    button {
        img{
            width: 3vw;
            background-color: white;
        }
    }

    p {
        font-size: 1.8vw;
        font-weight: bold;
        span {
            color: green;
        }
    }
`