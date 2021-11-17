import styled from 'styled-components';
import GridOnIcon from '@material-ui/icons/GridOn';
import { Link } from 'react-router-dom';

import { device } from "../../lib/CSS/device.js";

// TODO: Make the sticky positioning work better, fixed sucks

// This is the horizontal nav bar
export const OrganizerMainNav = styled.nav`
    display: inline-flex;
    position: sticky;
    left: 0 !important;
    top: 0;
    z-index: 997; 
    align-self: flex-start;
    overflow: visible;
    width: 100%;
   
    flex-grow: 0;
    flex-shrink: 0;

    background-color: rgba(34,39,46,1);
    min-height: 80px;
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
// This is the Link in the Vertical Navbar
export const MenuBars = styled(Link)`
    margin-left: 1rem;
    font-size: 2rem;
    background: none;
    color: #f5f5f5 ;

    /* Mobiles - Extra Small <425dp - Portrait*/
    @media ${device.mobileMMax}{
        text-align: left;
    }
`;

// This is the container for the logo and the logo text
export const NavLogo = styled(Link)`
    color: white;
    background-color: rgba(34,39,46,1);
    
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

    /* Mobiles - Extra Small <425dp - Portrait*/
    @media ${device.mobileMMax}{
        justify-content: center;
        text-align: left;  
    }
`;

// This is the Logo for my App 
export const NavIcon = styled(GridOnIcon)`
    font-size: 3rem !important; 
    color: #f5f5f5;
    margin-left: 1rem;
    margin-bottom: 0rem;
    /* Mobiles - Extra Small <425dp - Portrait*/
    @media ${device.mobileMMax}{
        margin-left: 0rem;
        padding-left: 0rem;
    }
`;
// This is the Logo text for my App
export const LogoWords = styled.span`
    margin-left: 2.5rem;
    font-size: 1.5rem;
    background: none;
    color: #f5f5f5;
    padding-top: .5rem;

     /* Mobiles - Extra Small <425dp - Portrait*/
     @media ${device.mobileMMax}{
        justify-content: start;
        text-align: left;
        margin-left: 1rem;
        padding-left: 1rem;
    }
`;

// This is the vertical nav bar
export const NavMenu = styled.nav`
    z-index: 999; 
    background-color: rgba(16,21,34,1);
    width: 240px;
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
    overflow: scroll;

    &.active{
        left: 0;
        transition: 350ms;
    }

    /* Mobiles - Extra Small <425dp - Portrait*/
    @media ${device.mobileMMax}{
        width: 100%;
        overflow: scroll;
    }
`;

export const NavMenuItems = styled.ul`
    width: 100%;
`;

// Box in the vertical nav that has logo and link name
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

    /* Mobiles - Extra Small <425dp - Portrait*/
    @media ${device.mobileMMax}{
        justify-content: center;
        text-align: center;
        padding: .5rem 0px .5rem 0;
        & a {
         width:163px;
         font-size: 1.5rem;  
        
        }
    }
`;
