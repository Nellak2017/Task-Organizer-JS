import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const ProfileContainer = styled(Link)`
    display: flex;
    position: relative; // This is for the Absolute positioned OnHover Container
    flex-direction: column;
    align-items: center;
    font-size: .75rem;
    background-color: none;
    height: 5rem;
    width: 6.5rem;
    border: 0px solid rgba(68,76,86,.5);
    color: #f5f5f5;

    & .showMe {
        display: none; 
    }
    &:hover .showMe{
        display: block !important;
        z-index: 999 !important;
    }

    &:hover {
        transition-timing-function: linear; 
        transition: 450ms;
        border-radius: 1rem;
        border: 1px solid #1a83ff;
        cursor: pointer;
    }
`;

export const ProfilePicture = styled.img`
    border-radius: 50%;
    max-height: 50%;
    max-width: 50%;
    margin: .5rem 1rem .5rem 1rem;
`;

export const ProfileName = styled.span`
    text-align: center;
    align-self: center;
    height: 1rem;
    max-width: 5.5rem !important;
    overflow: hidden;
`;

export const ProfilePopUp = styled.div`
    position: absolute; // must be absolute so that you can have it below the profile picture
    top: 5.1rem;
    right: 1rem; 
    width: 18rem;
    height: 24rem;
    border-radius: 1rem;
    background-color: rgba(34,39,46,1); 

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

export const ProfilePopUpInnerContainer = styled.div`
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

export const EmailFlexContainer = styled(Link)`
    display: flex;
    flex-direction: row;
    padding-left: 1rem;
    align-items: center;

    & a {
        padding-left: 1rem;
    }
`;

export const OptionLink = styled(Link)`
    font-size: 1rem !important;
    color: rgba(200,200,200,1) !important;

    &:hover {
        color: rgba(255,255,255,1) !important;
    }
`;