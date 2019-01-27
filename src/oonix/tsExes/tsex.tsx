import React, { ReactElement } from "react";

import { QuomputerTypes } from "../types";

// "tsex" - does not have a clear life analogue but is perhaps more similar to an application launcher. It searchs for all executables and displays the results. 

const tsex: QuomputerTypes.PROGRAM = {
  name: `tsex`,
  description: `list all the tsexy files aka Typescript executables`,
  exe: (system: QuomputerTypes.SYSTEM, args: string[]): ReactElement<any> => {
    return (
      <div>
        {system.drive
          .metaEntries(args[0])
          .filter(metaEntry => metaEntry.isTsexy())
          .map(metaEntry => {
            return (
              <p>
                {metaEntry.name} - ${metaEntry.description} - ${metaEntry.path}
              </p>
            );
          })}
      </div>
    );
  }
};

export default tsex;
