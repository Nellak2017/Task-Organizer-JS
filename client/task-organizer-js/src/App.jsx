import { CssBaseline, Typography, AppBar, Toolbar} from '@material-ui/core';
import GridOnIcon from '@material-ui/icons/GridOn';
import useStyles from './Styles';
import { useState } from 'react';
import DropDownMenu from './components/Nav/DropDownMenu';

const App = () => {

  const classes = useStyles();

  // TODO: Make the logo and typography beside it a link to the nellakproject.com/
  // TODO: Make the typography stack beside the logo
  // TODO: Make everything fit in the second third of the screen
  // TODO: Get the values for the drop-downs from somewhere else instead of hardcoding it 

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
              
              <DropDownMenu buttonName="Features" items={ [
                {name:"Intuitive Interface",link:"https://www.google.com/"},
                {name:"Multiple Views",link:"https://www.google.com/"},
                {name:"Schedule tasks",link:"https://www.google.com/"},
                {name:"Share tasks with others",link:"https://www.google.com/"}]} />

              <DropDownMenu buttonName="Tutorials" items={ [
                {name:"Getting Started",link:"https://www.google.com/"},
                {name:"How to make Threads",link:"https://www.google.com/"},
                {name:"How to Schedule tasks",link:"https://www.google.com/"},
                {name:"More Guides",link:"https://www.google.com/"}]} />
              

            </Toolbar>
          </AppBar>
        </div>
    </>
   );
}
 
export default App;
