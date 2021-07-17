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
                                        {console.log(value)}
                                        return (
                                            <Draggable key={value.id} draggableId={value.id} index={key}>
                                                {(provided) => (
                                                    <TaskTableRow {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                                        <TaskTableData className="iconTd">{tasks[key].status === "Completed" ? <BiIcons.BiCheckboxChecked key={key} className="icon" onClick={(e) => completeTask(e, key)} />
                                                            : <BiIcons.BiCheckbox key={key} className="icon" onClick={(e) => completeTask(e, key)} />}</TaskTableData>

                                                        <TaskTableData data-content={value.task}>{value.task}</TaskTableData>
                                                        <TaskTableData className="due" data-content={FormatDue(value.due)}><span>{FormatDue(value.due)}</span></TaskTableData>
                                                        <TaskTableData data-content={value.priority}><span>{value.priority}</span></TaskTableData>
                                                        <TaskTableData data-content={value.status}><span>{value.status}</span></TaskTableData>
                                                        <TaskTableData data-content={value.weight}><span>{value.weight}</span></TaskTableData>
                                                        <TaskTableData data-content={value.order}><span>{value.order}</span></TaskTableData>
                                                        <TaskTableData data-content={value.periodicity}>{value.periodicity}</TaskTableData>
                                                        <TaskTableData data-content={value.timeToComplete}><span>{value.timeToComplete}</span></TaskTableData>
                                                        <TaskTableData data-content={value.creationDate}><span>{value.creationDate}</span></TaskTableData>
                                                        <TaskTableData data-content={value.lastCompletionDate}><span>{value.lastCompletionDate}</span></TaskTableData>
                                                        <TaskTableData data-content={value.parentThread}><span>{value.parentThread}</span></TaskTableData>
                                                        <TaskTableData data-content={value.pipelinable}><span>{value.pipelinable}</span></TaskTableData>
                                                        <TaskTableData data-content={value.numberOfDependencies}><span>{value.numberOfDependencies}</span></TaskTableData>
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