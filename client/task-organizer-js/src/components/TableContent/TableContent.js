import { useState, useRef } from 'react';
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

// TODO: Improve Drag-And-Drop Functionality with react-beautiful-dnd (Search how to do it in tables), see also: https://dev.to/milandhar/drag-and-drop-table-with-react-beautiful-dnd-54ad
// TODO: Gray out stuff when completed
// TODO: Add logic for see all
// TODO: Research e.preventDefault()
// TODO: Reserach ..data , see also: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// TODO: Check the TableHeaderData by putting a "_" between each word instead of a space or just merge together to see if equality (Leads to bug right now!)


const TableContent = ({ columns, data, updateMyData, skipPageReset, tableHeaders }) => {

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

    // Set our editable cell renderer as the default Cell renderer
    const defaultColumn = {
        Cell: Editable
    }

    /*
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize },
      } = useTable(
        {
          columns,
          data,
          defaultColumn,
          // use the skipPageReset option to disable page resetting temporarily
          autoResetPage: !skipPageReset,
          // updateMyData isn't part of the API, but
          // anything we put into these options will
          // automatically be available on the instance.
          // That way we can call this function from our
          // cell renderer!
          updateMyData,
        },
        usePagination
      )
        */
    const [tasks, setTasks] = useState([...filteredTableContentData]);

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
    // put back Headers[0] if you can't make it work otherwise
    return (
        <IconContext.Provider value={{ color: '#fff', size: '2.5rem' }}>
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <TaskTable>
                    <thead>
                        <TaskTableRow>
                            <th></th>
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
                                        <Draggable key={value.task} draggableId={value.task + key} index={key}>
                                            {provided => (
                                                <TaskTableRow {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                                    <TaskTableData className="iconTd">{tasks[key].status === "Completed" ? <BiIcons.BiCheckboxChecked key={key} className="icon" onClick={(e) => completeTask(e, key)} />
                                                        : <BiIcons.BiCheckbox key={key} className="icon" onClick={(e) => completeTask(e, key)} />}</TaskTableData>
                                                    {
                                                        Object.keys(tasks[key]).map((tableHeader, index) => {
                                                            return (
                                                                <TaskTableData key={index} data-content={
                                                                    tableHeader.toLowerCase().trim() === "due" ?
                                                                        FormatDue(value[tableHeader]).toLowerCase().trim() :
                                                                        value[tableHeader].toLowerCase().trim()}>
                                                                    <span>
                                                                        {tableHeader.toLowerCase().trim() === "due" ? FormatDue(value[tableHeader]) : value[tableHeader]}
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