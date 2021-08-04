import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import GlobalStyle from './globalStyles';
import HomePage from './pages/HomePage/HomePage';
import OrganizerMain from './pages/OrganizerMain/OrganizerMain';
import Calendars from './pages/Calendars/Calendars';
import Gantts from './pages/Gantts/Gantts';
import Settings from './pages/Settings/Settings';
import Stats from './pages/Stats/Stats';
import Templates from './pages/Templates/Templates';
import ThreadView from './pages/ThreadView/ThreadView';
import Timelines from './pages/Timelines/Timelines';
import TodoView from './pages/TodoView/TodoView';
import PlanningAssistant from './pages/PlanningAssistant/PlanningAssistant';
import Trackers from './pages/Trackers/Trackers';
import ScrollToTop from './components/ScrollToTop';

const App = () => {

  return (
    <MuiPickersUtilsProvider utils={MomentUtils} >
      <Router>
        <GlobalStyle />
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/Calendars" exact component={Calendars}></Route>
          <Route path="/Gantts" exact component={Gantts}></Route>
          <Route path="/OrganizerMain" exact component={OrganizerMain}></Route>
          <Route path="/Settings" exact component={Settings}></Route>
          <Route path="/Stats" exact component={Stats}></Route>
          <Route path="/Templates" exact component={Templates}></Route>
          <Route path="/ThreadView" exact component={ThreadView}></Route>
          <Route path="/Timelines" exact component={Timelines}></Route>
          <Route path="/TodoView" exact component={TodoView}></Route>
          <Route path="/PlanningAssistant" exact component={PlanningAssistant}></Route>
          <Route path="/Trackers" exact component={Trackers}></Route>
        </Switch>
      </Router>
    </MuiPickersUtilsProvider>
  );
}

export default App;