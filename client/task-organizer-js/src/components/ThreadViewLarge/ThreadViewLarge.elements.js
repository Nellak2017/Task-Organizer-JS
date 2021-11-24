import styled from 'styled-components';

// Contains everything for Thread View, it's main purpose
// is to center the ThreadBox using Flexbox
export const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

// Contains the Thread Elements, the Page num, etc.
// Will be Displayed centered in the Screen
export const ThreadBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border: 1px solid white;
    color: white;
    padding: 0 1rem 1rem 1rem;
    width: 50%;
    background-color: rgba(34,39,46,1);
`;
// The Flex container that has page x of y, and see all button
export const ThreadInfoContainer = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    border-bottom: 1px solid white;
    background-color: rgba(44,49,56,1);
`;

// Contains the "Page x of y" elements
export const ThreadInfo = styled.p`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-right: .5rem;
`;

// The Flex container that has the page x of y 
export const PageDisplay = styled.div`
    display: flex;
    flex-direction: row;
`;

// The button that when pressed shows the Other ThreadView Small
export const SeeAllButton = styled.button`
    font-size: 1.5rem;
    margin: 0 .5rem;
    padding: 0 .5rem;
    background-color: transparent;
    color: white;
    border-radius: .5rem;
    border: none;
    &:hover {
        transition: 350ms;
        color: white;
        cursor: pointer;
        background-color: #1a83ff !important;
    }
`;

// Contains the List of Tasks 
export const Tasks = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    
    & div:nth-child(even) {
        background-color: rgba(54,59,66,1);
    }
    
`;

// Contains the Tasks with an Icon and the Task name (and possibly a Note as well)
export const ThreadContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    font-size: 1.5rem;
    margin: 0 .5rem;
    padding: 0 .5rem;
    background-color: transparent;
    color: white;
    border-bottom: 1px solid white;
`;

// Contains the Title of the Thread you are viewing
export const ThreadTitle = styled.title`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 1.8rem;
    font-weight: bold;
    border-bottom: 1px solid white;
`;

// Contains the Icon to complete the task
export const IconContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

// Contains the Name of the task you are viewing
export const TaskNameContainer = styled.section`
    margin-left: 1rem;
`;

// Contains the Pagination button < and >  
export const PaginationButton = styled.button`

`;

