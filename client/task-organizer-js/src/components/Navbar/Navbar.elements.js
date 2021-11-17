import styled from 'styled-components';
import {Container} from '../../globalStyles';
import GridOnIcon from '@material-ui/icons/GridOn';
import {Link} from 'react-router-dom';

export const Nav = styled.nav`
    background: #101522;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 999;
`;

export const NavbarContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    height: 80px;

    ${Container}
`;

// This completely overrides the material theme, you must find a way to
// be able to use the theme along with the styled component as well
export const NavLogo = styled(Link)`
    color: white;
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1rem;
    display: flex;
    align-items: center;
`;

export const NavIcon = styled(GridOnIcon)`
    margin-right: .5;
    font-size: 3rem !Important; 
`;

export const LogoWords = styled.span`
    width: 10px;
    padding-left: 5px;
`;

export const MobileIcon = styled.div`

    display: none;

    @media screen and (max-width:960px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }

`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 80vh;
        position: absolute;
        top: 80px;
        left: ${({click}) => (click ? 0 : '-100%')};
        opacity: 1;
        transition: all .5s ease;
        background: #101522;
        overflow: scroll;
        -ms-overflow-style: none; /* for Internet Explorer, Edge */
        scrollbar-width: none; /* for Firefox */

        ::-webkit-scrollbar {
            display: none; /* for Chrome, Safari, and Opera */
        }
    }
`;

export const NavItem = styled.li`
    height: 80px;
    border-bottom: 2px solid transparent;
    &:hover {
        border-bottom: 2px solid #4b59f7;
    }

    @media screen and (max-width: 960px) {
        width: 100%;

        &:hover{
            border: none;
        }
    }
`;

export const NavLinks = styled(Link)`
    color:#fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: .5rem 1rem;
    height: 100%;

    @media screen and (max-width: 960px) {
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;

        &:hover {
            color: #4b59f7;
            transition: all .3s ease;
        }
    }

`;

export const NavItemBtn = styled.li`
    @media screen and (max-width:960px){
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 120px;
    }
`;

export const NavBtnLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: 8px 16px;
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
`;