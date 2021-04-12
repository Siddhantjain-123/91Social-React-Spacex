import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './pages/login/Login';
import Dashboard from './pages/dashboard/Dashboard';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Mission from './pages/missions/Mission';
import Rocket from './pages/rockets/Rocket';
import Launch from './pages/launches/Launch';


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
ReactDOM.render(
      <BrowserRouter>
          <Switch>
              <Route
                  exact
                  isAuthenticated={true}
                  path="/login"
                  component={Login} 
                  />
              <Route
                  exact
                  isAuthenticated={true}
                  path="/dashboard"
                  component={Dashboard}
                  />
                <Route
                  exact
                  isAuthenticated={true}
                  path="/missions"  
                  component={Mission}
                  />
                  <Route
                  exact
                  isAuthenticated={true}
                  path="/rockets"
                  component={Rocket}
                  />
                  <Route
                  exact
                  isAuthenticated={true}
                  path="/launches"
                  component={Launch}
                  />
          </Switch>
      </BrowserRouter>
  , document.getElementById('root')
);
