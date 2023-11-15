import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
${reset}

#root, body, html {
    padding: 3rem;
    margin: 50rem 50rem;
    width:100%;
    height: 100vh;
    margin: 0 auto;
    font-family: Arial, Helvetica, sans-serif;
}

html {
    font-size: 62.5%;
}

button {
    cursor: pointer;
}

* {
    box-sizing: border-box;
}`;


