import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SubNav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    height: 4rem;
    width: 100%;
    color: #f5f5f5;
    background-color: rgba(34,39,46,1);

`;

export const SubNavAddContainer = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    margin-left: 16.5rem;
`;

export const SubNavOptionsContainer = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;

    padding-right: 1rem;
`;

export const SubNavAddTaskButton = styled.button`
    width: 6rem;
    height: 50%;
    border-radius: .5rem 0 0 .5rem;
    border: solid 1px rgba(68,76,86,.5);
    background-color: rgba(20,170,245,1);
    color: #f5f5f5;
    font-size: 1rem;

    &:hover {
        transition: 350ms;
        border: solid 2px #1a83ff ;
        cursor: pointer;
        background-color: #1a83ff;
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