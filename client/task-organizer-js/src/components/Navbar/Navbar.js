import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from  'react-icons/lib';
import { Button } from '../../globalStyles';
import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    NavIcon, 
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks, 
    NavItemBtn,
    NavBtnLink
} from './Navbar.elements.js';

const Navbar = () => {

    const[click,setClick] = useState(false);
    const[button,setButton] = useState(true);

    const handleClick = () => setClick(!click);

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
    // TODO: Turn the Links into Responsive Dropdown menus

    return ( 
        <>
        <IconContext.Provider value={{color: '#fff'}}>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>
                    <NavIcon />
                    <span style={{width:"10px",paddingLeft:"5px"}}>Task Organizer</span>
                </NavLogo>

                <MobileIcon onClick={handleClick}>
                    {click ? <FaTimes/> : <FaBars/>}
                </MobileIcon>
                <NavMenu onClick={handleClick} click={click}>
                    <NavItem>
                        <NavLinks to='/Tutorials'>
                            Tutorials
                        </NavLinks>
                    </NavItem>
                
                    <NavItem>
                        <NavLinks to='/Features'>
                            Features
                        </NavLinks>
                    </NavItem>

                    <NavItemBtn>
                        {button ? (
                            <NavBtnLink to='/sign-up'>
                                <Button primary>SIGN UP</Button>
                            </NavBtnLink> 
                        ): (
                            <NavBtnLink to='/sign-up'>
                                <Button fontBig primary>
                                    SIGN UP
                                </Button>
                            </NavBtnLink>
                        )}
                    </NavItemBtn>
                </NavMenu>
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
        </>
     );
}
 
export default Navbar;