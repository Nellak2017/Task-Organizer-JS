import styled from 'styled-components';
import GridOnIcon from '@material-ui/icons/GridOn';
import {Link} from 'react-router-dom';

// This is the horizontal nav bar
export const OrganizerMainNav = styled.nav`
    background-color: rgba(34,39,46,1);
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #f5f5f5;
    border-radius: 1rem;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom: 1px solid rgba(68,76,86,.5);
`;

export const OrganizerMainNavElementContainer = styled.ul`
    display: flex;
    justify-content: start;
    align-items: center;
    height: 80px;
    background: none;
`;

export const OrganizerMainNavElement = styled.li`
    display: flex;
    justify-content: start;
    align-items: center;
    padding: .5rem 0px .5rem 1.4rem;
    list-style: none;
    height: 100%;
    color: white;
`;

export const TabName = styled.span`
    margin-left: 2.5rem;
    font-size: 1.5rem;
    background: none;
    color: #f5f5f5;
    padding-top: .5rem;
    margin-bottom: 1rem; 
    font-size: 2rem;

    &.expanded{
        transition-timing-function: linear; 
        transition: 450ms;
        margin-left: 11rem;
    }

    &.collapsed{
        transition-timing-function: linear; 
        transition: 350ms;
        margin-left: 2rem;
    }
`;

export const MenuBars = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    background: none;
    color: #f5f5f5 !Important;
    

    & .icon:hover {
        transition: 350ms;
        color: #1a83ff !Important;
    }
`;

// This is the container for the logo and the logo text
export const NavLogo = styled(Link)`
    color: white;
    background-color: rgba(34,39,46,1);
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1rem;
    display: flex;
    align-items: center;
    border-top: 0;
    border-bottom: 2px solid rgba(68,76,86,.5);
    height: 5rem;

    &:hover {
        transition-timing-function: linear; 
        transition: 350ms;
        border-bottom: 2px solid #1a83ff;
    }
`;

// This is the Logo for my App 
export const NavIcon = styled(GridOnIcon)`
    font-size: 3rem !Important; 
    color: #f5f5f5;
    margin-left: 1rem;
    margin-bottom: 0rem;
`;
// This is the Logo text for my App
export const LogoWords = styled.span`
    margin-left: 2.5rem;
    font-size: 1.5rem;
    background: none;
    color: #f5f5f5;
    padding-top: .5rem;
`;

// This is the vertical nav bar
export const NavMenu = styled.nav`
    background-color: rgba(16,21,34,1);
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: -100%;
    transition: 850ms;
    border-radius: 1rem;
    border-right: 2px solid rgba(68,76,86,.5);
    border-bottom: 1px solid rgba(68,76,86,.5);

    &.active{
        left: 0;
        transition: 350ms;
    }
`;

export const NavMenuItems = styled.ul`
    width: 100%;
`;

export const NavText = styled.li`
    display: flex;
    justify-content: start;
    align-items: center;
    padding: .5rem 0px .5rem 1.4rem;
    list-style: none;
    height: 60px;
    color: white;
    border: 1px solid rgba(68,76,86,.5);
    border-right: 0;
    border-top: 0;

    & a {
        text-decoration: none;
        color: #f5f5f5;
        font-size: 18px;
        width: 95%;
        height: 100%;
        display: flex;
        align-items: center;
        padding: 0 16px;
        border-radius: 4px;
    }

    & a:hover {
        background-color: #1a83ff;
    }
`;
 