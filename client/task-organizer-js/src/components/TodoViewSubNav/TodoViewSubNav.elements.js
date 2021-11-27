import styled from 'styled-components';

import { device } from "../../lib/CSS/device.js";

export const SubNav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: sticky;
    left: 0 !important;
    top: 5.05rem;
    z-index: 950; 

    overflow: visible; // Take a crash course on how to make popups
    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
    min-width: 100%;


    height: 4rem;
    
    color: #f5f5f5;
    background-color: rgba(34,39,46,1);

    /* Mobiles - Extra Small <425dp - Portrait*/
    @media ${device.mobileMMax}{
        justify-content: center;
    }


    ::-webkit-scrollbar {
        display: none; /* for Chrome, Safari, and Opera */  
    }
`;

export const SubNavAddContainer = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    margin-left: 12.5%;

    /* Mobiles - Extra Small <425dp - Portrait*/
    @media ${device.mobileMMax}{
        margin-left: 1rem;

    }
`;

export const SubNavOptionsContainer = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;

    padding-right: 1rem;

    /* Mobiles - Extra Small <425dp - Portrait*/
    @media ${device.mobileMMax}{
        display: none;
    }

    /* Tablets and smaller - Medium <765dp - Portrait or Landscape*/
    // If it is smaller than like a Tablet, Might as well hide the options
    @media all and (max-width : 765px){
        display: none;
    }
`;

export const SubNavAddTaskButton = styled.button`
    width: 6rem;
    height: 50%;
    border-radius: .5rem 0 0 .5rem;
    border: solid 1px rgba(68,76,86,.5);
    background-color: rgba(20,170,245,1);
    color: #f5f5f5;
    font-size: 1rem;
    // Make sure that the text overflows with ...
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    &:hover {
        transition: 350ms;
        border: solid 2px #1a83ff ;
        cursor: pointer;
        background-color: #1a83ff;
    }

    /* Mobiles - Extra Small <425dp - Portrait*/
    @media ${device.mobileMMax}{
        width: 20vw;
        padding: 0 .5rem;
        font-size: .9rem;
    }
`;

export const SubNavDeleteTaskButton = styled.button`
    width: 12rem;
    height: 50%;
    border-radius: .5rem;
    border: solid 1px rgba(68,76,86,.5);
    background-color: rgba(20,170,245,1);
    color: #f5f5f5;
    font-size: 1rem;

    margin-left: 1rem;
    // Make sure that the text overflows with ...
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    &:hover {
        transition: 350ms;
        border: solid 2px #1a83ff ;
        cursor: pointer;
        background-color: #1a83ff;
    }

    /* Mobiles - Extra Small <425dp - Portrait*/
    @media ${device.mobileMMax}{
        width: 40vw;
        padding: 0 .5rem;
        font-size: .9rem;
    }
`;

export const SubNavAddPopUp = styled.div`
    position: absolute; // must be absolute so that you can have it below the profile picture
    top: 4rem;
    left: 12.5%; 
    width: 10rem;
    height: 4rem;
    border-radius: 1rem;
    background-color: rgba(54,59,66,1);
    z-index: 999 !important; 

    & img {
        width: 100%;
        height: auto;
        border-radius: 1rem 1rem 0 0;
    }

    & a {
        text-decoration: none;
        font-size: .75rem;
        font-weight: 400;
        color: rgba(108,116,126,1);
    }

    & a:hover {
        color: rgba(128,136,146,1);
    }
`;

export const AddPopUpContainer = styled.section`
     & .showMe {
        display: none; 
    }
    &:hover .showMe{
        display: block !important;
        z-index: 1000 !important;
    }
`;

export const AddPopUpInnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;

    text-align: center;
    font-weight: bold;
    border-radius: 1rem;
    font-size: 1.5rem;

    & > * {
        padding-bottom: 1rem;
    }
`;

export const AddPopUpButton = styled.button`
    display: flex;
    justify-content: flex-start;
    text-align: center;
    align-items: center;
    font-weight: bold;
    padding: .5rem;
    color: white;
    background-color: rgba(54,59,66,1);
    border: 0;
    font-size: 1rem;
    border-radius: 1rem;
    & svg {
        margin-right: .5rem;
    }
    &:hover {
        background-color: rgba(64,69,76,1);
        cursor: pointer;
    }
`;



export const SubNavAddOptionsButton = styled.button`
    width: 2rem;
    height: 50%;
    border-radius: 0 .5rem .5rem 0;
    border: solid 1px rgba(68,76,86,.5);
    background-color: rgba(20,170,245,1);
    color: #f5f5f5;

    &:hover {
        transition: 350ms;
        border: solid 2px #1a83ff ;
        cursor: pointer;
        background-color: #1a83ff;
        font-size: 1rem;
        font-weight: bold;
    }
`;

export const SubNavOptionButton = styled.button`
    width: 4rem;
    height: 50%;
    border: 0;
    border-right: solid 2px rgba(68,76,86,.5);
    background-color: transparent;
    color: #f5f5f5;

    &:hover {
        transition: 350ms;
        cursor: pointer;
        background-color: #1a83ff;
        font-size: .9rem;
        font-weight: bold;
    }

    &:last-child {
        border-right: 0;
        border-radius: 0 .5rem .5rem 0;
    }

    &:first-child {
        border-radius: .5rem 0 0 .5rem;
    }
`;

// This is the vertical Custom options for the SubNav
export const CustomMenu = styled.nav`
    z-index: 999; 
    background-color: rgba(16,21,34,1);
    width: 240px;
    height: 84%;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 9.05rem;
    right: -100%;
    transition: 850ms;
    border-radius: 1rem;
    border-right: 2px solid rgba(68,76,86,.5);
    border-bottom: 1px solid rgba(68,76,86,.5);
    overflow-y: scroll;
    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */

    ::-webkit-scrollbar {
        display: none; /* for Chrome, Safari, and Opera */
    }

    &.active{
        right: 0;
        transition: 300ms;
    }

    /* Mobiles - Extra Small <425dp - Portrait*/
    @media ${device.mobileMMax}{
        width: 100%;
        overflow-x: scroll;
        -ms-overflow-style: none; /* for Internet Explorer, Edge */
        scrollbar-width: none; /* for Firefox */

        ::-webkit-scrollbar {
            display: none; /* for Chrome, Safari, and Opera */
        }
    }
`;

// this is the Wrapper for the Toggle Switch button
export const ToggleSwitchWrapper = styled.div`
    // position: relative; // Not needed
`;

// this is the Toggle Switch button circle inside the button
export const ToggleSwitchLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;

// this is the Toggle Switch button, not circle inside
export const ToggleSwitchBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${ToggleSwitchLabel} {
    //background: #4fbe79;
    background-color: #1a83ff;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }

`;













