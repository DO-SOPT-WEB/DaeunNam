import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --header-background-color: #739072;
    --entire-background-color: #ECE3CE;
    --button-background-color: #ECE3CE;
    --hover-color: #3A4D39;
    --section-background-color: #3A4D39;
    --font-color: #FFFBEB;
    --selected-color: #192118;

  }

  body {
    margin: 0;
    place-items: center;
    min-width: 320px;
    min-height: 100vh;
    background-color: var(--entire-background-color);
  }

  img {
    display: block;
    margin: auto;
    width: 20rem;
    height: auto;
  }

  button {
    border-radius: 1rem;
    border: 2px solid transparent;
    padding: 0.5em 1.0em;
    font-size: 1em;
    font-family: inherit;
    margin: 2rem 0.3rem;
    cursor: pointer;
    transition: border-color 0.25s;
    background-color: var(--button-background-color);
  }

  button:hover {
    border-color: var(--button-background-color);
    background-color: var(--header-background-color);
  }

  button:disabled {
    opacity: 0.5;
  }

  input[type="checkbox"] {
    display: none;
  }

  label {
    background-color: var(--entire-background-color);
    border-radius: 1rem;
    cursor: pointer;
    display: inline-block;
    color: var(--section-background-color);
    padding: 5rem;
    margin: 0.5rem;
    font-size: 1.5rem;
    font-weight: bold;
    border: 2px solid transparent;
  }

  label:hover {
    background-color: var(--header-background-color);
    color: var(--font-color);
    border: 2px solid var(--font-color);
  }

  label.selected {
    background-color: var(--header-background-color);
    border: 2px solid var(--selected-color);
    color: var(--font-color);
  }
`;

export default GlobalStyle;
