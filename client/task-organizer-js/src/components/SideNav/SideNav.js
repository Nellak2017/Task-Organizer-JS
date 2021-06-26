import { useState, useEffect } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons/lib';
import { SidebarData } from '../../pages/OrganizerMain/Data';
import {
    OrganizerMainNav,
    MenuBars,
    NavMenu,
    NavMenuItems,
    NavbarToggle,
    NavText
} from './SideNav.elements.js';

const SideNav = () => {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    // TODO: How can you make the nav be a nav-menu active or nav-menu based on conditional??

    return ( 
        <>
            <IconContext.Provider value={{color: '#fff'}}>
                <OrganizerMainNav>
                  <MenuBars to="#">
                    <FaIcons.FaBars onClick={showSidebar} />
                  </MenuBars>
                </OrganizerMainNav>
                
            </IconContext.Provider>
        </>
     );
}
 
export default SideNav;