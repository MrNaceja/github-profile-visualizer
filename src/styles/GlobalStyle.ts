import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
 }

 body {
    background: ${ props => props.theme.GRAY_100};
    color: ${ props => props.theme.GRAY_800};
    min-height: 100vh;
    min-width:100vw;
 }

 body, input, textarea, button {
   font-family: 'Roboto', monospace;
   font-weight: 400;
   font-size: 1rem;
 }

`