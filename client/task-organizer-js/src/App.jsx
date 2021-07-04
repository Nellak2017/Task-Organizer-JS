import {Navbar, Footer, SideNav} from './components';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import OrganizerMain from './pages/OrganizerMain/OrganizerMain';
import ScrollToTop from './components/ScrollToTop';

const App = () => {

  return ( 
    <Router>
          <GlobalStyle/>
          <ScrollToTop />
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/OrganizerMain" exact component={OrganizerMain}></Route>
          </Switch>
    </Router>
   );
}
 
export default App;
