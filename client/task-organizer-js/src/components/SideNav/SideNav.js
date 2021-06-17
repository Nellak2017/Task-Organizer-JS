import { useState, useEffect } from 'react';
import {
    StyledSideNav,
    SideNavContainer,
    NavLogo,
    NavIcon,
    LogoWords
} from './SideNav.elements.js';

const SideNav = () => {

    const[click,setClick] = useState(false);
    const[button,setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => {setClick(false);};

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        } else{
            setButton(true);
        }
    }

    useEffect(() =>{
        showButton()
    }, []);

    return ( 
        <StyledSideNav>
            <SideNavContainer>
                <NavLogo to='/' oncClick={closeMobileMenu}>
                <NavIcon />
                    <LogoWords>TASK ORGANIZER</LogoWords>
                </NavLogo>

                
            </SideNavContainer>
        </StyledSideNav>
     );
}
 
export default SideNav;