import { CssBaseline, Typography, AppBar, Toolbar} from '@material-ui/core';
import GridOnIcon from '@material-ui/icons/GridOn';
import { makeStyles } from '@material-ui/core';
import { useState } from 'react';
import useStyles from './Styles';
import NavBar from './components/Nav/NavBar.js';

const App = () => {

  const classes = useStyles();

  // TODO: Make the logo and typography beside it a link to the nellakproject.com/
  // TODO: Make the typography stack beside the logo
  // TODO: Make everything fit in the second third of the screen
  // TODO: Get the values for the drop-downs from somewhere else instead of hardcoding it 
  // TODO: Either use regular CSS for styles or use Styled Components to style your page, JSS isn't functional

  return ( 
    <>
      <CssBaseline/>
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar className={classes.toolbar}>
              <GridOnIcon color={'primary'}/>
              <Typography variant="h6" className={classes.title}>
                Task Organizer   
              </Typography>
              <NavBar></NavBar>
            </Toolbar>
          </AppBar>
        </div>
    </>
   );
}
 
export default App;
