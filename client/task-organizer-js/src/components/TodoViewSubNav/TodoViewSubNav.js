import {
    SubNav,
    SubNavAddContainer,
    SubNavOptionsContainer,
    SubNavAddTaskButton,
    SubNavAddOptionsButton,
    SubNavOptionButton,
    SubNavAddPopUp,
    AddPopUpContainer,
    AddPopUpInnerContainer,
    AddPopUpButton
} from './TodoViewSubNav.elements.js';
import { useState } from 'react';
import * as CgIcons from 'react-icons/cg';
import * as RiIcons from 'react-icons/ri';
import { IconContext } from 'react-icons/lib';
import * as GoIcons from 'react-icons/go';

const TodoViewSubNav = () => {

    const [addPressed, setAddPressed] = useState(false);

    const handleAddButtonClick = () => {setAddPressed(!addPressed);}

    return (
        <>
            <SubNav>
                <SubNavAddContainer>
                    <SubNavAddTaskButton>Add Task</SubNavAddTaskButton>
                    <SubNavAddOptionsButton onClick={handleAddButtonClick}>v</SubNavAddOptionsButton>
                    <AddPopUpContainer>
                        <SubNavAddPopUp className={!addPressed ? "showMe" : "" }>
                            <AddPopUpInnerContainer>
                                <AddPopUpButton><CgIcons.CgTemplate />Add Thread</AddPopUpButton>
                                <AddPopUpButton><RiIcons.RiStackLine />Add Template</AddPopUpButton>
                            </AddPopUpInnerContainer>
                        </SubNavAddPopUp>
                    </AddPopUpContainer>
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