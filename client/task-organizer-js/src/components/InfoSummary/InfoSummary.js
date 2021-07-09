import { useState } from 'react';
import {
    SummaryContainer,
    SummaryDropDown,
    SummaryDropDownContainer,
    SummaryDropDownItem,
    SummaryInfoCollapsable
} from './InfoSummary.elements.js';
import { IconContext } from 'react-icons/lib';
import * as GoIcons from 'react-icons/go';
import { TableContentData } from "../../pages/OrganizerMain/Data";

// TODO: With the Data, map the Data to the Components like in the other components
// TODO: Rename the Styled Components to be more semantic, this is a CSS Collapsable,w/content
// TODO: Pass the Component you want to use as a Prop to this Component
//       see: https://www.tutorialsplane.com/react-pass-component-as-prop-with-props-example/
// TODO: put this https://www.tutorialsplane.com/react-pass-component-as-prop-with-props-example/ in MEM.DEV

const InfoSummary = ({MyComponent}) => {

    const [click, setClick] = useState(true);

    const handleClick = () => setClick(!click);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff', size: '1.5rem' }}>
                <SummaryContainer>
                    <SummaryDropDown>
                        <SummaryDropDownContainer>
                            <GoIcons.GoTriangleDown className="icon" onClick={handleClick} />
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
                <SummaryContainer style={{ marginTop: '0' }}>
                    {
                        click ?
                            <SummaryInfoCollapsable expanded>
                                <MyComponent data={TableContentData}/>
                            </SummaryInfoCollapsable> :
                            <SummaryInfoCollapsable >
                                <MyComponent data={TableContentData}/>
                            </SummaryInfoCollapsable>
                    }
                </SummaryContainer>
            </IconContext.Provider>
        </>
    );
}

export default InfoSummary;