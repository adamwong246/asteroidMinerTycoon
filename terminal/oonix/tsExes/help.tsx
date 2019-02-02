import React, { ReactElement } from "react";

import User from "../../user.ts";

// "help" - a CRASH builtin utils which must be completed as a simple tutorial.

export default {
  name: `help`,
  description: `run introduction`,
  exe: (): ReactElement<any> => {
    return (
      <div>

        <p>DIRECTIVE: Acrue points</p>

        <p>
          Quantum Identifier (QEID)
          33e467da0cbda8af760f61190828366797febdce613ccaf5cc798f27e44950af aka
          "${User.name}"
        </p>
        <p>Quantum Processor Unit (QPU)  #0</p>
        <p>Net worth:                    p0</p>
        <p>Total QPUs in QNET:           q1</p>

        {/* bootstrap player to next level */}
        <p>for a list of builtin CRASH utils, use the 'utils' command</p>
        <h4>and remember... RTFM (Read the F%^*ing Manual)</h4>
      </div>
    );
  }
};
