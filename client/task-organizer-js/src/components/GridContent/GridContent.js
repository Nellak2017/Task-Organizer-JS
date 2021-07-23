import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { RiFileChart2Fill } from 'react-icons/ri';
import {
    TaskGrid,
    TaskGridItem,
    ThreadName,
    ThreadContent,
    TaskGridAdd
} from './GridContent.elements.js';

// TODO: Drag and Drop
// TODO: Overflow hidden ellipsis
// TODO: + Button to add a new Blank thread (Figure out how that will work)
// TODO: Make the style look better (ask other for design help on this one)
// TODO: Order the Threads by priority
// TODO: Add Right Click Options

const GridContent = ({ data }) => {
    return (
        <TaskGrid>
            {data.map((item, key) => {
                return (
                    
                    <TaskGridItem key={key} to={item.thread} data-content={item.priority}>
                        <ThreadName key={item.thread}>{item.thread}</ThreadName>
                        <ThreadContent key={item.taskCount}><strong>{item.taskCount}</strong>{' Tasks '}</ThreadContent>
                        <ThreadContent key={item.subThreadCount}><strong>{item.subThreadCount}</strong>{' Sub-Threads '}</ThreadContent>
                        <ThreadContent key={item.priority}><strong>{item.priority}</strong>{' Priority '}</ThreadContent>
                    </TaskGridItem>
                    
                )
            })}
            <TaskGridAdd>
                +
            </TaskGridAdd>
        </TaskGrid>
    );
}

export default GridContent;