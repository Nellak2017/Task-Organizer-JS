import React, { useState, useMemo, useEffect, useRef } from 'react';
import { IconContext } from 'react-icons/lib';
import * as BiIcons from 'react-icons/bi'; // BiCheckbox
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
    PaginationButton
} from './ThreadViewLarge.elements.js';


export const ThreadViewLarge = ({ tasks }) => {
    const [taskComplete, setTaskComplete] = useState(false);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff', size: '2.5rem' }}>
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
                    </ThreadBox>
                </MainContainer>
            </IconContext.Provider>
        </>
    );
}

export default ThreadViewLarge;