import { createGlobalStyle } from 'styled-components';
import waves from '../../assets/body-bg-waves.svg';

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        height: 100%;
        background-image: url(${waves});
        aspect-ratio: 960/300;
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
`;

export default GlobalStyles;
