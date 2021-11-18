import styled from 'styled-components';

import { device } from "../../lib/CSS/device.js";

// TODO: Add in Text highlighting when clicked first red, then yellow, then green, then none, then repeat etc.
// TODO: Give option to edit the table values somehow??
export const TaskTable = styled.table`
    padding: 1rem;
    display: inline-block;
    border-spacing: 0!important;

    z-index: 0 !important;
    color: #fff;
    text-align: left;
    width: 100%; // take up full container
    border-collapse: collapse;
    background-color: rgba(44,49,56,1);
    padding: 0;
    margin: 0;

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      ${' ' /* In this example we use an absolutely position resizer,
       so this is required. */}
      position: relative;

      .resizer {
        display: inline-block;
        background: blue;
        width: 5px;
        height: 100%;
        position: absolute;
        right: 0;
        top: 0;
        transform: translateX(50%);
        z-index: 1;
        ${'' /* prevents from scrolling while dragging on touch devices */}
        touch-action:none;

        &.isResizing {
          background: red;
        }
      }
    }

    & th {
        background-color: rgba(54,59,66,1);
    }

    & tr:nth-child(even) {
        background-color: rgba(54,59,66,1);
    }

    & .icon {
        margin: 0;
    }

    & .iconTd {
        border-bottom: 0;
        width: 3rem;
    }

    & span {
        padding: .25rem;
        border-radius: 1rem;
    }

    & td:hover {
        background-color: rgba(64,69,76,1);
    }

    & th:hover {
        background-color: rgba(64,69,76,1);
    }    
`;

export const TaskTableRow = styled.tr`
    // added in for the block styling
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 2px solid rgba(68,76,86,.5);
    height: 3rem;
    // added in for the block styling

    /* Mobiles - Extra Small <425dp - Portrait*/
    @media ${device.mobileMMax}{
        padding: 0;
        font-size: 1rem;
        height: 2rem;
    }
`;

export const ExtraTableHeader = styled.th`
    border-right: 2px solid rgba(68,76,86,.5); 
    height: 100%;
    width: 3rem;
    color: rgba(54,59,66,1);

    /* Mobiles - Extra Small <425dp - Portrait*/
    @media ${device.mobileMMax}{
        padding: 0;
        font-size: 1rem;
        height: 2rem;
    }

    :hover {
        color: rgba(64,69,76,1);
    }
`;

export const TaskTableHeader = styled.th`

    // added in for the block styling
    display: flex !important;
    flex-direction: row;
    height: 100%;
    width: 15rem; 
    min-width: 2rem;
    max-width: 20rem;
    
    
    align-items: center;
    justify-content: center;
    // added in for the block styling

    text-align: center;
    font-weight: bold;
    font-size: 1.4rem;
    border-right: 2px solid rgba(68,76,86,.5);
    

    /* Mobiles - Extra Small <425dp - Portrait*/
    @media ${device.mobileMMax}{
        padding: 0;
        font-size: 1rem;
        height: 2rem;
        width: 13rem;
    }
`;

