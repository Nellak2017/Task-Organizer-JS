import React, { useState, useMemo, useEffect, useRef } from 'react';
import { IconContext } from 'react-icons/lib';
import { TableContent } from '../../components';
import * as BiIcons from 'react-icons/bi'; // BiCheckbox
import * as BsIcons from 'react-icons/bs'; // BsFillArrowLeftCircleFill and BsFillArrowRightCircleFill
import {
    MainContainer,
    ThreadBox,
    ThreadInfoContainer,
    ThreadInfo,
    PageDisplay,
    SeeAllButton,
    Tasks,
    ThreadContainer,
    ThreadTitle,
    IconContainer,
    TaskNameContainer,
    PaginationButtonContainer,
    PaginationButton
} from './ThreadViewLarge.elements.js';


/* 
TODO:

Use the react-table to make a 2 column, editable table, using data from masterData
    Use Data to filter out a particular thread's information and put title there
    Use Data to filter out a particular thread's information and put tasks there
Change See all to be a link to the TodoView Page
Add onClick for the icons for pagination
Make Light Theme Friendly
Make Mobile Responsive
Make Printer Friendly
Add Add Feature (That updates master) (TO update master this way, you must modify the current gatekeeping mechanism for making alterations in Table Content.. it currently checks if it matches all of TodoView instead of a editable prop..)
Add Delete Feature (That updates master)
*/

export const ThreadViewLarge = ({ data, tableHeaders }) => {
    const [taskComplete, setTaskComplete] = useState(false);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff', size: '2.5rem' }}>
                <MainContainer>
                    <ThreadBox>
                        <TableContent data={data} tableHeaders={tableHeaders} />
                    </ThreadBox>
                </MainContainer>
            </IconContext.Provider>
        </>
    );
}

export default ThreadViewLarge;

/*
<MainContainer>
                    <ThreadBox>
                        <ThreadTitle>
                            Domestic Thread
                        </ThreadTitle>
                        <ThreadInfoContainer>
                            <PageDisplay>
                                <ThreadInfo>Page</ThreadInfo>
                                <ThreadInfo>1</ThreadInfo>
                                <ThreadInfo>of</ThreadInfo>
                                <ThreadInfo>5</ThreadInfo>
                            </PageDisplay>
                            <SeeAllButton>See All</SeeAllButton>
                        </ThreadInfoContainer>
                        <Tasks>
                            <ThreadContainer>
                                <IconContainer>
                                    {taskComplete ?
                                        <BiIcons.BiCheckboxChecked className="icon" onClick={() => setTaskComplete(!taskComplete)} />
                                        : <BiIcons.BiCheckbox className="icon" onClick={() => setTaskComplete(!taskComplete)} />
                                    }
                                </IconContainer>
                                <TaskNameContainer>I am the first task from the data</TaskNameContainer>
                            </ThreadContainer>
                            <ThreadContainer>
                                <IconContainer>
                                    {taskComplete ?
                                        <BiIcons.BiCheckboxChecked className="icon" onClick={() => setTaskComplete(!taskComplete)} />
                                        : <BiIcons.BiCheckbox className="icon" onClick={() => setTaskComplete(!taskComplete)} />
                                    }
                                </IconContainer>
                                <TaskNameContainer>I am the next task from the data</TaskNameContainer>
                            </ThreadContainer>
                        </Tasks>
                        <PaginationButtonContainer>
                            <BsIcons.BsFillArrowLeftCircleFill className="icon" />
                            <BsIcons.BsFillArrowRightCircleFill className="icon" />
                        </PaginationButtonContainer>
                    </ThreadBox>
                </MainContainer>
*/