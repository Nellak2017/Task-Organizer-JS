import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const TaskGrid = styled.section`
    display: grid;
    width: 100%;
    border: solid 1px red;
    // Other grid properties
`;

export const TaskGridItem = styled(Link)`
    display: flex;
    flex-direction: column;
    color: #f5f5f5;
    border: solid 1px blue;
`;

