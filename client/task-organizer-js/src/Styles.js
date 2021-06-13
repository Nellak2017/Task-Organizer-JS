import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "black",
  },
  toolbar: {
    backgroundColor: "white",
  },
  menuDropDown: {
    color: "black",
    fontSize: "14px", 
  },
}));

export default useStyles;