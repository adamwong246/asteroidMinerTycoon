import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component<{}, {}> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul>
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
        </ul>
      </div>
    );
  }
}
export default <Home />;

    // {
    //   name: `inbox`,
    //   description: `send and receive electronic messages`,
    //   exe: (): string => fourOhFour
    // },
    // {
    //   name: `fakebook`,
    //   description: `prove that I AM A HUMAN`,
    //   exe: (): string => fourOhFour
    // },
    // {
    //   name: `awSim`,
    //   description: `simluate any physical system, for a price`,
    //   exe: (): string => fourOhFour
    // },
    // {
    //   name: `bank`,
    //   description: `your capital, portflio, etc`,
    //   exe: (): string => fourOhFour
    // },
    // {
    //   name: `market`,
    //   description: `buy and sell anything`,
    //   exe: (): string => fourOhFour
    // },
    // {
    //   name: `hr`,
    //   description: `human resources`,
    //   exe: (): string =>  fourOhFour
    // },
    // {
    //   name: `kiwifeedia`,
    //   description: `the best encyclopedia`,
    //   exe: (): string => fourOhFour
    // },
    // {
    //   name: `sleep`,
    //   description: `go into sleep mode until something interesting happens`,
    //   exe: (): string => fourOhFour
    // },
    // {
    //   name: `telemtry`,
    //   description: `analyze telementry`,
    //   exe: (): string =>  fourOhFour
    // },
    // {
    //   name: `fablab`,
    //   description: `We can build anything tha does anything`,
    //   exe: (): string =>  fourOhFour
    // },

        // {
    //   name: `NASTA`,
    //   description: `The Ermerican space agency`,
    //   exe: (): string =>  fourOhFour
    // },
    // {
    //   name: `KKKP`,
    //   description: `The Kazakistanian Kosmos KorP`,
    //   exe: (): string => fourOhFour
    // },
    // {
    //   name: `groundcontrol`,
    //   description: `plan and launch a mission`,
    //   exe: (): string => fourOhFour
    // },
    // {
    //   name: `RD`,
    //   description: `Research and Development: a place to build hardware and software`,
    //   exe: (): string => fourOhFour
    // },
