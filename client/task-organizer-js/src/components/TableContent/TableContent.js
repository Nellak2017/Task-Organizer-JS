import React, { useState, useRef, useMemo } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useTable, usePagination } from 'react-table';
import {
    TaskTable,
    TaskTableRow,
    TaskTableHeader,
    TaskTableData
} from './TableContent.elements.js';
import { IconContext } from 'react-icons/lib';
import * as BiIcons from 'react-icons/bi';
import FormatDue from '../../lib/moment/FormatDue.js';
import Editable from '../../components/Editable/Editable.js';
import { MakeDue } from '../../lib/moment/FormatDue.js';

/*
**** TODO LIST ****

*** Fix the bugs created when moving to react-table ***

1. delete the unnecessary variables like OriginalData or mutatedData
2. Add mutatedData to be a mirror for the ...rows ?? Necessary?
3. Make sure updateMyData points to the ...rows or whatever mirrors I am using for ...rows instead of the raw data input as a prop.. So that the editable cell value can be updated
4. Make a styled component for the Input tags inside of the table, so it is less weird.
5. Convert tempHeaders to the react-table version
6. Convert filteredTableContentData to the react-table version
7. Convert the completeTask to the react-table version
8. Convert the handleOnDragEnd to the react-table version
9. Ensure there are no bugs in the rendered view
10. Fix the Date Formatting Problem with the render method in react-table

*** Ensure Content is Editable ***

1. Test physically by doing it yourself, should be good from fixing bugs when moving to react-table

*** Add drop down menu to "v" in Add Task button ***

1. Add Styled Drop down menu
2. Add "Add Thread" item 
3. Add "Add Template" item
4. Add onClick() for Add Thread
5. Add onClick() for Add Template

*** Add drop down menu to "Sort by" in subnav bar ***

(For each, design the sorting algorithm and use it, unless it comes pre-built with react-table)
1. Add "Priority"
2. Add "Weight"
3. Add "Status"
4. Add "Alphabetical (A-Z)"
5. Add "Reverse Alphabetical"
6. Add "Due Date"
7. Add "Shortest Remaining Time"
8. Add "Default"

*** Add drop down menu to "Actions" in subnav bar ***

1. Add "Sync"
	i. Sync to Outlook Calendar
	ii. Sync to Google Calendar

2. Add "Print"
	i. Make printable version of the site

3. Add "Import"
	i. File chooser to select csv or excel file

4. Add "Export"
	i. Export to csv or excel file (File chooser for save location)


*** Add right Side nav menu to "Custom" in subnav bar ***

1. Add "Custom" Header at top left 
2. Add "->" button icon to right
3. Add onClick() for icon
4. Add "View" header for section with view buttons
	i. Add "Hide Task" with the slide button colored red if off, blue if on
	ii. Add "Hide Due" with the slide button colored red if off, blue if on
5. Add "Templates" header for section with view buttons
6. Add "+ Add Template" button in the right of Templates header
	i. Add "No Templates Yet" header and default subtext if no templates
7. Add "Theme" header for section with Theme buttons
	i. Add "Dark Theme" with the slide button colored red if off, blue if on


*** Add small details that count ***

1. Improved Drag and drop Functionality with react-beautiful-dnd (Search how to do it in tables), see also: https://dev.to/milandhar/drag-and-drop-table-with-react-beautiful-dnd-54ad
2. Gray out stuff when completed
3. Add logic for see all

*/


