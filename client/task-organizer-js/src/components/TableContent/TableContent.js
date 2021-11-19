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

import { useDispatch, useSelector } from 'react-redux';
import { todoViewUpdateTableData } from "../../state/actions/TodoViewActions";

const TableContent = ({ data, tableHeaders, templates }) => {

    // Use the State of the Store
    const store_state = useSelector((state) => state);
    const dispatch = useDispatch();

    const [c , setc] = useState(0); // use this to test out something...
    const [skipPageReset, setSkipPageReset] = useState(false);

    const [mutatedData, setMutatedData] = useState(data); // (2) [{task:.., due:...,...},{...}]
    const columns = useMemo(() => tableHeaders[0], [tableHeaders]); // (13) [{Header:"Task",accessor:"task"}}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]

    console.log("skipPageReset at top of TableContent Code");
    console.log(skipPageReset);

    console.log("C value:");
    console.log(c);

    // Takes a copy of the input data and updates it with the SetMutatedData method to be value inside data
    // Ex: {'task': 'Github (20 contribs)'} -> (0,'task','Do the laundry') => {'task': 'Do the laundry'}
    const updateMyData = (rowIndex, columnId, value) => {
        setSkipPageReset(false); // another attempt to keep the page constant on updates...
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
        state,
        gotoPage,
        pageCount,
        setPageSize,
        resetResizing,
        prepareRow
    } = useTable({
        columns,
        data: mutatedData,
        defaultColumn,
        autoResetPage: !skipPageReset,
        initialState: { pageSize: 5},
        updateMyData: updateMyData,
    },
        useSortBy,
        usePagination,
        useFlexLayout,
        useResizeColumns)

    const { pageIndex, pageSize } = state

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

    const deleteTask = (rowIndex) => { setMutatedData(old => old.filter((row, index) => { return index !== rowIndex })); }

    // Dispatch Method for when you want to update the table data to the store
    // call this when the user clicks off of the table
    const updateTableDataToStore = () => { dispatch(todoViewUpdateTableData(mutatedData)); }

    // Listen for changes to mutatedData, when it changes I want you to dispatch the Update Table Event
    // TODO: Make sure the page stays the same on update cell
    // TODO: Make sure the default number of pages can vary based on the type of Table Summary passed in e.g. see 5 for organizerMain and see 10 for todoView
    // TODO: Make sure that the show pages number stays constant until updated (instead of reverting to default on every mutated data update)
    // TODO: Make sure only numbers that are valid are allowed to be entered into the goto page input
    // Note: THIS ACTUALLY WORKS! I am so glad I am celebrating!
    const testKeys = ["task", "due", "priority", "status", "weight", "order", "periodicity", "time_to_complete", "creation_date", "last_completion_date", "parent_thread", "pipelinable", "number_of_dependencies", "id", "completed"];
    useEffect(() => {
        setc(prev => (prev + 1) )
        setSkipPageReset(true); // another attempt to keep the page constant on updates...
        gotoPage(pageIndex); // yet another way I am trying to fix this annoying issue
        if (JSON.stringify(Object.keys(mutatedData[0])) === JSON.stringify(testKeys)) {
            updateTableDataToStore();
        }
    }, [mutatedData]);

    useEffect(() => {
        console.log("mounted");
    }, [])


    return (
        <>
            <IconContext.Provider value={{ color: '#fff', size: '2.5rem' }}>
                <DragDropContext onDragEnd={handleOnDragEnd}>
                    <TaskTable {...getTableProps()}>
                        <thead>
                            {headerGroups.map(headerGroup => (

                                <TaskTableRow {...headerGroup.getHeaderGroupProps()}>
                                    <ExtraTableHeader>{"Hello"}</ExtraTableHeader>
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
                    <PageButton onClick={() => previousPage()} disabled={!canPreviousPage}>
                        Previous
                    </PageButton>{' '}
                    <PageButton onClick={() => nextPage()} disabled={!canNextPage}>
                        Next
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