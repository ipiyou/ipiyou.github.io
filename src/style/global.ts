import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  button {
    border: 0;
    outline: 0;
  }
  ul {
    padding: 0;
    margin: 0;
  }
  html,#root,body {
    height: 100%;
    margin: 0;
  }
  * {
    box-sizing:border-box;
  }
`;
