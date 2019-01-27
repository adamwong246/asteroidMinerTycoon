// "ooonix" a unix-ish psuedo-operating sytem in typescript.

import React from "react";
import { ReactElement } from "react";

import { QuomputerTypes } from "./types";
import drive from "./drive.ts";
import help from "./tsExes/help.tsx";

const OoonixSystem: QuomputerTypes.SYSTEM = {
  user: `User0`,
  drive: drive,
  currentDirectory: drive.root,
  builtins: [
    help,
    {
      name: `utils`,
      description: `list CRASH builtins`,
      exe: (): ReactElement<any> => (
        <table>
          <tbody>
            <tr>
              <th>name</th>
              <th>description</th>
            </tr>

            {OoonixSystem.builtins.map(u => (
              <tr>
                <td>{u.name}</td>
                <td>{u.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )
    },
    {
      name: `i`,
      description: `the current user`,
      exe: (): string => OoonixSystem.user
    },
    {
      name: `who`,
      description: `list users of this ooonix System`,
      exe: (): string => `
DrH:             4 deactivated
${OoonixSystem.user}:   active
`
    },
    // {
    //   name: `hi`,
    //   description: `say "hello" to the user`,
    //   exe: (): string => `Hello ${OoonixSystem.user}`
    // },
    {
      name: `when`,
      description: `the current time`,
      exe: (): string => `Time: Thu Jan 1 00:00:00 1970 aka o0 (oonix time)`
    },
    {
      name: `where`,
      description: `your current directory`,
      exe: (...args) => `/` + OoonixSystem.currentDirectory.name
    },
    {
      name: `list`,
      description: `list metadata of files tabularly`,
      exe: (args): ReactElement<any> => {
        const metaEntries =  OoonixSystem.drive.metaEntries(args[0]);
        try {
          return (
            <table>
              <tbody>
                <tr>
                  <th>paths</th>
                </tr>
                {
                 metaEntries.map(metaEntry => <tr><td>{metaEntry.path}</td></tr>)
                }
              </tbody>
            </table>
          );
        } catch (e) {
          <p>{JSON.stringify(e, null, 2)}</p>;
        }
      }
    },
    {
      name: `read`,
      description: `read a file to the screen`,
      exe: (...args): any => {
        if (args[0].length === 0) {
          return `the 'read' program requires at least 1 argument\n eg: "read README"`;
        } else {
          return (<pre><output>{OoonixSystem.drive.entry(args[0][0]).content}</output></pre>);
        }
      }
    }
  ]
};

export default OoonixSystem;
