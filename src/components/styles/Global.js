import { createGlobalStyle } from 'styled-components';
import waves from '../../assets/body-bg-waves.svg';

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        position: relative;
        min-height: 100vh;
        background-image: url(${waves});
        background-repeat: no-repeat;
        background-position: top;
        background-size: cover;
        background-attachment: fixed;
        font-family: 'Roboto', sans-serif;
    }

    img {
        max-width: 100%;
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
