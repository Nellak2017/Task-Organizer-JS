import { useState } from 'react';
import {
    TaskTable,
    TaskTableRow,
    TaskTableHeader,
    TaskTableData
} from './TableContent.elements.js';
import { IconContext } from 'react-icons/lib';
import * as BiIcons from 'react-icons/bi';
// BiCheckboxChecked is used for the checkbox when clicked

// TODO: Figure out how to assign a key to each item in the mapping
// TODO: import a Date and Time handler for the Todo Due data. Don't store data as like "Tonight at 9" store like 7/9/2021/2100 or something like that
// TODO: Fix the onClick error where all boxes are clicked at once (Maybe Use effect?)
// TODO: Make Drag and Drop feature where you can drag and drop columns in place
// TODO: Gray out stuff when completed

const TableContent = ( {data} ) => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff', size: '2.5rem' }}>
                <TaskTable>
                    <TaskTableRow>
                        <p></p>
                        <TaskTableHeader>Task</TaskTableHeader>
                        <TaskTableHeader>Due</TaskTableHeader>
                        <TaskTableHeader>Priority</TaskTableHeader>
                        <TaskTableHeader>Status</TaskTableHeader>
                        <TaskTableHeader>Periodicity</TaskTableHeader>
                    </TaskTableRow>

                    {data.map((value, key) => {
                        return(
                            <TaskTableRow key={key}>
                                <TaskTableData className="iconTd">{click ? <BiIcons.BiCheckboxChecked className="icon" onClick={handleClick}/> 
                                : <BiIcons.BiCheckbox className="icon" onClick={handleClick}/>}</TaskTableData>

                                <TaskTableData data-content={value.task}>{value.task}</TaskTableData>
                                <TaskTableData className="due" data-content={value.due}><span>{value.due}</span></TaskTableData>
                                <TaskTableData data-content={value.priority}><span>{value.priority}</span></TaskTableData>
                                <TaskTableData data-content={value.status}><span>{value.status}</span></TaskTableData>
                                <TaskTableData data-content={value.periodicity}>{value.periodicity}</TaskTableData>
                            </TaskTableRow>
                        );
                    })
                    }
                </TaskTable>
            </IconContext.Provider>
        </>
    );
}

export default TableContent;