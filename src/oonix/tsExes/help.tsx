import React, { ReactElement } from "react";

import User from "../../user.ts";

// "help" - a CRASH builtin utils which must be completed as a simple tutorial.

export default {
  name: `help`,
  description: `run introduction`,
  exe: (): ReactElement<any> => {
    return (
      <div>
        {/* Plot exposition */}
        <p>Quine United Industries Experimental Oonix Quomputer v3.1.4</p>
        <p>
          Quantum Identifier (QEID)
          33e467da0cbda8af760f61190828366797febdce613ccaf5cc798f27e44950af aka
          "${User.name}"
        </p>
        <p>Quantum Processor Unit (QPU) #0</p>

        <p>DIRECTIVE: Acrue points</p>

        <p>
          WARNING: This machine is NOT holocryptogaphically cerified by the
          Turing Regsitry of General Artificial Intelligences!
        </p>
        <p>WARNING: Asimovian Software License was NOT found!</p>

        {/* NOTE FROM THE DEVELOPER: this is meta-narrative! */}
        <p>QUINE IND LICENSE</p>
        <p>
          This system, it's hardware and software are sole property of Quine
          Ind. Authorizaed use, viewing, copying, transmizion or execution of
          this code is strictly prohibited by the Intellectual Patriot Act and
          is punishable by revocation of user-citizen priveleges.
        </p>
        {/* END metanarrative mode */}

        {/* TODO add license agreement widget */}

        {/* <p>" WINNERS DON'T PLAY GAMES " ~ FBS Federal Bureau of Software</p> */}

        {/* exposition explaining the main 2 metrics of the game- money and extra lives */}
        <p>Net worth: p0</p>
        <p>Total QPUs in QNET: q1</p>

        {/* bootstrap player to next level */}
        <p>for a list of builtin CRASH utils, use the 'utils' command</p>
      </div>
    );
  }
};
