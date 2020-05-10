import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Overpass", sans-serif;
    -webkit-font-smoothing: antialiased !important;
    background-color: #1c1c1e;
    color: #c9c9c9
  }

  img{
    border-radius: 5px;
    margin-bottom: 20px;
  }

  h1, h2, h3, h4, h5 {
    color: #f9f9f9;
    font-weight:100;
  }

`;
