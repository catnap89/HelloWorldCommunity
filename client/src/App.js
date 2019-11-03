import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Community from "./pages/Community/Community"
import NoMatch from "./pages/NoMatch/NoMatch";
import Main from "./pages/Main/Main";
import CreateChat from './pages/CreateChat/createchat';


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/createchat" component={CreateChat} />
          <Route exact path="/community/:id" component={Community} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}


export default App;
