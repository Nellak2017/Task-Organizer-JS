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

// TODO: Map from Data Source to Produce Correct Table Data
// TODO: Fix the onClick error where all boxes are clicked at once (Maybe Use effect?)
// TODO: Look at the Parent container's Collapse function.. it isn't collapsing
// TODO: Make Drag and Drop feature where you can drag and drop columns in place
// TODO: Gray out stuff when completed

const TableContent = () => {
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
                    <TaskTableRow>
                        <TaskTableData className="iconTd">{click ? <BiIcons.BiCheckboxChecked className="icon" onClick={handleClick}/> 
                        : <BiIcons.BiCheckbox className="icon" onClick={handleClick}/>}</TaskTableData>
                        <TaskTableData >Take Out Trash</TaskTableData>
                        <TaskTableData className="due" data-content="Today at 9 pm" > <span>Today at 9 pm</span></TaskTableData>
                        <TaskTableData data-content="Low"><span>Low</span></TaskTableData>
                        <TaskTableData data-content="Open"><span>Open</span></TaskTableData>
                        <TaskTableData >2 * week</TaskTableData>
                    </TaskTableRow>
                    <TaskTableRow>
                        <TaskTableData className="iconTd">{click ? <BiIcons.BiCheckboxChecked className="icon" onClick={handleClick}/> 
                        : <BiIcons.BiCheckbox className="icon" onClick={handleClick}/>}</TaskTableData>
                        <TaskTableData>Do Laundry</TaskTableData>
                        <TaskTableData className="due" data-content="Today at 6 pm"><span>Today at 6 pm</span></TaskTableData>
                        <TaskTableData data-content="Medium"><span>Medium</span></TaskTableData>
                        <TaskTableData data-content="Open"><span>Open</span></TaskTableData>
                        <TaskTableData>1 * week</TaskTableData>
                    </TaskTableRow>
                </TaskTable>
            </IconContext.Provider>
        </>
    );
}

export default TableContent;