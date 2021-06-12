import { CssBaseline, Typography, AppBar, Toolbar, Button, IconButton, MenuIcon } from '@material-ui/core';
import GridOnIcon from '@material-ui/icons/GridOn';
import useStyles from './Syles';

const App = () => {

  const classes = useStyles();
  return ( 
    <>
      <CssBaseline/>
        <div className="classes.root">
          <AppBar position="static">
            <Toolbar>
              <GridOnIcon />
              <Typography variant="h6" className={classes.title}>
                Task Organizer   
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
    </>
   );
}
 
export default App;
