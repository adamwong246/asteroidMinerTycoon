import { Route, BrowserRouter as Router } from "react-router-dom";
import { Switch } from "react-router";
import React from "react";
import ReactDOM from "react-dom";

import terminal from "./terminal/index.tsx";
import awsim from "./awsim/index.tsx";

import "./style.css";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/terminal" component={() => terminal} />
      <Route path="/awsim" component={() => awsim} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
