import { BrowserRouter as Router, Route} from 'react-router-dom';
import LoggedOut from './components/LoggedOut';
import Form from './components/Form';
import Dashboard from './components/Dashboard';
import LoggedIn from './components/LoggedIn';


const AppRouter = () => {
  return (
    <Router>
        <Route path="/" exact component={LoggedIn} />
        <Route path="/home" exact component={Dashboard} />
        <Route path="/login" component={LoggedOut} />
        <Route path="/form" component={Form} />
    </Router>
  );
};

export default AppRouter;