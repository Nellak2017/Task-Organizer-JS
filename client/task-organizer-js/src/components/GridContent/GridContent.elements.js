import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TaskGrid = styled.section`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(4, 1fr [col-start]);
    column-gap: 1rem;
    row-gap: 1.7rem;

    & a[data-content="Low"] {color: rgba(0,97,0,1); background-color: rgba(198,239,206);}
    & a[data-content="Medium"] {color: rgba(156,114,88); background-color:rgba(255,235,156);}
    & a[data-content="High"] {color: rgba(207,45,6); background-color: rgba(255,199,206);}    
`;

export const TaskGridItem = styled(Link)`
    align-self: center;
    justify-self: center;

    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 1rem;
    padding-top: .5rem;
    border-radius: 1rem;
    color: #f5f5f5;
    font-size: 1.2rem;
    text-align: left;
    border: solid 3px rgba(68,76,86,.5);

    &:hover {
        font-weight: bold;
        border: solid 3px #1a83ff;
        transition: 50ms;
        cursor: pointer;
    }

    & strong {
        color: black;
    }
`;

export const ThreadName = styled.p`
    color: black;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: .5rem;
    border-bottom: 2px solid black;
`;

export const ThreadContent = styled.p`
    padding-bottom: .1rem;
`;

export const TaskGridAdd = styled.button`
    align-self: center;
    justify-self: center;

    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 1rem;
    padding-right: 3rem;
    padding-left: 3rem;
    border-radius: 1rem;
    color: white;
    font-size: 6rem;
    text-align: left;
    border: solid 3px rgba(68,76,86,.5);
    background-color: rgba(68,76,86,.5);

    &:hover {
        font-weight: bold;
        border: solid 3px #1a83ff;
        transition: 350ms;
        cursor: pointer;
        background-color: rgba(68,76,86,1);
    }
`;