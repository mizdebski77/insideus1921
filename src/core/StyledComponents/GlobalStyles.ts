import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    padding:0;
    margin: 0;
    box-sizing: border-box;
}

    body {
        font-family: "Kaisei Tokumin", serif;
        background: radial-gradient(circle, rgba(246,246,246,1) 50%, rgba(255,236,217,0.6) 100%);
    }
`;
