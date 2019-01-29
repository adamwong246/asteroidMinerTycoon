import { Route, BrowserRouter as Router } from "react-router-dom";
import { Switch } from "react-router";
import React from "react";
import ReactDOM from "react-dom";

import awsim from "./awsim/index.tsx";
import bank from "./bank.tsx"
import Boot from "./boot.tsx"
import Home from "./home.tsx";
import inbox from "./inbox.tsx"
import Market from "./market.tsx"
import Rd from "./RandD/index.tsx";
import Telemtry from "./telemetry/index.tsx";
import terminal from "./oonix/index.tsx";
import Wiki from "./wiki/index.tsx";

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
      <Route path="/boot" component={() => Boot} />
      <Route path="/terminal" component={() => terminal} />
      
      <Route path="/teaser" component={() => <pre>
          <output>{
`
$ ./asteroidMinerTycoon.exe

a) Escape this planet
b) Preserve biomatter
c) Accrue points

What do you want to do next?`}<span className="blinker">█</span>
          </output>
        </pre>
      }/>
      
      <Route path="/" component={() => Home} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
