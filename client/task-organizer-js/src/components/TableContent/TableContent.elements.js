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

    & td[data-content="low"] span{color: rgba(0,97,0,1); background-color: rgba(198,239,206);}
    & td[data-content="medium"] span{color: rgba(156,114,88); background-color:rgba(255,235,156);}
    & td[data-content="high"] span{color: rgba(207,45,6); background-color: rgba(255,199,206);}
    & td[data-content="open"] span{color: rgba(207,45,6); background-color: rgba(255,199,206);}
    & td[data-content="waiting"] span{color: rgba(156,114,88); background-color: rgba(255,235,156);}
    & td[data-content="completed"] span{color: rgba(0,97,0,1); background-color: rgba(198,239,206);}
    & td[data-content="processing"] span{color: rgba(0,0,97,1); background-color: rgba(135,255,255);}
    & td[data-content*="ago"] span{color: rgba(207,45,6); background-color: rgba(255,199,206);}
    & td[data-content*="yesterday at"] span{color: rgba(207,45,6); background-color: rgba(255,199,206);}
    & td[data-content*="today at"] span{color: rgba(207,45,6); background-color: rgba(255,199,206);}
    & td[data-content*="tomorrow at"] span{color: rgba(156,114,88); background-color: rgba(255,235,156);}
    & td[data-content*="in"] span{color: rgba(0,97,0,1); background-color: rgba(198,239,206);}
    
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

    & :hover {
        font-weight: bold;
        cursor: default;
    }
`;