import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro', sans-serif;
}

a {
    text-decoration: none;
}

body {
    padding: 0;
    margin: 0;
    overflow: visible;
    background-color: ${props => props.theme.body};//rgba(16,21,34,1);
    color: ${props => props.theme.fontColor};
}

nav {
    color: ${props => props.theme.fontColor};
    background-color: ${props => props.theme.nav};
}

p, input, button, li, a, span {
    color: ${props => props.theme.fontColor};
}

.inheritBorder {
    border-color: ${props => props.theme.fontColor};
}

.icon {
    padding: 0 !important;
    margin: 0 !important;
    color: ${props => props.theme.fontColor};
}

.icon:hover {
        transition: 350ms;
        color: #1a83ff !important;
        cursor: pointer;
}

.closeIcon {
    padding: 0 !important;
    margin: 0 !important;
}

.closeIcon:hover {
    transition: 350ms;
    color: rgba(207,45,6) !important;
    cursor: pointer;
}

`;


export const Container = styled.div`
    z-index: 1000;
    width: 100%;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 50px;
    padding-left: 50px;

    @media screen and (max-width: 991px){
        padding-right: 30px;
        padding-left: 30px;
    }
`;

export const Button = styled.button`
    border-radius: 4px;
    background: ${({ primary }) => (primary ? '#4B59F7' : '#0467FB')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
    color: #fff;
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;

    &:hover {
        transition: all .3s ease-out;
        background: #fff;
        background: ${({ primary }) => (primary ? '#0467FB' : '#4B59F7')};
    }
    @media screen and (max-width: 960px){
        width: 100%;
    }
`;

export default GlobalStyle;