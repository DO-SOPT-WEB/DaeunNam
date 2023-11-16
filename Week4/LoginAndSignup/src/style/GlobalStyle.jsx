import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
${reset}

:root {
  --color-bg: #f5f5f5;
  --color-button-bg: #000000;
  --color-light-pink: #FFD2D7;
  --color-accent: #FF1493;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100vw;
  height: 100vh;
  display: flex; 
  justify-content: center; 
  align-items: center;
  background: rgb(219, 221, 223); /* gradient CSS*/
}

button {
    cursor: pointer;
}

* {
    box-sizing: border-box;
}

input {
    padding: 0.28rem;
    border-radius: 0.5rem;
    border: solid;
}

`;


