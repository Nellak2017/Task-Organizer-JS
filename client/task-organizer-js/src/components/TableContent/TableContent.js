import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import {
    TaskTable,
    TaskTableRow,
    TaskTableHeader,
    TaskTableData
} from './TableContent.elements.js';
import { IconContext } from 'react-icons/lib';
import * as BiIcons from 'react-icons/bi';
import FormatDue from '../../lib/moment/FormatDue.js';

// TODO: Improve Drag-And-Drop Functionality with react-beautiful-dnd (Search how to do it in tables), see also: https://dev.to/milandhar/drag-and-drop-table-with-react-beautiful-dnd-54ad
// TODO: Gray out stuff when completed
// TODO: Add logic for see all
// TODO: Research e.preventDefault()
// TODO: Reserach ..data , see also: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

const TableContent = ({ data, tableHeaders }) => {

    const [tasks, setTasks] = useState([...data]);

    const [Headers, setHeaders] = useState([...tableHeaders]);

    const completeTask = (e, index) => {
        e.preventDefault();
        const newTasks = [...tasks];
        const status = newTasks[index].status; // get original status
        newTasks[index].status = status !== "Completed" ? "Completed" : "Processing"; // change to opposite of original status
        setTasks(newTasks);
    };

    const handleOnDragEnd = (result) => {
        if (!result.destination) return;
        const items = Array.from(tasks);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        setTasks(items);
    }

    // TODO: Fix the problem of too many TableDatas in the Mapping, find a simpler way or just do if...thens for all inline (ugly!)
    return (
        <>
            <IconContext.Provider value={{ color: '#fff', size: '2.5rem' }}>
                <DragDropContext onDragEnd={handleOnDragEnd}>
                    <TaskTable>
                        <thead>
                            <TaskTableRow>
                                <td></td>
                                {Headers[0].map((item, key) => {
                                    return (
                                        <TaskTableHeader key={key}>{item.td}</TaskTableHeader>
                                    );
                                })
                                }
                            </TaskTableRow>
                        </thead>


                        <Droppable droppableId="Task Summaries">
                            {(provided) => (
                                <tbody {...provided.droppableProps} ref={provided.innerRef}>
                                    {tasks.map((value, key) => {
                                        return (
                                            <Draggable key={value.id} draggableId={value.id} index={key}>
                                                {(provided) => (
                                                    <TaskTableRow {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                                        <TaskTableData className="iconTd">{tasks[key].status === "Completed" ? <BiIcons.BiCheckboxChecked key={key} className="icon" onClick={(e) => completeTask(e, key)} />
                                                            : <BiIcons.BiCheckbox key={key} className="icon" onClick={(e) => completeTask(e, key)} />}</TaskTableData>

                                                        {
                                                            Object.keys(tasks[key]).map((tableHeader, index) => {
                                                                {console.log(value[tableHeader])}
                                                                return(
                                                                    <TaskTableData data-content={tableHeader}>{ tableHeader.toLowerCase().trim() === "due" ? FormatDue(value[tableHeader]) : value[tableHeader]}</TaskTableData>
                                                                );
                                                            })
                                                        }

                                                        
                                                    </TaskTableRow>
                                                )}
                                            </Draggable>
                                        );
                                    })
                                    }
                                    {provided.placeholder}
                                </tbody>
                            )
                            }
                        </Droppable>
                    </TaskTable>
                </DragDropContext>
            </IconContext.Provider>
        </>
    );
}

export default TableContent;