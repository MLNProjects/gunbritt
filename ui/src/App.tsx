import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./Views/SignIn/SignIn";
import SignUp from "./Views/SignUp/SignUp";
import Landing from "./Views/Landing/Landing";
import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/loggain" component={SignIn} />
          <Route exact path="/registrera" component={SignUp} />
          <Route path="/" component={Landing} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
