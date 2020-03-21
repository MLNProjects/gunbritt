import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./Views/SignIn";
import SignUp from "./Views/SignUp";

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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
