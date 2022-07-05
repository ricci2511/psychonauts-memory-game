import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        word-wrap: break-word;
    }

    /* makes footer stay at the bottom */
    html {
        position: relative;
        min-height: 100%;
    }

    body {
        background: ${({ theme }) => theme.colors.bodyFallback};
        background: ${({ theme }) => theme.colors.body};
        font-family: 'Roboto', sans-serif;
    }

    img {
        width: 100%;
        height: 100%;
        display: block;
    }

    body::-webkit-scrollbar {
        width: 1em;
        background-color: darkgrey;
    }
    
    body::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    }
    
    body::-webkit-scrollbar-thumb {
        background-color: rgba(0,0,0,0.3);
        outline: 1px solid slategrey;
    }
`;

export default GlobalStyles;
