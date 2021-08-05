import React, { useState, useMemo } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useTable } from 'react-table';
import {
    TaskTable,
    TaskTableRow,
    TaskTableHeader,
    TaskTableData
} from './TableContent.elements.js';
import { IconContext } from 'react-icons/lib';
import * as BiIcons from 'react-icons/bi';
import FormatDue from '../../lib/moment/FormatDue.js';
import { MakeDue } from '../../lib/moment/FormatDue.js';
import Editable from '../../components/Editable/Editable.js';
import StyledEditableCell from '../Editable/Editable.elements.js';

const TableContent = ({ data, tableHeaders, templates}) => {

    console.log(templates)

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
    })
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
    const handleOnDragEnd = (result) => {
        if (!result.destination) return;
        const items = Array.from(rows.map(item => { return (item.values) }));
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        setMutatedData(items);
    }

    // TODO: Make Templates more sophisticated 
    const addTask = () => {
        mutatedData.push(templates[0]);
    }

    console.log(instance);

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
                                        <Draggable key={row.cells[key].value} draggableId={String(row.cells[key].value) + String(key)} index={key}>
                                            {provided => (
                                                <TaskTableRow {...row.getRowProps()} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                                    <TaskTableData className="iconTd">{mutatedData[key].status === "Completed" ? <BiIcons.BiCheckboxChecked key={key} className="icon" onClick={(e) => completeTask(e, key)} />
                                                        : <BiIcons.BiCheckbox key={key} className="icon" onClick={(e) => completeTask(e, key)} />}</TaskTableData>
                                                    {
                                                        row.cells.map((tableHeader, index) => {
                                                            return (
                                                                <TaskTableData {...tableHeader.getCellProps()} key={index}
                                                                    data-content={
                                                                        tableHeader.column.Header.toLowerCase().trim() === "due" ?
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