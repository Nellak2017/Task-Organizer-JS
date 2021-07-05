import styled from 'styled-components';
import { keyframes } from 'styled-components';

// Holds the InfoSummary Component and gives it proper placement
export const SummaryContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: #f5f5f5;
    margin: 3rem 0 1rem 0;
    font-size: 2rem;

    //border: 1px solid red;

    & .icon {
        margin-right: 1rem;
    }

    & .icon:hover {
        transition: 350ms;
        color: #1a83ff !important;
        cursor: pointer;
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

    border-bottom: 1px solid rgba(68,76,86,.5);
`;
// This is to hold the elements inside of the Summary Drop down
// So that items can be correctly positioned
export const SummaryDropDownContainer = styled.span`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-bottom: .25rem;
    //border: 1px solid green;
`;

export const SummaryDropDownItem = styled.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1rem;

    &:hover {
        transition: 350ms;
        color: #1a83ff !important;
        cursor: pointer;
    }
`;

// This will let us smoothly transition from nothing to something

const ExpandingAnimation = keyframes`
    0% { opacity: 0; min-height: 0; padding: 0; margin: 0;}
    100% { opacity: 1; min-height: 10rem;}
`;

const CollapsingAnimation = keyframes`
    0% { opacity: 1; min-height: 10rem;}
    100% { opacity: 0; min-height: 0; padding: 0; margin: 0;}
`;

// The place where the Threads or Pertinent todos or whatever go
export const SummaryInfoCollapsable = styled.section`
    animation-name: ${props => props.expanded ?
        ExpandingAnimation :
        CollapsingAnimation
    };
    animation-duration: 500ms;
    animation-fill-mode: both;
    font-size: 1rem;
    width: 47rem;
    padding: 1rem;
    min-height: 10rem;
    background-color: rgba(44,49,56,1);
    border: 1px solid rgba(68,76,86,.5);
`;