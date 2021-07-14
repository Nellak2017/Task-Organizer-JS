import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { RiFileChart2Fill } from 'react-icons/ri';
import {
    TaskGrid,
    TaskGridItem
} from './GridContent.elements.js';

const GridContent = ({data}) => {
    return ( 
        <TaskGrid>
            {data.map((item, key) => {
                <TaskGridItem key={key}>
                    <p>{'Task Count: '}{item.taskCount}</p>
                    <p>{'SubThreads: '}{item.subThreadCount}</p>
                    <p>{'Priority: '}{item.priority}</p>
                </TaskGridItem>
            })}
        </TaskGrid>
     );
}
 
export default GridContent;