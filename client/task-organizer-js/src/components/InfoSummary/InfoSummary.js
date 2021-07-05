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

// TODO: With the Data, map the Data to the Components like in the other components
// TODO: Rename the Styled Compnents to be more semantic, this is a CSS Collapsable,w/content

const InfoSummary = () => {

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
                                <p>Collapsable Content</p>
                            </SummaryInfoCollapsable> :
                            <SummaryInfoCollapsable >
                                <p>Collapsable Content</p>
                            </SummaryInfoCollapsable>
                    }
                </SummaryContainer>
            </IconContext.Provider>
        </>
    );
}

export default InfoSummary;