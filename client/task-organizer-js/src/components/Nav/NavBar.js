import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TypoGraphy from '@material-ui/core/Typography';
import DropDownMenu from './DropDownMenu';

const NavBar = () => {
    return ( 
        <List component="nav">
            <ListItem component="div">
                <ListItem component="span">

                <DropDownMenu buttonName="Features" items={ [
                {name:"Intuitive Interface",link:"https://www.google.com/"},
                {name:"Multiple Views",link:"https://www.google.com/"},
                {name:"Schedule tasks",link:"https://www.google.com/"},
                {name:"Share tasks with others",link:"https://www.google.com/"}]} />

                </ListItem >

                <ListItem component="span">

                 <DropDownMenu buttonName="Tutorials" items={ [
                {name:"Getting Started",link:"https://www.google.com/"},
                {name:"How to make Threads",link:"https://www.google.com/"},
                {name:"How to Schedule tasks",link:"https://www.google.com/"},
                {name:"More Guides",link:"https://www.google.com/"}]} />

                </ListItem>

            </ListItem >

        </List>
     );
}
 
export default NavBar;