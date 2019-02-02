import { Route, BrowserRouter as Router } from "react-router-dom";
import { Switch } from "react-router";
import React from "react";
import ReactDOM from "react-dom";

import awsim from "./awsim/index.tsx";
import bank from "./bank.tsx";
import Boot from "./boot.tsx";
import Home from "./home.tsx";
import inbox from "./inbox.tsx";
import Market from "./market.tsx";
import Rd from "./RandD/index.tsx";
import Telemtry from "./telemetry/index.tsx";
import terminal from "./oonix/index.tsx";
import Wiki from "./wiki/index.tsx";
import { Link } from 'react-router-dom'

import "./style.css";

const homer = (viewComponent) => {
  return () => (<div>
    <ul>
      <li>
        <Link to="/home">home</Link>
      </li>
      <li>
        <Link to="/terminal">terminal</Link>
      </li>
      <li>
        <Link to="/awsim">awSim</Link>
      </li>
    </ul>
    {viewComponent}
  </div>);
};

ReactDOM.render(
  <div>
    
    <Router>
      <Switch>
        <Route path="/home" component={homer(Home)} />
        <Route path="/terminal" component={homer(terminal)} />
        <Route path="/awsim" component={homer(awsim)} />

        {/* <Route path="/market" component={() => Market} />
        <Route path="/inbox" component={() => inbox} />
        <Route path="/bank" component={() => bank} />
        <Route path="/telemetry" component={() => Telemtry} />
        
        <Route path="/RD" component={() => Rd} />
        <Route path="/wiki" component={() => Wiki} />
        <Route path="/boot" component={() => Boot} />÷ */}
        
        <Route path="/" component={homer(terminal)} />
      </Switch>
    </Router>
  </div>,
  document.getElementById("root")
);
