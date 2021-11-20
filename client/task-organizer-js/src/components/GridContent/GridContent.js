import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { RiFileChart2Fill } from 'react-icons/ri';
import {
    TaskGrid,
    TaskGridItem,
    ThreadName,
    ThreadContentContainer,
    ThreadContent,
    TaskGridAdd
} from './GridContent.elements.js';

// TODO: Drag and Drop
// TODO: + Button to add a new Blank thread (Figure out how that will work)
// TODO: Order the Threads by priority
// TODO: Add Right Click Options

const GridContent = ({ data }) => {
    return (
        <TaskGrid>
            {data.map((item, key) => {
                return (
                    
                    <TaskGridItem key={key} to={item.thread} data-content={item.priority}>
                        <ThreadName key={item.thread}>{item.thread}</ThreadName>
                        <ThreadContentContainer><ThreadContent>{'Tasks'}</ThreadContent><ThreadContent><strong>{item.taskCount}</strong></ThreadContent></ThreadContentContainer>
                        <ThreadContentContainer><ThreadContent>{'Sub-Threads'}</ThreadContent><ThreadContent><strong>{item.subThreadCount}</strong></ThreadContent></ThreadContentContainer>
                        <ThreadContentContainer><ThreadContent>{'Priority'}</ThreadContent><ThreadContent><strong>{item.priority === "Serious" ? "High" : item.priority}</strong></ThreadContent></ThreadContentContainer>
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