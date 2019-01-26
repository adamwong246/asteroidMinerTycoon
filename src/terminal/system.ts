import { QuomputerTypes } from "./types";

import User from "../user.ts";

// import ERROR from "./errors.ts";
import help from "./utils/help.tsx";
import root from "./root.ts";


const recurs = (root, fileName): QuomputerTypes.FILE => {
  const parsed = fileName.split(`/`);
  const foundFile = root.files.filter(f => f.name === fileName)[0];

  // if none are found, we need to find the matching parent
  if (foundFile === undefined) {
    // look for matching folders in the currently searched dir
    const filePathsFirstFolder = parsed[0];
    const foundFolder = root.folders.filter(
      f => f.name === filePathsFirstFolder
    )[0];

    if (foundFolder === undefined) {
      throw new Error(
        `the file system couldn't find a file for the path "${fileName}"`
      );
    } else {
      return recurs(foundFolder, parsed.slice(-1, 1).join(`/`));
    }
  } else {
    return foundFile;
  }
};

const recursMap = (root, mapper: Function): QuomputerTypes.METAFILE[] => {
  return root.files.map(f => {localname: f.name}) + root.folder.map(f => {localname: f.name});
  // const parsed = fileName.split(`/`);
  // const foundFile = root.files.filter(f => f.name === fileName)[0];

  // // if none are found, we need to find the matching parent
  // if (foundFile === undefined) {
  //   // look for matching folders in the currently searched dir
  //   const filePathsFirstFolder = parsed[0];
  //   const foundFolder = root.folders.filter(
  //     f => f.name === filePathsFirstFolder
  //   )[0];

  //   if (foundFolder === undefined) {
  //     throw new Error(
  //       `the file system couldn't find a file for the path "${fileName}"`
  //     );
  //   } else {
  //     return recurs(foundFolder, parsed.slice(-1, 1).join(`/`));
  //   }
  // } else {
  //   return foundFile;
  // }
};
const drive = {
  name: `hofstadters video games`,
  root: root,
  entry: (path: string): QuomputerTypes.FILE => {
    return recurs(system.drive.root, path);
  },
  metaEntries: (path: string): QuomputerTypes.METAFILE[] => {
    const pointer = recurs(system.drive.root, path);

    return recursMap(pointer, (fl) => {
      path: `${path}${fl.localpath}`;
    });

    // const recurs = (root: QuomputerTypes.ROOT_FOLDER, fileName: string): QuomputerTypes.FOLDER => {
    //   const parsed = fileName.split(`/`);
    //   const foundFile = root.files.filter(f => f.name === fileName)[0];

    //   // if none are found, we need to find the matching parent
    //   if (foundFile === undefined) {
    //     // look for matching folders in the currently searched dir
    //     const filePathsFirstFolder = parsed[0];
    //     console.log("first: " + filePathsFirstFolder);
    //     const foundFolder = root.folders.filter(
    //       f => f.name === filePathsFirstFolder
    //     )[0];
    //     console.log("found: " + JSON.stringify(foundFolder));

    //     if (foundFolder === undefined) {
    //       throw ERROR.FS_NOT_FOUND(fileName);
    //     } else {
    //       return recurs(foundFolder, parsed.slice(-1, 1).join(`/`));
    //     }
    //   } else {
    //     return foundFile;
    //   }
    // };
    // return recurs(system.drive.root, path);
  }
};

const system: QuomputerTypes.SYSTEM = {
  user: User.name,
  drive: drive,
  currentDirectory: drive.root,
  programs: [
    help,
    {
      name: `programs`,
      description: `show installed and authorized PROGRAMS`,
      exe: (): string =>
        `programs: show installed and authorized PROGRAMS\n ${system.programs.reduce(
          (mm, lmnt) => `${mm}\n- ${lmnt.name} - ${lmnt.description}`,
          ``
        )}`
    },
    {
      name: `i`,
      description: `the current user`,
      exe: (): string => system.user
    },
    {
      name: `who`,
      description: `list users of this System`,
      exe: (): string => `
DrH:              deactivated
${system.user}:   active
`
    },
    {
      name: `hi`,
      description: `say "hello" to the user`,
      exe: (): string => `Hello ${system.user}`
    },
    {
      name: `when`,
      description: `the current time`,
      exe: (): string => `Time: Thu Jan 1 00:00:00 1970 aka o0 (oonix time)`
    },
    {
      name: `where`,
      description: `your current directory`,
      exe: (...args) => `/` + system.currentDirectory.name
    },
    {
      name: `list`,
      description: `view files as a metadata set`,
      exe: (...args): string => {
        return system.drive.metaEntries(args[0][0]).map(metaEntry => {
          if (metaEntry.isFolder) {
            return ` ${metaEntry.name}/`;
          } else {
            return ` ${metaEntry.name}`;
          }
        });
      }
    },
    {
      name: `read`,
      description: `read a file to the screen`,
      exe: (...args): string => {
        if (args[0].length === 0) {
          return `the 'read' program requires at least 1 argument\n eg: read log.txt`;
        } else {
          return system.drive.entry(args[0][0]).content;
        }
      }
    }
  ]
};

export default system;
