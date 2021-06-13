import {Button,Menu, MenuItem} from '@material-ui/core';
import { useState } from 'react';

/* 
    This is a Dropdown menu Component that handles click events by itself in isolation.
    props to pass in: buttonName, items
    buttonName is the name on the outer button
    items are a list of dictionaries that associates item names with links to other pages
*/

const DropDownMenu = ({buttonName, items}) => {

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };

    return (
        <>  
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>{buttonName}</Button>
              <Menu id={buttonName} anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                {
                    items.map(item =>(
                        <MenuItem onClick={handleClose}>{<a style={{textDecoration:"none", color:"black"}} href={item.link}>{item.name}</a>}</MenuItem>
                    ))
                }
              </Menu>
        </>
    );
}
 
export default DropDownMenu;