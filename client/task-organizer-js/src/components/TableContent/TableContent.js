import { useState } from 'react';
import {
    TaskTable,
    TaskTableRow,
    TaskTableHeader,
    TaskTableData
} from './TableContent.elements.js';
import { IconContext } from 'react-icons/lib';
import * as BiIcons from 'react-icons/bi';
import FormatDue from '../../lib/moment/FormatDue.js';

// TODO: Make Drag and Drop feature where you can drag and drop rows in place
// TODO: Gray out stuff when completed
// TODO: Add logic for see all
// TODO: Research e.preventDefault()
// TODO: Reserach ..data , see also: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

const TableContent = ({ data }) => {

    const [tasks, setTasks] = useState([...data]);

    const completeTask = (e, index) => {
        e.preventDefault(); 
        const newTasks = [...tasks];
        const status = newTasks[index].status; // get original status
        newTasks[index].status = status !== "Completed" ? "Completed" : "Processing"; // change to opposite of original status
        setTasks(newTasks);
    };

    return (
        <>
            <IconContext.Provider value={{ color: '#fff', size: '2.5rem' }}>
                <TaskTable>
                    <thead>
                        <TaskTableRow>
                            <td></td>
                            <TaskTableHeader>Task</TaskTableHeader>
                            <TaskTableHeader>Due</TaskTableHeader>
                            <TaskTableHeader>Priority</TaskTableHeader>
                            <TaskTableHeader>Status</TaskTableHeader>
                            <TaskTableHeader>Periodicity</TaskTableHeader>
                        </TaskTableRow>
                    </thead>

                    <tbody>
                        {tasks.map((value, key) => {
                            return (
                                <TaskTableRow key={key}>
                                    <TaskTableData className="iconTd">{tasks[key].status === "Completed" ? <BiIcons.BiCheckboxChecked key={key} className="icon" onClick={(e) => completeTask(e, key)} />
                                        : <BiIcons.BiCheckbox key={key} className="icon" onClick={(e) => completeTask(e, key)} />}</TaskTableData>

                                    <TaskTableData data-content={value.task}>{value.task}</TaskTableData>
                                    <TaskTableData className="due" data-content={FormatDue(value.due)}><span>{FormatDue(value.due)}</span></TaskTableData>
                                    <TaskTableData data-content={value.priority}><span>{value.priority}</span></TaskTableData>
                                    <TaskTableData data-content={value.status}><span>{value.status}</span></TaskTableData>
                                    <TaskTableData data-content={value.periodicity}>{value.periodicity}</TaskTableData>
                                </TaskTableRow>
                            );
                        })
                        }
                    </tbody>
                </TaskTable>
            </IconContext.Provider>
        </>
    );
}

export default TableContent;