import styled from 'styled-components';

// TODO: Try out different colors for the text for highlighting
export const TaskTable = styled.table`
    color: #fff;
    text-align: left;
    width: 100%; // take up full container
    border-collapse: collapse;
    & .icon {
        margin: 0;
    }

    & .iconTd {
        border-bottom: 0;
        width: 1rem;
        padding: 1rem .5rem 0 0;
    }

    & span {
        padding: .5rem;
        border-radius: 1rem;
    }


    & td[data-content="Low"] span{color: rgba(0,97,0,1); background-color: rgba(198,239,206);}
    & td[data-content="Medium"] span{color: rgba(156,114,88); background-color:rgba(255,235,156);}
    & td[data-content="High"] span{color: rgba(207,45,6); background-color: rgba(255,199,206);}
    & td[data-content="Open"] span{color: rgba(207,45,6); background-color: rgba(255,199,206);}
    & td[data-content="Waiting"] span{color: rgba(156,114,88); background-color: rgba(255,235,156);}
    & td[data-content="Completed"] span{color: rgba(0,97,0,1); background-color: rgba(198,239,206);}
    & td[data-content="Processing"] span{color: rgba(0,0,97,1); background-color: rgba(135,255,255);}
    & .due[data-content*="ago"] span{color: rgba(207,45,6); background-color: rgba(255,199,206);}
    & .due[data-content*="Yesterday at"] span{color: rgba(207,45,6); background-color: rgba(255,199,206);}
    & .due[data-content*="Today at"] span{color: rgba(207,45,6); background-color: rgba(255,199,206);}
    & .due[data-content*="Tomorrow at"] span{color: rgba(156,114,88); background-color: rgba(255,235,156);}
    & .due[data-content*="in"] span{color: rgba(0,97,0,1); background-color: rgba(198,239,206);}
    & .due[data-content*="In"] span{color: rgba(0,97,0,1); background-color: rgba(198,239,206);}
`;

export const TaskTableRow = styled.tr`

`;

export const TaskTableHeader = styled.th`
    text-decoration: underline;
    text-decoration-color: rgba(16,21,34,1);
    text-decoration-thickness: .25rem;
    text-underline-position: under;
    font-weight: bold;
    font-size: 1.6rem;
    padding: 0 0 0 1rem;
`;

export const TaskTableData = styled.td`
    font-size: 1rem;
    border-bottom: 2px solid rgba(68,76,86,.5);
    padding: 1rem 0 0 1rem;
    max-width: 10rem; 
    max-height: 2rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    & :hover {
        font-weight: bold;
        cursor: default;
    }
`;