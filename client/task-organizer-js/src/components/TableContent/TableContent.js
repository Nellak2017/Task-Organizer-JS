import React, { useState, useMemo, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useTable, useSortBy } from 'react-table';
import {
    TaskTable,
    TaskTableRow,
    TaskTableHeader,
    TaskTableData
} from './TableContent.elements.js';
import { IconContext } from 'react-icons/lib';
import * as BiIcons from 'react-icons/bi'; // BiCheckbox
import * as MdIcons from 'react-icons/md'; // MdOutlineClose
import FormatDue from '../../lib/moment/FormatDue.js';
import StyledEditableCell from '../Editable/Editable.elements.js';

import { useDispatch, useSelector } from 'react-redux';
import { todoViewUpdateTableData } from "../../state/actions/TodoViewActions";

const TableContent = ({ data, tableHeaders, templates }) => {

    // Use the State of the Store
    const state = useSelector((state) => state);

    const dispatch = useDispatch();

    const [mutatedData, setMutatedData] = useState(data); // (2) [{task:.., due:...,...},{...}]
    const columns = useMemo(() => tableHeaders[0], [tableHeaders]); // (13) [{Header:"Task",accessor:"task"}}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]

    // Takes a copy of the input data and updates it with the SetMutatedData method to be value inside data
    // Ex: {'task': 'Github (20 contribs)'} -> (0,'task','Do the laundry') => {'task': 'Do the laundry'}
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

    const EditableCell = ({
        value: initialValue,
        row: { index },
        column: { id },
        updateMyData, // This is a custom function that we supplied to our table instance
    }) => {
        // We need to keep and update the state of the cell normally
        const [value, setValue] = React.useState(initialValue)
        const onChange = e => { setValue(e.target.value) }

        // We'll only update the external data when the input is blurred
        const onBlur = () => { updateMyData(index, id, value) }

        // If the initialValue is changed external, sync it up with our state
        React.useEffect(() => { setValue(initialValue) }, [initialValue])

        return <StyledEditableCell value={value} onChange={onChange} onBlur={onBlur} />
    }
    const defaultColumn = { Cell: EditableCell }

    const instance = useTable({
        columns,
        data: mutatedData,
        defaultColumn,
        updateMyData,
    }, useSortBy)

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = instance

    const completeTask = (e, index) => {
        e.preventDefault();
        updateMyData(index, "status", mutatedData[index].status !== "Completed" ? "Completed" : "Processing");
    };

    // TODO: Only update the Data that needs to be updated, without losing Id and other pieces of data. 
    // [...test.slice(0, 2), test[4], ...test.slice(3, 4), test[2], ...test.slice(4,-1)]; --> Swaps test[4] with test[2]
    // [...test.slice(0, a), test[b], ...test.slice(a+1, b), test[a], ...test.slice(b,-1)]; --> Swaps test[b] with test[a] , a < b
    const handleOnDragEnd = (result) => {
        if (!result.destination) return;
        setMutatedData(old => {
            const items = Array.from(old);
            const [reorderedItem] = items.splice(result.source.index, 1);
            items.splice(result.destination.index, 0, reorderedItem);
            return items;
        });
    }

    const deleteTask = (rowIndex) => { setMutatedData(old => old.filter((row, index) => { return index !== rowIndex })); }

    // Dispatch Method for when you want to update the table data to the store
    // call this when the user clicks off of the table
    const updateTableDataToStore = () => { dispatch(todoViewUpdateTableData(mutatedData)); }

    // Listen for changes to mutatedData, when it changes I want you to dispatch the Update Table Event
    // Note: THIS ACTUALLY WORKS! I am so glad I am celebrating!
    const testKeys = ["task", "due", "priority", "status", "weight", "order", "periodicity", "time_to_complete", "creation_date", "last_completion_date", "parent_thread", "pipelinable", "number_of_dependencies", "id", "completed"];
    useEffect(() => {
        if (JSON.stringify(Object.keys(mutatedData[0])) === JSON.stringify(testKeys)) {
            updateTableDataToStore();
        }
    }, [mutatedData]);

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
                                        <TaskTableHeader 
                                        {...column.getHeaderProps(column.getSortByToggleProps())} key={key}
                                        >
                                            {column.render('Header')}
                                            {column.isSorted ? (column.isSortedDesc ? " ▼" : " ▲") : " "}
                                        </TaskTableHeader>
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
                                        <Draggable key={key} draggableId={String(mutatedData[key].value) + String(key)} index={key}>
                                            {provided => (
                                                <TaskTableRow {...row.getRowProps()} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>

                                                    <TaskTableData className="iconTd">
                                                        {
                                                            state.MasterConfigs.Globals[0].delete_mode ?

                                                                <MdIcons.MdOutlineClose key={key} className="closeIcon" onClick={(e) => deleteTask(key)} />

                                                                : (mutatedData[key].status === "Completed" ?
                                                                    <BiIcons.BiCheckboxChecked key={key} className="icon" onClick={(e) => completeTask(e, key)} />
                                                                    : <BiIcons.BiCheckbox key={key} className="icon" onClick={(e) => completeTask(e, key)} />)
                                                        }
                                                    </TaskTableData>
                                                    {
                                                        row.cells.map((tableHeader, index) => {
                                                            return (
                                                                <TaskTableData {...tableHeader.getCellProps()} key={index}
                                                                    data-content={
                                                                        tableHeader.column.Header.toString().toLowerCase().trim() === "due" ?
                                                                            FormatDue(tableHeader.value) :
                                                                            tableHeader.value.toLowerCase().trim()
                                                                    }>
                                                                    <span>
                                                                        {
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