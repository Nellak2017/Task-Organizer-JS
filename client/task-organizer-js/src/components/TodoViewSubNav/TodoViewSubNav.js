import {
    SubNav,
    SubNavAddContainer,
    SubNavOptionsContainer,
    SubNavAddTaskButton,
    SubNavDeleteTaskButton,
    SubNavAddOptionsButton,
    SubNavOptionButton,
    SubNavAddPopUp,
    AddPopUpContainer,
    AddPopUpInnerContainer,
    AddPopUpButton
} from './TodoViewSubNav.elements.js';
import { useState} from 'react';
import * as CgIcons from 'react-icons/cg';
import * as RiIcons from 'react-icons/ri';
import { IconContext } from 'react-icons/lib';
import * as GoIcons from 'react-icons/go';

import { todoViewAddTask, todoViewDeleteMode } from "../../state/actions/TodoViewActions";

import { useDispatch } from 'react-redux'; 

const TodoViewSubNav = () => {

    const dispatch = useDispatch();

    const [addPressed, setAddPressed] = useState(false);
    const [delPressed, setDelPressed] = useState(false);

    const handleAddButtonClick = () => {setAddPressed(!addPressed);}

    const handleAddTaskClick = () => {
        dispatch(todoViewAddTask());
    }

    const handleDeleteTaskClick = () => {
        setDelPressed(!delPressed);
        dispatch(todoViewDeleteMode());
    }

    return (
        <>
            <SubNav>
                <SubNavAddContainer>
                    <SubNavAddTaskButton onClick={handleAddTaskClick}>Add Task</SubNavAddTaskButton>
                    <SubNavAddOptionsButton onClick={handleAddButtonClick}>v</SubNavAddOptionsButton>
                    <AddPopUpContainer>
                        <SubNavAddPopUp className={!addPressed ? "showMe" : "" }>
                            <AddPopUpInnerContainer>
                                <AddPopUpButton><CgIcons.CgTemplate />Add Thread</AddPopUpButton>
                                <AddPopUpButton><RiIcons.RiStackLine />Add Template</AddPopUpButton>
                            </AddPopUpInnerContainer>
                    
                        </SubNavAddPopUp>
                    </AddPopUpContainer>

                    <SubNavDeleteTaskButton onClick={handleDeleteTaskClick}>Turn {!delPressed ? "On":"Off"} Delete Tasks</SubNavDeleteTaskButton>
                    
                </SubNavAddContainer>


                <SubNavOptionsContainer>
                    <SubNavOptionButton>
                        Sort
                    </SubNavOptionButton>
                    <SubNavOptionButton>
                        Actions
                    </SubNavOptionButton>
                    <SubNavOptionButton>
                        Custom
                    </SubNavOptionButton>
                </SubNavOptionsContainer>
            </SubNav>
        </>
    );
}

export default TodoViewSubNav;