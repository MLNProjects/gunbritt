import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./Views/SignIn";
import SignUp from "./Views/SignUp";
import Landing from "./Views/Landing/Landing";
import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/loggain">
            <SignIn />
          </Route>
          <Route exact path="/registrera">
            <SignUp />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
