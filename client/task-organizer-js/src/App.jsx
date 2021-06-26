import {Navbar, Footer, SideNav} from './components';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import OrganizerMain from './pages/OrganizerMain/OrganizerMain';
import ScrollToTop from './components/ScrollToTop';

// TODO: Remove SideNav from the main page, and put in Navbar
// TODO: Finish up SideNav, SideNav.elements, OrganizerMain.js, and Data.js from \OrganizerMain

const App = () => {

  return ( 
    <Router>
          <GlobalStyle/>
          <ScrollToTop />
          <Switch>
            <Route path="/" exact component={OrganizerMain}></Route>

          </Switch>
    </Router>
   );
}
 
export default App;
