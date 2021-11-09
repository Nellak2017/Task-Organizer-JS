import styled from 'styled-components';

// TODO: Add in Text highlighting when clicked first red, then yellow, then green, then none, then repeat etc.
// TODO: Give option to edit the table values somehow??
export const TaskTable = styled.table`
    z-index: 0 !important;
    color: #fff;
    text-align: left;
    width: 100%; // take up full container
    border-collapse: collapse;
    background-color: rgba(44,49,56,1);
    padding: 0;
    margin: 0;

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
        width: 1rem;
        padding: .25rem;
    }

    & span {
        padding: .5rem;
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

`;

export const TaskTableHeader = styled.th`
    text-align: center;
    font-weight: bold;
    font-size: 1.4rem;
    border-right: 2px solid rgba(68,76,86,.5);
    border-left: 2px solid rgba(68,76,86,.5);

    min-width: 10rem;
`;

export const TaskTableData = styled.td`
    text-align: center;
    font-size: 1rem;
    border-bottom: 2px solid rgba(68,76,86,.5);
    border-right: 2px solid rgba(68,76,86,.5);
    border-top: 2px solid rgba(68,76,86,.5);
    
    max-width: 20rem; 
    max-height: 2rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    & input{font-size: 1rem; text-align: center;}

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
`;
export const PageButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-family: sans-serif;

    font-size: 1.7rem;
    padding: 0;
    min-height: 1.7rem;
    background-color: rgba(44,49,56,1);
    border: 1px solid black;
    overflow-x:auto;
    

    fieldset {
    font-size: 1rem;
    padding: 0.5rem;
    border-radius: 1rem;
    }

    input, button, select {
        font-size: inherit;
        padding: 0.2rem;
        margin: 0.2rem 0.2rem;
        /* the following ensures they're all using the same box-model for rendering */
        -webkit-box-sizing: content-box;
        box-sizing: content-box;
        border-radius: .25rem;
    }

    strong, p{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 0.2rem;
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