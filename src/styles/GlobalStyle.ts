import { createGlobalStyle } from "styled-components";

/**
 * Estilos Globais da aplicação.
 */
export const GlobalStyle = createGlobalStyle`

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
 }

 a {
   text-decoration: none;
 }

 :focus {
  outline: none;
 }

 body {
    background: ${ props => props.theme.GRAY_100};
    color: ${ props => props.theme.GRAY_800};
    min-height: 100vh;
    min-width:100vw;
    overflow-x: hidden;
 }

 body, input, textarea, button {
   font-family: 'Roboto', monospace;
   font-weight: 400;
   font-size: 1rem;
 }

`