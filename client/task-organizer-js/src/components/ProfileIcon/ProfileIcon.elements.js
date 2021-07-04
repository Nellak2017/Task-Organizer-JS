import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const ProfileContainer = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: .75rem;
    background-color: none;
    height: 5rem;
    width: 6.5rem;
    border: 0px solid rgba(68,76,86,.5);
    color: #f5f5f5;

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