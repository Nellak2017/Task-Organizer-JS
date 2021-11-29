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
import { Provider } from 'react-redux';
import { store } from './state/store';
import { ThemeProvider } from "styled-components";
import { LightTheme, DarkTheme } from "./lib/CSS/theme.js";
import { createContext, useState } from 'react';
import { ThemeContext } from './contexts.js';

const App = () => {

  /*
    Summary of wishlist: 
    
    Master JSON -> Redux Store (At start only for now, later when DB connected do every page change)
    Redux Store -> DB (On page change)
    DB -> Master JSON (On page change)
    */
  const [themeState, setThemeState] = useState("Dark"); // Default to Dark theme
  
  return (
    <MuiPickersUtilsProvider utils={MomentUtils} >
      <Router>
        <ThemeProvider theme={themeState === "Light" ? LightTheme : DarkTheme}>
          <Provider store={store}>
            <ThemeContext.Provider value={{themeState,setThemeState}}>
              <GlobalStyle />
              <ScrollToTop />
              <Switch>
                <Route path="/" exact component={HomePage} ></Route>
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
            </ThemeContext.Provider>
          </Provider>
        </ThemeProvider>
      </Router>
    </MuiPickersUtilsProvider>
  );
}

export default App;