const TableContent = ({ data, tableHeaders }) => {

    // TODO: Delete unnecessary variables, replace with proper mirrors
    const [mutatedData, setMutatedData] = useState(data);
    const columns = useMemo(() => tableHeaders[0], []);
    const OriginalData = useMemo(() => mutatedData, []);


    console.log("mutatedData");
    console.log(mutatedData);

    // Takes a copy of the input data and updates it with the SetMutatedData method to be value inside data
    // Ex: {'task': 'Github (20 contribs)'} -> (0,'task','Do the laundry') => {'task': 'Do the laundry'}
    // TODO: Point this to ...rows or a ...rows mirror
    const updateMyData = (rowIndex, columnId, value) => {
        setMutatedData(old =>
            old.map((row, index) => {
                if (index === rowIndex) {
                    return {
                        ...old[rowIndex],
                        [columnId]: value,
                    }
                }
                return row
            })
        )
    }

    // TODO: Add Styled Component for Input
    const EditableCell = ({
        value: initialValue,
        row: { index },
        column: { id },
        updateMyData, // This is a custom function that we supplied to our table instance
    }) => {
        // We need to keep and update the state of the cell normally
        const [value, setValue] = React.useState(initialValue)

        const onChange = e => {
            setValue(e.target.value)
        }

        // We'll only update the external data when the input is blurred
        const onBlur = () => {
            updateMyData(index, id, value)
        }

        // If the initialValue is changed external, sync it up with our state
        React.useEffect(() => {
            setValue(initialValue)
        }, [initialValue])

        return <input value={value} onChange={onChange} onBlur={onBlur} />
    }

    // Set our editable cell renderer as the default Cell renderer
    const defaultColumn = {
        Cell: EditableCell,
    }


    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable({
        columns,
        data,
        defaultColumn,
        updateMyData,
    })

    // TODO: Convert this to the react-table version
    // Make the temporary array of headers
    const tempHeaders = Array.from(Object.values(tableHeaders[0]).map((item, key) => {
        return (
            Object.values(item).toString().toLowerCase().trim()
        )
    })).flat(1);

    // TODO: Convert this to the react-table version
    // filter TableContentData items to only contain keys that are in TempHeaders,
    // return array of task objects for the table
    const filteredTableContentData = Array.from(
        data.map(item => {
            return (
                Object.assign({}, ...Object.keys(item).filter(attribute => {
                    return (
                        tempHeaders.includes(attribute.toLowerCase().trim())
                    )
                }
                ).map(atrKey => {
                    return (
                        { [atrKey]: item[atrKey] }
                    )
                }))
            )
        })
    );

    const [tasks, setTasks] = useState([...rows]);

    console.log("tasks");
    console.log(tasks);

    const [Headers, setHeaders] = useState([...tableHeaders]);


    // TODO: Fix the check box feature
    const completeTask = (e, index) => {
        e.preventDefault();
        const newTasks = [...tasks];
        const status = newTasks[index].status; // get original status
        newTasks[index].status = status !== "Completed" ? "Completed" : "Processing"; // change to opposite of original status
        setTasks(newTasks);
    };

    console.log("rows[0].original")
    console.log(rows[0].original)

    // TODO: Fix Drag and Drop
    const handleOnDragEnd = (result) => {
        if (!result.destination) return;
        const items = Array.from(rows);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        setTasks(items);
    }

    // TODO: Fix the problem of too many TableDatas in the Mapping, find a simpler way or just do if...thens for all inline (ugly!)
    // put back Headers[0] if you can't make it work otherwise
    return (
        <IconContext.Provider value={{ color: '#fff', size: '2.5rem' }}>
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <TaskTable {...getTableProps()}>
                    <thead>
                        {headerGroups.map(headerGroup => (

                            <TaskTableRow {...headerGroup.getHeaderGroupProps()}>
                                <th></th>
                                {headerGroup.headers.map((column, key) => {
                                    return (
                                        <TaskTableHeader {...column.getHeaderProps()} key={key}>{column.render('Header')}</TaskTableHeader>
                                    );
                                })
                                }
                            </TaskTableRow>
                        ))}
                    </thead>


                    <Droppable droppableId="Task Summaries">
                        {(provided) => (
                            <tbody {...getTableBodyProps()} {...provided.droppableProps} ref={provided.innerRef}>
                                {rows.map((row, key) => {
                                    prepareRow(row)

                                    return (
                                        <Draggable key={row.cells[key].value} draggableId={row.cells[key].value + key} index={key}>
                                            {provided => (
                                                <TaskTableRow {...row.getRowProps()} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                                    <TaskTableData className="iconTd">{tasks[key].status === "Completed" ? <BiIcons.BiCheckboxChecked key={key} className="icon" onClick={(e) => completeTask(e, key)} />
                                                        : <BiIcons.BiCheckbox key={key} className="icon" onClick={(e) => completeTask(e, key)} />}</TaskTableData>

                                                    {

                                                        row.cells.map((tableHeader, index) => {

                                                            return (
                                                                <TaskTableData {...tableHeader.getCellProps()} key={index}
                                                                    data-content={
                                                                        tableHeader.column.Header.toLowerCase().trim() === "due" ?
                                                                            FormatDue(MakeDue(...tableHeader.value)).toLowerCase().trim() :
                                                                            tableHeader.value.toLowerCase().trim()
                                                                    }>
                                                                    <span>
                                                                        {tableHeader.column.Header.toLowerCase().trim() === "due" ?
                                                                            FormatDue(MakeDue(...tableHeader.value)).trim() :
                                                                            tableHeader.render('Cell')
                                                                        }
                                                                    </span>

                                                                </TaskTableData>
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
    );

}

export default TableContent;