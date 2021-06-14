import {Navbar} from './components';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';

const App = () => {

  return ( 
    <Router>
          <GlobalStyle/>
          <Navbar/>
          <Switch>
            <Route path="/" exact component={Home}></Route>
          </Switch>
    </Router>
   );
}
 
export default App;
