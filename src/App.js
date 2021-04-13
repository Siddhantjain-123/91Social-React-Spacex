import './App.css';
import Login from './pages/login/Login';
import Dashboard from './pages/dashboard/Dashboard';
import { BrowserRouter, Route, Switch,Redirect} from 'react-router-dom';
import Mission from './pages/missions/Mission';
import Rocket from './pages/rockets/Rocket';
import Launch from './pages/launches/Launch';
import { logout } from './store/actions/auth';
import { useSelector, useDispatch } from 'react-redux';

const App = () => {

  const isAdmin = useSelector(state => state.user.user && state.user.user.isAdmin);

  const dispatch = useDispatch();

  return (
    <BrowserRouter>
            <Switch>
                <Route
                    exact
                    path="/">
                    <Redirect to="/login" />
                </Route>
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
                    component={() => isAdmin ? <Mission /> : <div>Unauthorized</div>}
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
                <Route
                    exact
                    isAuthenticated={true}
                    path="/logout"
                    component={() => dispatch(logout()) && <Redirect to="/login" />}
                />
            </Switch>
        </BrowserRouter>
  );
}

export default App;
