import { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { SidebarData, NavbarData } from '../../pages/OrganizerMain/Data';
import {
    OrganizerMainNav,
    OrganizerMainNavElementContainer,
    OrganizerMainNavElement,
    SearchBar, 
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
    // TODO: Update the Search Bar to make it more modern and connect to DB
    // TODO: Add the Profile picture logo and the User id in the horiz Nav
    // TODO: Get Rid of the Red Borders when done using them for design

    return ( 
        <>
            <IconContext.Provider value={{color: '#fff', size:'3rem'}}>
            <OrganizerMainNav>
                <OrganizerMainNavElementContainer>
                    <OrganizerMainNavElement>
                        <MenuBars to='#'>
                            <FaIcons.FaBars onClick={showSidebar}/>
                        </MenuBars>

                        <LogoWords style={
                            sidebar ? {transitionTimingFunction: "linear", transition: "550ms", marginLeft:"10.5rem", fontSize: "2rem"} : 
                            {transitionTimingFunction: "linear", transition: "350ms", marginLeft:"2rem", fontSize: "2rem"}
                            }>
                            Home
                        </LogoWords>
                    </OrganizerMainNavElement>
                </OrganizerMainNavElementContainer>

                <OrganizerMainNavElementContainer>
                    <OrganizerMainNavElement>
                        <SearchBar 
                        value="Foo bar"
                        id="OrganizerMainSearchBar"
                        placeholder="Foo"
                        name="OrganizerMainSearchBar"
                        ></SearchBar>
                    </OrganizerMainNavElement>

                </OrganizerMainNavElementContainer>

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