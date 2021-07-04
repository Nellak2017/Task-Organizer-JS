import {
    SummaryContainer,
    SummaryDropDown,
    SummaryDropDownContainer,
    SummaryDropDownItem,
    SummaryInfoContainer
} from './InfoSummary.elements.js';
import { IconContext } from 'react-icons/lib';
import * as GoIcons from 'react-icons/go';

// TODO: Get the Data from Somewhere else, this is just magic values rn
// TODO: Handle an onclick event for the SummaryDropDownItem 
// TODO: Get Rid of the Border Color Scaffolding

const InfoSummary = () => {
    return (
        <>
            <IconContext.Provider value={{ color: '#fff', size: '1.5rem' }}>
                <SummaryContainer>
                    <SummaryDropDown>
                        <SummaryDropDownContainer>
                            <GoIcons.GoTriangleDown />
                            <p>High Priority Tasks</p>
                        </SummaryDropDownContainer>
                        <SummaryDropDownContainer>
                            <SummaryDropDownItem>
                                <p>See</p> 
                                <p>all</p>
                            </SummaryDropDownItem>
                        </SummaryDropDownContainer>
                    </SummaryDropDown>
                </SummaryContainer>
            </IconContext.Provider>
        </>
    );
}

export default InfoSummary;