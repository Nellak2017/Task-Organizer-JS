import {
    SubNav,
    SubNavAddContainer,
    SubNavOptionsContainer,
    SubNavAddTaskButton,
    SubNavAddOptionsButton,
    SubNavOptionButton
} from './TodoViewSubNav.elements.js';
import { useState } from 'react';
import { IconContext } from 'react-icons/lib';
import * as GoIcons from 'react-icons/go';

const TodoViewSubNav = () => {
    return (
        <>
            <SubNav>
                <SubNavAddContainer>
                    <SubNavAddTaskButton>Add Task</SubNavAddTaskButton>
                    <SubNavAddOptionsButton>v</SubNavAddOptionsButton>
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