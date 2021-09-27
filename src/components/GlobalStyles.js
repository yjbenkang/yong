import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration:none;
        color: #4A8DF4;
    }
    *{
        box-sizing:border-box;
    }
    body{
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        padding-top: 250px;
        display:flex;
        flex-direction: column;
        justify-content:center;
        align-items:center;
    }
    h1 {
      text-align: center;
      font-size:25px;
      margin-bottom:30px;
    }
`;

export default globalStyles;