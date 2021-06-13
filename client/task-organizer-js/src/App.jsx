import { CssBaseline, Typography, AppBar, Toolbar, Button, IconButton, MenuIcon, Menu, MenuItem} from '@material-ui/core';
import GridOnIcon from '@material-ui/icons/GridOn';
import useStyles from './Styles';
import { useState } from 'react';

const App = () => {

  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  // TODO: Extract the Drop-down menu logic into another component
  return ( 
    <>
      <CssBaseline/>
        <div className="classes.root">
          <AppBar position="static">
            <Toolbar className={classes.toolbar}>
              <GridOnIcon color={'primary'}/>
              <Typography variant="h6" className={classes.title}>
                Task Organizer   
              </Typography>
              <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                Features
              </Button>
              <Menu
                id="Features"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Intuitive Interface</MenuItem>
                  <MenuItem onClick={handleClose}>Multiple Views</MenuItem>
                  <MenuItem onClick={handleClose}>Schedule Tasks</MenuItem>
                  <MenuItem onClick={handleClose}>Share Tasks with others</MenuItem>
              </Menu>

            </Toolbar>
          </AppBar>
        </div>
    </>
   );
}
 
export default App;
