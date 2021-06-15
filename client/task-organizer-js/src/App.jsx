import {Navbar, Footer} from './components';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import ScrollToTop from './components/ScrollToTop';

const App = () => {

  return ( 
    <Router>
          <GlobalStyle/>
          <ScrollToTop />
          <Navbar/>
          <Switch>
            <Route path="/" exact component={Home}></Route>
          </Switch>
          <Footer/>
    </Router>
   );
}
 
export default App;
