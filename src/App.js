import "./app.scss";
import {BrowserRouter as Router} from 'react-router-dom';
import {Home} from "./pages/index";
import SigninPage from "./pages/signin";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/signin" component={SigninPage}/>
      </Switch>
    </Router>
  );
}

export default App;
