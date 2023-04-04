import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  a {
    text-decoration: none;
  }
  html,#root,body {
    height: 100%;
    margin: 0;
  }
  body {
    background-color: #ffebb4;
  }
`;
