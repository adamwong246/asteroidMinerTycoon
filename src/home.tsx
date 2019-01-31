import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component<{}, {}> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Asteroid Miner Tycoon</h1>
        {/* <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/market"> market </Link>
          </li>
          <li>
            <Link to="/terminal"> terminal </Link>
          </li>
          <li>
            <Link to="/awsim"> awsim </Link>
          </li>
          <li>
            <Link to="/RD"> Rd </Link>
          </li>
          <li>
            <Link to="/wiki"> Wiki </Link>
          </li>
          <li>
            <Link to="/telemetry"> telemtry </Link>
          </li>
          <li>
            <Link to="/inbox"> inbox </Link>
          </li>
          <li>
            <Link to="/bank"> bank </Link>
          </li>
        </ul> */}
      </div>
    );
  }
}
export default <Home />;
