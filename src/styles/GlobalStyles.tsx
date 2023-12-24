import {createGlobalStyle} from "styled-components";
//import {Theme} from "./Theme.styled";

export const GlobalStyle = createGlobalStyle`

  /* CSS */
  //@import url(https://cdn.jsdelivr.net/npm/firacode@6.2.0/distr/fira_code.css);

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family:  'Poppins', sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: rebeccapurple;
  }

  // a {
  //   text-decoration: none;
  //  
  //  
  //   &:hover {
  //     
  //   }
  // }

  ul,
  li,
  ol {
    list-style: none;
  }

  h2 {
    // 
    // text-shadow: 0px 0px 8px rgba(247, 255, 209, 0.6);
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 30px;
  }

  h3 {
    font-size: 26px;
    font-weight: 400;
  }

  h4 {
    font-size: 18px;
    font-weight: 400;
    line-height: 1.2;
    text-transform: capitalize;
  }

  h5 {

    font-size: 18px;
    font-weight: 400;
  }

  button {
    cursor: pointer;
    border: none;
    background-color: unset;
  }

`