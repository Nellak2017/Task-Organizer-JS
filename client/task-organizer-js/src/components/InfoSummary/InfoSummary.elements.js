import styled from 'styled-components';

// Holds the InfoSummary Component and gives it proper placement
export const SummaryContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: #f5f5f5;
    margin: 3rem 0;
    font-size: 2rem;

    border: 1px solid red;

    & .icon {
        // Change Icon styles dynamically using this as it's classname
    }
`;

// The Place where there is a brief title, dropdown, 
// and a small button for extra options
// TODO: Add Media Queries for Responsive Design
export const SummaryDropDown = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 47rem;

    border: 1px solid green;

    // Give all elements inside me some styles
    & * {
        margin-right: 1rem;
        border: 1px solid blue;
    }
`;
// This is to hold the elements inside of the Summary Drop down
// So that items can be correctly positioned
export const SummaryDropDownContainer = styled.span`
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid violet;
    margin: 0;
`;

export const SummaryDropDownItem = styled.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    margin: 0;
    padding: 0;

    &:hover {
        color: #f5f5f5;
        cursor: pointer;
    }
`;

// The place where the Threads or Pertinent todos or whatever go
export const SummaryInfoContainer = styled.div`

`;