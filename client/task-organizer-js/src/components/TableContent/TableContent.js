import React, { useState, useMemo, useEffect, useRef } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useTable, useSortBy, usePagination, useFlexLayout, useResizeColumns } from 'react-table';
import {
    TaskTable,
    TaskTableRow,
    ExtraTableHeader,
    TaskTableHeader,
    TaskTableData,
    PageButtonContainer,
    PageButton,
    PageLabel,
    GoToPage,
    ShowNPages
} from './TableContent.elements.js';
import { IconContext } from 'react-icons/lib';
import * as BiIcons from 'react-icons/bi'; // BiCheckbox
import * as MdIcons from 'react-icons/md'; // MdOutlineClose
import FormatDue from '../../lib/moment/FormatDue.js';
import StyledEditableCell from '../Editable/Editable.elements.js';

import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { todoViewCurrentPage, todoViewUpdateTableData } from "../../state/actions/TodoViewActions";
import { AiOutlineConsoleSql } from 'react-icons/ai';

const TableContent = ({ data, tableHeaders, templates }) => {

    // Use the State of the Store
    const store_state = useSelector((state) => state);
    const dispatch = useDispatch();

    // Define Default task for if mutatedData is ever initially empty
    const defaultTask = [{
        'task': 'Default task',
        'due': new moment(),
        'priority': 'Medium',
        'status': 'Open',
        'weight': '50',
        'order': '1',
        'periodicity': '1day',
        'time_to_complete': '1 hours',
        'creation_date': 'today',
        'last_completion_date': 'never',
        'parent_thread': 'None',
        'pipelinable': 'No',
        'number_of_dependencies': '0',
        'id': '0',
        'completed': false
    }];

    const [mutatedData, setMutatedData] = useState(data.length > 0 ? data : defaultTask); // (2) [{task:.., due:...,...},{...}]
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
    const defaultColumn = { Cell: EditableCell, minWidth: 30, width: 250, maxWidth: 500 }

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        canPreviousPage,
        canNextPage,
        pageOptions,
        state: { pageIndex, pageSize },
        gotoPage,
        pageCount,
        setPageSize,
        resetResizing,
        prepareRow
    } = useTable({
        columns,
        data: mutatedData,
        defaultColumn,
        initialState: {
            // if it is organizerMain then pageSize is 5, else it is 10
            pageSize: JSON.stringify(Object.keys(mutatedData[0])) === JSON.stringify(["task", "due", "priority", "status", "periodicity"]) ? 5 : 10,
            pageIndex: store_state.MasterConfigs.Globals[0].current_page
        },
        updateMyData: updateMyData,
    },
        useSortBy,
        usePagination,
        useFlexLayout,
        useResizeColumns)

    const completeTask = (e, index) => {
        e.preventDefault();
        updateMyData(index, "status", mutatedData[index].status !== "Completed" ? "Completed" : "Processing");
    };

    const handleOnDragEnd = (result) => {
        if (!result.destination) return;
        setMutatedData(old => {
            const items = Array.from(old);
            const [reorderedItem] = items.splice(result.source.index, 1);
            items.splice(result.destination.index, 0, reorderedItem);
            return items;
        });
    }

    // if there is more than one item, filter out the one being deleted. else set Mutated data to be the default task
    const deleteTask = (rowIndex) => { setMutatedData(old => old.length > 1 ? old.filter((row, index) => { return index !== rowIndex }) : defaultTask); }

    // Dispatch Method for when you want to update the table data to the store
    // call this when the user clicks off of the table
    const updateTableDataToStore = () => {
        dispatch(todoViewCurrentPage(pageIndex));
        dispatch(todoViewUpdateTableData(mutatedData));
    }

    // Listen for changes to mutatedData, when it changes I want you to dispatch the Update Table Event
    // TODO: Make sure the default number of pages can vary based on the type of Table Summary passed in e.g. see 5 for organizerMain and see 10 for todoView
    // TODO: Make sure that the show pages number stays constant until updated (instead of reverting to default on every mutated data update)
    const testKeys = ["task", "due", "priority", "status", "weight", "order", "periodicity", "time_to_complete", "creation_date", "last_completion_date", "parent_thread", "pipelinable", "number_of_dependencies", "id", "completed"];
    useEffect(() => {
        if (JSON.stringify(Object.keys(mutatedData[0])) === JSON.stringify(testKeys)) {
            updateTableDataToStore();
        }
    }, [mutatedData]);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff', size: '2.5rem' }}>
                <DragDropContext onDragEnd={handleOnDragEnd}>
                    <TaskTable {...getTableProps()}>
                        <thead>
                            {headerGroups.map(headerGroup => (

                                <TaskTableRow {...headerGroup.getHeaderGroupProps()}>
                                    <ExtraTableHeader>{" "}</ExtraTableHeader>
                                    {headerGroup.headers.map((column, key) => {
                                        return (
                                            <TaskTableHeader
                                                {...column.getHeaderProps(column.getSortByToggleProps())} key={key}
                                            >
                                                {column.render('Header')}
                                                {column.isSorted ? (column.isSortedDesc ? " ▼" : " ▲") : " "}
                                                <div
                                                    {...column.getResizerProps()}
                                                    className={`resizer ${column.isResizing ? 'isResizing' : ''
                                                        }`}
                                                />
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
                                    {page.map((row, key) => {
                                        prepareRow(row)
                                        return (
                                            <Draggable key={key} draggableId={String(mutatedData[key].value) + String(key)} index={key}>
                                                {provided => (
                                                    <TaskTableRow {...row.getRowProps()} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>

                                                        <TaskTableData className="iconTd">
                                                            {
                                                                store_state.MasterConfigs.Globals[0].delete_mode ?

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
                <PageButtonContainer>
                    <PageButton onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                        {'<<'}
                    </PageButton>{' '}
                    <PageButton style={{ marginLeft: "10px" }} onClick={() => previousPage()} disabled={!canPreviousPage}>
                        {'<'}
                    </PageButton>{' '}
                    <PageButton style={{ marginRight: "10px" }} onClick={() => nextPage()} disabled={!canNextPage}>
                        {'>'}
                    </PageButton>{' '}
                    <PageButton onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                        {'>>'}
                    </PageButton>{' '}
                    <PageLabel>
                        Page{' '}
                        <strong>{pageIndex + 1} </strong>
                        <strong> of </strong>
                        <strong>{pageOptions.length}</strong>{' '}
                    </PageLabel>
                    <PageLabel>
                        <p>|</p>
                        <p>Go</p>
                        <p>to</p>
                        <p>page:</p>{' '}
                        <GoToPage
                            type='number'
                            defaultValue={pageIndex + 1}
                            onChange={e => {
                                const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                                gotoPage(pageNumber)
                            }}
                            style={{ width: '50px' }}
                            min="1"
                            max={pageOptions.length}
                            onBlur={e => {
                                const validation = Number(e.target.value) < 1 ? pageIndex + 1 : Number(e.target.value) > pageOptions.length ? pageIndex + 1 : Number(e.target.value)
                                e.target.value = validation
                            }}
                        />
                    </PageLabel>{' '}
                    <ShowNPages
                        value={pageSize}
                        onChange={e => setPageSize(Number(e.target.value))}>
                        {[5, 10, 25, 50].map(pageSize => (
                            <option key={pageSize} value={pageSize}>
                                Show {pageSize}
                            </option>
                        ))}
                    </ShowNPages>
                </PageButtonContainer>
            </IconContext.Provider>

        </>
    );

}

export default TableContent;