export const TaskTableData = styled.td`
    // added in for the block styling
    display: flex !important;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 15rem;
    min-width: 3rem;
    max-width: 20rem;
    // added in for the block styling

    text-align: center;
    font-size: 1rem;
    border-right: 2px solid rgba(68,76,86,.5); 
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    & input{
        font-size: 1rem; 
        text-align: center;
        padding: 0;
    }

    & input[type=number]::-webkit-inner-spin-button, 
      input[type=number]::-webkit-outer-spin-button {  
        -webkit-appearance: none;
        margin: 0; 
        width: 0;
    }

    &[data-content="low"] input{color: rgba(0,97,0,1); }
    &[data-content="medium"] input{color: rgba(156,114,88);}
    &[data-content="high"] input{color: rgba(207,45,6); }
    &[data-content="open"] input{color: rgba(207,45,6); }
    &[data-content="waiting"] input{color: rgba(156,114,88); }
    &[data-content="completed"] input{color: rgba(0,97,0,1); }
    &[data-content="processing"] input{color: rgba(0,0,97,1); }
    &[data-content*="ago"] input{color: rgba(207,45,6); }
    &[data-content*="Yesterday at"] input{color: rgba(207,45,6); }
    &[data-content*="Today at"] input{color: rgba(207,45,6); }
    &[data-content*="Tomorrow at"] input{color: rgba(156,114,88); }
    &[data-content*="from now at"] input{color: rgba(0,97,0,1); }

    &[data-content="low"] span{color: rgba(0,97,0,1); background-color: rgba(198,239,206);}
    &[data-content="medium"] span{color: rgba(156,114,88); background-color:rgba(255,235,156);}
    &[data-content="high"] span{color: rgba(207,45,6); background-color: rgba(255,199,206);}
    &[data-content="open"] span{color: rgba(207,45,6); background-color: rgba(255,199,206);}
    &[data-content="waiting"] span{color: rgba(156,114,88); background-color: rgba(255,235,156);}
    &[data-content="completed"] span{color: rgba(0,97,0,1); background-color: rgba(198,239,206);}
    &[data-content="processing"] span {color: rgba(0,0,97,1); background-color: rgba(135,255,255);}
    &[data-content*="ago"] span{color: rgba(207,45,6); background-color: rgba(255,199,206);}
    &[data-content*="Yesterday at"] span{color: rgba(207,45,6); background-color: rgba(255,199,206);}
    &[data-content*="Today at"] span{color: rgba(207,45,6); background-color: rgba(255,199,206);}
    &[data-content*="Tomorrow at"] span{color: rgba(156,114,88); background-color: rgba(255,235,156);}
    &[data-content*="from now at"] span{color: rgba(0,97,0,1); background-color: rgba(198,239,206);}

    & :hover {
        font-weight: bold;
        cursor: default;
    }

    /* Mobiles - Extra Small <425dp - Portrait*/
    @media ${device.mobileMMax}{
        font-size: 12px;
        width: 13rem;
        
        & input {
            font-size: 12px;
            width: 10rem;
        }

        & select {
            font-size: 12px;
        }

        & div {
            min-width: 0!important;
        }
    }

    /* Mobiles - Extra Small <425dp - landscape*/
    @media (${device.mobileLMax}) and (${device.mobileS}) and (orientation : landscape) {
        font-size: 12px;
        width: 13rem;

        & input {
            font-size: 12px;
            max-width: 10rem;
        }

        & select {
            font-size: 12px;
        }

        & div {
            min-width: 0!important;
        }
    }
`;
export const PageButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-family: sans-serif;
    position: sticky;
    left: 0 !important;

    font-size: 1.7rem;
    padding: 0 1rem;
    min-height: 1.7rem;
    background-color: rgba(44,49,56,1);
    border: 1px solid black;
    
    min-width: 50%;
    overflow: scroll;

    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */

    ::-webkit-scrollbar {
        display: none; /* for Chrome, Safari, and Opera */
    }

    fieldset {
    font-size: 1rem;
    padding: 0.5rem;
    border-radius: 1rem;
    }

    input:hover, button:hover, select:hover {
        transition: 350ms;
        color: #1a83ff !important;
        cursor: pointer;
    }

    input, button, select {
        background-color: rgba(44,49,56,1);
        color: white;
        border: 1px solid rgba(44,49,56,1);
        font-size: inherit;
        padding: 0.2rem;
        margin: 0.2rem 0.2rem;
        /* the following ensures they're all using the same box-model for rendering */
        -webkit-box-sizing: content-box;
        box-sizing: content-box;
        border-radius: .25rem;
        text-align: center;
    }

    strong, p{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 0.2rem;
    }

    /* Mobiles - Extra Small <425dp - Portrait*/
    @media ${device.mobileMMax}{
        font-size: 12px;
        width: 100%;
        max-height: 1rem;
        padding: 0;
        margin: 0;
        
        input[type=number]::-webkit-inner-spin-button, 
        input[type=number]::-webkit-outer-spin-button { 
            -webkit-appearance: none; 
            margin: 0; 
        }

        & span { 
            margin-left: .2rem;
        }

        & input {
            width: 1rem !important;
        }
        & input, button, select {
            font-size: inherit;
            padding: .05rem;
            margin: 0rem 0rem;
            /* the following ensures they're all using the same box-model for rendering */
            -webkit-box-sizing: content-box;
            box-sizing: content-box;
            border-radius: .25rem;
        }
        & strong, p{
            padding: 0.1rem;
        }
    }

    /* Mobiles - Extra Small <425dp - Landscape*/
    @media ${device.tabletMMax} and (orientation : landscape){
        font-size: 16px;
        width: 100%;
        max-height: 1rem;
        padding: 0;
        margin: 0;
        
        input[type=number]::-webkit-inner-spin-button, 
        input[type=number]::-webkit-outer-spin-button { 
            -webkit-appearance: none; 
            margin: 0; 
        }

        & span { 
            margin-left: .2rem;
        }

        & input {
            width: 1rem !important;
        }
        & input, button, select {
            font-size: inherit;
            padding: .05rem;
            margin: 0rem 0rem;
            /* the following ensures they're all using the same box-model for rendering */
            -webkit-box-sizing: content-box;
            box-sizing: content-box;
            border-radius: .25rem;
        }
        & strong, p{
            padding: 0.1rem;
        }
    }

     /* Small Tablets - S / Medium 425dp<550dp - Portrait*/
     @media ${device.mobileL} and ${device.tabletSMax}{
        font-size: 12px;
        width: 100%;
        max-height: 1rem;
        padding: 0;
        margin: 0;
        
        input[type=number]::-webkit-inner-spin-button, 
        input[type=number]::-webkit-outer-spin-button { 
            -webkit-appearance: none; 
            margin: 0; 
        }

        & span { 
            margin-left: .2rem;
        }

        & input {
            width: 1rem !important;
        }
        & input, button, select {
            font-size: inherit;
            padding: .05rem;
            margin: 0rem 0rem;
            /* the following ensures they're all using the same box-model for rendering */
            -webkit-box-sizing: content-box;
            box-sizing: content-box;
            border-radius: .25rem;
        }
        & strong, p{
            padding: 0.1rem;
        }
    }

    /* Regular Tablets - Medium 550dp<850dp - Portrait*/
    @media ${device.tabletS} and ${device.tabletMMax}{
        font-size: 16px;
        width: 100%;
        max-height: 1rem;
        padding: 0;
        margin: 0;
        
        input[type=number]::-webkit-inner-spin-button, 
        input[type=number]::-webkit-outer-spin-button { 
            -webkit-appearance: none; 
            margin: 0; 
        }

        & span { 
            margin-left: .2rem;
        }

        & input {
            width: 1rem !important;
        }
        & input, button, select {
            font-size: inherit;
            padding: .05rem;
            margin: 0rem 0rem;
            /* the following ensures they're all using the same box-model for rendering */
            -webkit-box-sizing: content-box;
            box-sizing: content-box;
            border-radius: .25rem;
        }
        & strong, p{
            padding: 0.1rem;
        }
    }

    /* Laptops - Medium 850dp<1440dp - Portrait*/
    @media ${device.tabletM} and ${device.laptopMax}{
        font-size: 24px;
        width: 100%;
        max-height: 1rem;
        padding: 0;
        margin: 0;
        
        input[type=number]::-webkit-inner-spin-button, 
        input[type=number]::-webkit-outer-spin-button { 
            -webkit-appearance: none; 
            margin: 0; 
        }

        & span { 
            margin-left: .2rem;
        }

        & input {
            width: 1rem !important;
        }
        & input, button, select {
            font-size: inherit;
            padding: .05rem;
            margin: 0rem 0rem;
            /* the following ensures they're all using the same box-model for rendering */
            -webkit-box-sizing: content-box;
            box-sizing: content-box;
            border-radius: .25rem;
        }
        & strong, p{
            padding: 0.1rem;
        }
    }

`;

export const PageButton = styled.button`
`;

export const PageLabel = styled.span`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
    
`;

export const GoToPage = styled.input`
    
`;

export const ShowNPages = styled.select`
`;