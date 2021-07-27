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

// TODO: Improve Drag-And-Drop Functionality with react-beautiful-dnd (Search how to do it in tables), see also: https://dev.to/milandhar/drag-and-drop-table-with-react-beautiful-dnd-54ad
// TODO: Gray out stuff when completed
// TODO: Add logic for see all
// TODO: Research e.preventDefault()
// TODO: Reserach ..data , see also: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// TODO: Check the TableHeaderData by putting a "_" between each word instead of a space or just merge together to see if equality (Leads to bug right now!)

const TableContent = ({ data, tableHeaders }) => {


    const [mutatedData, setMutatedData] = useState(data)
    const columns = useMemo(() => tableHeaders[0], [])
    const OriginalData = useMemo(() => mutatedData, [])

    
    const updateMyData = (rowIndex, columnId, value) => {
        // We also turn on the flag to not reset the page
        //setSkipPageReset(true)
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

    // Make the temporary array of headers
    const tempHeaders = Array.from(Object.values(tableHeaders[0]).map((item, key) => {
        return (
            Object.values(item).toString().toLowerCase().trim()
        )
    })).flat(1);

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

    const [Headers, setHeaders] = useState([...tableHeaders]);

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
                                                                        { tableHeader.column.Header.toLowerCase().trim() === "due" ?
                                                                            FormatDue(MakeDue(...tableHeader.value)).trim(): 
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