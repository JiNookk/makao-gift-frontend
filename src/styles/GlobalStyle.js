import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
    }

    html{
        width: 100%;
        height: 100%;
    }

    body{
        width: 100%;
        height: 100%;
        /* padding: 0 19vw; */
    }
`;

export default GlobalStyle;
