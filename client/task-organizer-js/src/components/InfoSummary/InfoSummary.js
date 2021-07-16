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

// TODO: Make iconComponent from Data Hoverable 
// TODO: Rename the Styled Components to be more semantic, this is a CSS Collapsable,w/content
// TODO: Pass the Component you want to use as a Prop to this Component
//       see: https://www.tutorialsplane.com/react-pass-component-as-prop-with-props-example/
// TODO: put this https://www.tutorialsplane.com/react-pass-component-as-prop-with-props-example/ in MEM.DEV

const InfoSummary = ({ MyComponent, Data }) => {

    const [click, setClick] = useState(true);

    const handleClick = () => setClick(!click);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff', size: '1.5rem' }}>
                {Data.map((item, key) => {
                    return (
                        <SummaryContainer key={key}>
                            <SummaryDropDown>
                                <SummaryDropDownContainer>
                                    <GoIcons.GoTriangleDown className="icon" onClick={handleClick} />
                                    <p>{item.title}</p>
                                </SummaryDropDownContainer>
                                <SummaryDropDownContainer>
                                    <SummaryDropDownItem>
                                        {item.text !== '' ?
                                        item.text.split(/[ ,]+/).map( (item, key) =>
                                        {
                                            return(
                                                <p key={key}>{item}</p>
                                            );
                                        }
                                        ):
                                        <span>{item.icon}</span>}
                                    </SummaryDropDownItem>
                                </SummaryDropDownContainer>
                            </SummaryDropDown>
                        </SummaryContainer>
                    );
                })
                }

                <SummaryContainer style={{ marginTop: '0' }}>
                    {
                        click ?
                            <SummaryInfoCollapsable expanded>
                                <MyComponent data={Data[0].data} />
                            </SummaryInfoCollapsable> :
                            <SummaryInfoCollapsable >
                                <MyComponent data={Data[0].data} />
                            </SummaryInfoCollapsable>
                    }
                </SummaryContainer>
            </IconContext.Provider>
        </>
    );
}

export default InfoSummary;