import { createGlobalStyle } from "styled-components";
import darkBg from './img/background/bg-dark.svg';
import lightBg from './img/background/bg-light.svg';
const GlobalStyle = createGlobalStyle`
    :root {
        --primary-color-dark: #313e51;
        --background-dark: #2D3949;
        --primary-color-light: white;
        --background-light: #EDF1F9;
        --secondary-color: #3c4d67;
        --primary-action-color: #a629f6;
        --primary-text-color: #faffff;
        --secondary-text-color: #8696ae;
        --html-background: #FFF1E9;
        --css-background: #E0FDEF;
        --javascript-background: #EBF0FF;
        --accessibility-background: #F6E7FF;
        --correct-color: #26D782;
        --wrong-color: #EE5454;
        font-family: 'Rubik', sans-serif;
        overflow-x: hidden;
    }

    * {
        box-sizing: border-box;   
    }

    body {
        background: ${props => props.theme.theme.backgroundColor};
        overflow-x: hidden;
        overflow-y: auto;
    }

    #root {
        width: 100dvw;
        min-height: 100dvh;
        height: fit-content;  
        overflow-y: auto;
    }

    #root::before {
        position: fixed;
        z-index: -1;
        box-sizing: border-box;
        content: '';
        background-image: url(${props => props.theme.theme.name === 'dark' ? darkBg : lightBg});
        background-repeat: no-repeat;
        width: 100%;
        height: 100%;
        rotate: 45deg;
        top: 32%;
        left: -9%;
    }

    #root::after {
        position: fixed;
        z-index: -1;
        box-sizing: border-box;
        content: '';
        background-image: url(${props => props.theme.theme.name === 'dark' ? darkBg : lightBg});
        background-repeat: no-repeat;
        width: 100%;
        height: 100%;
        rotate: 45deg;
        bottom: 36.5%;
        right: -9%;
        rotate: 230deg;
    }

    @media (max-width: 1290px) {
        #root::before {
            z-index: -1;
            background-image: url(${props => props.theme.theme.name === 'dark' ? darkBg : lightBg});
            background-repeat: no-repeat;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            border-radius: 0;
            border: none;
            clip-path: none;
            rotate: 0deg;
        }

        #root::after {
            display: none;
        }
    }


    @media (max-width: 1050px) and (min-width: 500px) {
        :root {
            font-size: 25px;
        }

        #root::before {
            z-index: -1;
            background-image: url(${props => props.theme.theme.name === 'dark' ? darkBg : lightBg});
            background-repeat: no-repeat;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            border-radius: 0;
            border: none;
            clip-path: none;
            rotate: 0deg;
        }

        #root::after {
            display: none;
        }
    }

    @media (max-width: 500px) {
    
        #root::before {
            background-image: url(${props => props.theme.theme.name === 'dark'? darkBg : lightBg});
            background-repeat: no-repeat;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            border-radius: 0;
            border: none;
            clip-path: none;
            rotate: 0deg;
        }

        #root::after {
            display: none;
        }
    }

    #root .html {
        background: var(--html-background);
    }

    #root .css {
        background: var(--css-background);
    }

    #root .javascript {
        background: var(--javascript-background);
    }

    #root .accessibility {
        background: var(--accessibility-background)
    }

`

export default GlobalStyle;
