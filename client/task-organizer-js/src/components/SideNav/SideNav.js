import { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { SidebarData } from '../../pages/OrganizerMain/Data';
import {
    OrganizerMainNav,
    MenuBars,
    NavLogo,
    NavIcon,
    LogoWords,
    NavMenu,
    NavMenuItems,
    NavText
} from './SideNav.elements.js';

const SideNav = () => {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    // TODO: Simplify logic by using DRY priciples
    // TODO: Put Nav Logo into the Data file so client can easily change it

    return ( 
        <>
            <IconContext.Provider value={{color: '#fff', size:'3rem'}}>
            <OrganizerMainNav>
                <MenuBars to='#'>
                    <FaIcons.FaBars onClick={showSidebar}/>
                </MenuBars>
            </OrganizerMainNav>    
            <NavMenu className={sidebar ? "active" : ""}>
                <NavMenuItems onClick={showSidebar}>
                    <NavLogo to='/'>
                        <NavIcon />
                        <LogoWords>Thread Organizer</LogoWords>
                    </NavLogo>
                    {SidebarData.map((item, index) => {
                        return(
                            <NavText key={index} className={item.cName}>
                                {item.icon}
                                <MenuBars to={item.path}>
                                <span>{item.title}</span>
                                </MenuBars>
                            </NavText>
                        );
                    })} 
                </NavMenuItems>
            </NavMenu>   
            </IconContext.Provider>
        </>
     );
}
 
export default SideNav;