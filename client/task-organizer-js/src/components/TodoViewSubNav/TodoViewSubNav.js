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
    AddPopUpButton,
    CustomMenu,
    ToggleSwitchWrapper,
    ToggleSwitchLabel,
    ToggleSwitchBox,
    CustomLabelContainer,
    CustomLabel,
    ArrowBox,
    ContentContainer,
    SettingContainer,
    Label,
    AddTemplate,
    TemplateContentBox,
    TemplateSubtitle,
    TemplateTextArea,
    GeneralText
} from './TodoViewSubNav.elements.js';
import { useState } from 'react';
import * as CgIcons from 'react-icons/cg';
import * as RiIcons from 'react-icons/ri';
import { IconContext } from 'react-icons/lib';
import * as GoIcons from 'react-icons/go';
import * as AiIcons from 'react-icons/ai';
// AiOutlineArrowRight

import { todoViewAddTask, todoViewDeleteMode } from "../../state/actions/TodoViewActions";

import { useDispatch } from 'react-redux';

const TodoViewSubNav = () => {

    const dispatch = useDispatch();

    const [addPressed, setAddPressed] = useState(false);
    const [delPressed, setDelPressed] = useState(false);
    const [customPressed, setCustomPressed] = useState(false);

    const handleAddButtonClick = () => { setAddPressed(!addPressed); }

    const handleAddTaskClick = () => {
        dispatch(todoViewAddTask());
    }

    const handleDeleteTaskClick = () => {
        setDelPressed(!delPressed);
        dispatch(todoViewDeleteMode());
    }

    const handleCustomClick = () => {
        setCustomPressed(!customPressed);
    }

    return (
        <>
            <SubNav>
                <SubNavAddContainer>
                    <SubNavAddTaskButton onClick={handleAddTaskClick}>Add Task</SubNavAddTaskButton>
                    <SubNavAddOptionsButton onClick={handleAddButtonClick}>v</SubNavAddOptionsButton>
                    <AddPopUpContainer>
                        <SubNavAddPopUp className={!addPressed ? "showMe" : ""}>
                            <AddPopUpInnerContainer>
                                <AddPopUpButton><CgIcons.CgTemplate />Add Thread</AddPopUpButton>
                                <AddPopUpButton><RiIcons.RiStackLine />Add Template</AddPopUpButton>
                            </AddPopUpInnerContainer>

                        </SubNavAddPopUp>
                    </AddPopUpContainer>

                    <SubNavDeleteTaskButton onClick={handleDeleteTaskClick}>Turn {!delPressed ? "On" : "Off"} Delete Tasks</SubNavDeleteTaskButton>

                </SubNavAddContainer>


                <SubNavOptionsContainer>
                    <SubNavOptionButton>
                        Sync
                    </SubNavOptionButton>
                    <SubNavOptionButton>
                        Print
                    </SubNavOptionButton>
                    <SubNavOptionButton>
                        Import
                    </SubNavOptionButton>
                    <SubNavOptionButton>
                        Export
                    </SubNavOptionButton>
                    <SubNavOptionButton onClick={handleCustomClick}>
                        Custom
                    </SubNavOptionButton>
                </SubNavOptionsContainer>

                <CustomMenu className={customPressed ? "active" : ""}>
                    <CustomLabelContainer>
                        <CustomLabel>
                            Custom
                        </CustomLabel>
                        <ArrowBox>
                            <AiIcons.AiOutlineArrowRight className="icon"/>
                        </ArrowBox>
                    </CustomLabelContainer>
                    <ContentContainer>
                        <SettingContainer>
                            <Label>Templates</Label>
                            <AddTemplate>+ Add Template</AddTemplate>
                        </SettingContainer>
                        <TemplateContentBox>
                            <TemplateSubtitle>
                                No Templates Yet
                            </TemplateSubtitle>
                            <TemplateTextArea>
                                Make templates to make tasks quicker so you can focus on the important stuff.
                            </TemplateTextArea>
                        </TemplateContentBox>
                    </ContentContainer>
                    <ContentContainer>
                        <SettingContainer>
                            <Label>Theme</Label>
                        </SettingContainer>
                        <ContentContainer>
                            <SettingContainer>
                                (I am a setting box)
                                <ToggleSwitchWrapper>
                                    <ToggleSwitchBox id="checkbox" type="checkbox" />
                                    <ToggleSwitchLabel htmlFor="checkbox" />
                                </ToggleSwitchWrapper>
                            </SettingContainer>
                        </ContentContainer>
                    </ContentContainer>
                </CustomMenu>
            </SubNav>
        </>
    );
}

export default TodoViewSubNav;