import { useState } from 'react';
import {
    SummaryContainer,
    SummaryDropDown,
    SummaryDropDownContainer,
    SummaryDropDownItem,
    SummaryInfoCollapsable,
    SummaryLink
} from './InfoSummary.elements.js';
import { IconContext } from 'react-icons/lib';
import * as GoIcons from 'react-icons/go';

// TODO: Make iconComponent from Data Hoverable 
// TODO: Rename the Styled Components to be more semantic, this is a CSS Collapsable,w/content
// TODO: Pass the Component you want to use as a Prop to this Component
//       see: https://www.tutorialsplane.com/react-pass-component-as-prop-with-props-example/
// TODO: put this https://www.tutorialsplane.com/react-pass-component-as-prop-with-props-example/ in MEM.DEV

const InfoSummary = ({ MyComponent, Data, TableHeaders }) => {

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
                                    <p style={{paddingLeft:"1rem"}}>{item.title}</p>
                                </SummaryDropDownContainer>
                                <SummaryDropDownContainer>
                                    <SummaryDropDownItem>
                                        {item.text !== '' ?
                                            <SummaryLink key={key} to={'/' + item.link}>{item.text}</SummaryLink>
                                            :
                                            <SummaryLink to={item.link !== '' ? '/' + item.link : '/OrganizerMain'}>{item.icon}</SummaryLink>}
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
                                {
                                    Data[0].tableHeaders !== '' ?
                                        <MyComponent data={Data[0].data} tableHeaders={[...TableHeaders]} />
                                        :
                                        <MyComponent data={Data[0].data} />
                                }

                            </SummaryInfoCollapsable> :
                            <SummaryInfoCollapsable >
                                {
                                    Data[0].tableHeaders !== '' ?
                                        <MyComponent data={Data[0].data} tableHeaders={[...TableHeaders]} />
                                        :
                                        <MyComponent data={Data[0].data} />
                                }
                            </SummaryInfoCollapsable>
                    }
                </SummaryContainer>
            </IconContext.Provider>
        </>
    );
}

export default InfoSummary;