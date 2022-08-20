import { createGlobalStyle } from "styled-components";
import space from "../src/Images/space.jpg"

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }
  body{
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    background-image: url(${space});
    color: white;
    background-size: cover; 
  }
  button{
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    backdrop-filter: blur(1px);
  }
  option{
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  }
`