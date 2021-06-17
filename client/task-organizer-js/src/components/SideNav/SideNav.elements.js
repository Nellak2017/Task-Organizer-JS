import styled from 'styled-components';
import {Container} from '../../globalStyles';
import GridOnIcon from '@material-ui/icons/GridOn';
import {Link} from 'react-router-dom';

export const StyledSideNav = styled.nav`
    background: #101522;
    display: flex;
    flex-direction: column;
    height: 100%; // either this or 100vh
    width: 12rem;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    z-index: 999; // This is the top element

    position: fixed;
    top: 0;
    left: 0;

    border: 1px solid red;
`;

export const SideNavContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: flex-start;

    ${Container}
`;

export const NavLogo = styled(Link)`
    display: flex;
    align-items: center;
    color: white;
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1rem;
`;

export const NavIcon = styled(GridOnIcon)`
    font-size: 2rem !Important;
`;

export const LogoWords = styled.span`
    padding-left: .5rem; 
`;

