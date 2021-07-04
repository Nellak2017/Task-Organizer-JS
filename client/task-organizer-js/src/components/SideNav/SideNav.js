import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import SearchBar from '../SearchBar/SearchBar.js';
import ProfileIcon from '../ProfileIcon/ProfileIcon.js';
import { SidebarData, ProfileData, SearchBarTestData } from '../../pages/OrganizerMain/Data';
import {
    OrganizerMainNav,
    OrganizerMainNavElementContainer,
    OrganizerMainNavElement,
    TabName, 
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

    const location = useLocation(); // tell the route name by location.pathname

    // TODO: Simplify logic by using DRY priciples
    // TODO: Put Nav Logo into the Data file so client can easily change it
    // TODO: Update the Search Bar to make it more modern and connect to DB
    // TODO: Highlight what tab you are on
    // TODO: Make this Mobile Responsive

    return ( 
        <>
            <IconContext.Provider value={{color: '#fff', size:'3rem'}}>
            <OrganizerMainNav>
                <OrganizerMainNavElementContainer>
                    <OrganizerMainNavElement>
                        <MenuBars to='#'>
                            <FaIcons.FaBars className="icon" onClick={showSidebar} size={'2rem'}/>
                        </MenuBars>

                        <TabName className={sidebar ? 'expanded' : 'collapsed'}>
                            {location.pathname === '/OrganizerMain' ? 'Home': location.pathname.replace('/','')}
                        </TabName>
                    </OrganizerMainNavElement>
                </OrganizerMainNavElementContainer>

                <OrganizerMainNavElementContainer>
                    <OrganizerMainNavElement>
                        <SearchBar placeholder='Search' data={SearchBarTestData}/> 
                        <ProfileIcon data={ProfileData}/>
                    </OrganizerMainNavElement>

                </OrganizerMainNavElementContainer>

            </OrganizerMainNav>    
            <NavMenu className={sidebar ? "active" : ""}>
                <NavMenuItems onClick={showSidebar}>
                    <NavLogo to='/'>
                        <NavIcon />
                        <LogoWords>Task Organizer</LogoWords>
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