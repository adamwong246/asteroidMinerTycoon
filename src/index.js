import { Route, BrowserRouter as Router } from "react-router-dom";
import { Switch } from "react-router";
import React from "react";
import ReactDOM from "react-dom";

import Telemtry from "./telemetry/index.tsx";
import terminal from "./terminal/index.tsx";
import awsim from "./awsim/index.tsx";
import Rd from "./RandD/index.tsx";
import Wiki from "./wiki/index.tsx";
import Home from "./home.tsx";
import bank from "./bank.tsx"
import inbox from "./inbox.tsx"
import Market from "./market.tsx"

import "./style.css";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/market" component={() => Market} />
      <Route path="/inbox" component={() => inbox} />
      <Route path="/bank" component={() => bank} />
      <Route path="/telemetry" component={() => Telemtry} />
      <Route path="/awsim" component={() => awsim} />
      <Route path="/RD" component={() => Rd} />
      <Route path="/wiki" component={() => Wiki} />
      <Route path="/home" component={() => Home} />
      <Route path="/" component={() => terminal} />
      
    </Switch>
  </Router>,
  document.getElementById("root")
);
