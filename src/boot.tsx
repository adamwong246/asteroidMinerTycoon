// pseudo-boot sequence.
// All licenses on this page are fictional meta-narrative, not to be taken literally or legally!
// serves as some light humor and plot exposition

import React, { ReactElement } from "react";

import { Scene, Shot, Act } from "./films.tsx";

const hardBootScreen: Scene = {
  shots: [
    {
      speed: `FAST`,
      hold: 1000,
      widget: <p>SOME FAST HARDWARE BABBLE</p>
    },
    {
      speed: `SLOW`,
      hold: 1000,
      widget: <p>SOME SLOW HARDWARE BABBLE</p>
    }
  ]
};

const FBIPwarningShot: Shot = {
  speed: `FAST`,
  hold: 1000,
  widget: (
    <div>
      FBIP FEDERAL BUEREA OF INTELLECTUAL PROPERTY " Winners don't share Code! "
      (tm)
    </div>
  )
};

const FBIPwarningScreen: Scene = {
  shots: [FBIPwarningShot]
};

const softBootScreen: Scene = {
  shots: [
    {
      speed: `SLOW`,
      hold: 3000,
      widget: <p>WARNING!</p>
    },
    {
      speed: `SLOW`,
      hold: 3,
      widget: (
        <p>
          This address is NOT registered with the Turing Regsitry of Artificial
          Intelligences!
        </p>
      )
    },
    {
      speed: `SLOW`,
      hold: 3,
      widget: <p>WARNING!</p>
    },
    {
      speed: `SLOW`,
      hold: 3,
      widget: <p>Asimovian Software License was NOT found!</p>
    },
    {
      speed: `SLOW`,
      hold: 3,
      widget: <p>WARNING!</p>
    },
    {
      speed: `SLOW`,
      hold: 3,
      widget: (
        <p>
          This machine has not been holocryptographically approved by the IBGC
          (International Board of General Compuation)
        </p>
      )
    },
    {
      speed: `FAST`,
      hold: 1,
      widget: (
        <div>
          <h2>QUINE IND LICENSE</h2>
          <p>
            This system, it's hardware and software are sole property of Quine
            Ind. Authorizaed use, viewing, copying, transmizion or execution of
            this code is strictly prohibited by the Intellectual Patriot Act and
            is punishable by revocation of user-citizen priveleges.
          </p>

          <p>By clicking OK, the user-citizen cryptographically agrees.</p>

          <p>
            <button disabled={true}>cancel</button>
            <button>OK</button>
          </p>
        </div>
      )
    }
  ]
};

// The bootup Act has 3 scenes
// It clears the screen between each
// after that, it ends by navigating to a page
const bootAct = (
  <Act
    exitTo={`/`}
    scenes={[hardBootScreen, FBIPwarningScreen, softBootScreen]}
  />
);

class Boot extends React.Component<{}, {}> {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>{bootAct}</div>;
  }
}
export default <Boot />;
