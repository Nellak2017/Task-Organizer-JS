import styled from 'styled-components';

export const SubNav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: sticky;
    left: 0 !important;
    top: 5.05rem;
    z-index: 950; 

    overflow: visible;
    min-width: 100%;


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

    margin-left: 20rem;
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

export const SubNavDeleteTaskButton = styled.button`
    width: 12rem;
    height: 50%;
    border-radius: .5rem;
    border: solid 1px rgba(68,76,86,.5);
    background-color: rgba(20,170,245,1);
    color: #f5f5f5;
    font-size: 1rem;

    margin-left: 1rem;

    &:hover {
        transition: 350ms;
        border: solid 2px #1a83ff ;
        cursor: pointer;
        background-color: #1a83ff;
    }
`;

export const SubNavAddPopUp = styled.div`
    position: absolute; // must be absolute so that you can have it below the profile picture
    top: 4rem;
    left: 23rem; 
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