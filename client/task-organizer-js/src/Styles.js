import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    color: "black",
    paddingLeft: theme.spacing(1)
  },
  toolbar: {
    backgroundColor: "white",
  },
  menuDropDown: {
    color: "black",
    fontSize: "14px", 
  },
  test: {
    backgroundColor: "black",
    border: "1px solid black",
  },
}));

export default useStyles;