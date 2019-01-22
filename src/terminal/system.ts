import help from "./utils/help.tsx";
import { QuomputerTypes } from "./types";
// import drive from './drive.ts';

const root: QuomputerTypes.ROOT_FOLDER = {
  files: [
    {
      name: `bootMessage.txt`,
      content: `Welcome to ooonix 1.0`
    },
    {
      name: `README`,
      content: `
        ========= ASTEROID MINER TYCOON ========
        - Escape From The Planet of the Humans -
        
            a computer game by Adam Wong
        `
    }
  ],
  folders: []
};

// const fsRecusiveFind = (
//   folder: QuomputerTypes.FOLDER | QuomputerTypes.ROOT_FOLDER | QuomputerTypes.FILE,
//   fileName: string
// ): (QuomputerTypes.FILE | QuomputerTypes.FOLDER) => {
//   console.log(folder);
//   console.log(fileName);

//   const parsed = fileName.split(`/`);
//   const filename = parsed.slice(-1)[0];

//   // look for matching files in the currently searched dir
//   // const foundFile = folder.files.filter(f => f.name === fileName)[0];

//   // if nonw are found, we need to find the matching parent
//   // if (foundFile === undefined) {
//   //   // look for matching folders in the currently searched dir
//   //   const filePathsFirstFolder = parsed[0];
//   //   // const foundFolder = folder.folders.filter(
//   //     // f => f.name === filePathsFirstFolder
//   //   // )[0];

//   //   if (foundFolder === undefined) {
//   //     throw new Error(`the file system couldn't find a file for the path "${fileName}"`);
//   //   } else {
//   //     return fsRecusiveFind(foundFolder, parsed.slice(-1, 1).join(`/`));
//   //   }
//   // } else {
//   //   return foundFile;
//   // }
// };

const drive = {
  name: `hofstadters video games`,
  root: root,
  // get a branch of a file system
  // getPointer: (filename: string): QuomputerTypes.FILE | QuomputerTypes.FOLDER => {
  //   try{
  //     return fsRecusiveFind(root, filename = `/`);
  //   } catch (e) {
  //     return e.message;
  //   }
  // },
  // // get a selection of files metadata
  // getMetadata: (filename: string): QuomputerTypes.FILE_METADATA_SET  => {
  //   try{
  //     const pointer = fsRecusiveFind(root, filename = `/`);

  //   } catch (e) {
  //     return e.message;
  //   }
  // },
  // // get a branch of a file system
  // getData: (filename: string): QuomputerTypes.FILE | QuomputerTypes.FOLDER => {
  //   try{
  //     const pointer = fsRecusiveFind(root, filename = `/`);
  //     // return pointer.content
  //   } catch (e) {
  //     return e.message;
  //   }
  // }
};

const system: QuomputerTypes.SYSTEM = {
  user: `adam`,
  drive: drive,
  currentDirectory: drive.root,
  programs: [
    help,
    {
      name: `programs`,
      description: `show installed and authorized PROGRAMS`,
      exe: (): string =>
        `programs: show installed and authorized PROGRAMS\n ${system.programs.reduce(
          (mm, lmnt, ndx) => `${mm}\n- ${lmnt.name} - ${lmnt.description}`,
          ``
        )}`
    },
    {
      name: `whoami`,
      description: `the current user`,
      exe: (): string => system.user
    },
    {
      name: `users`,
      description: `list users of this System`,
      exe: (): string => `DrHofstadter: deactivated\n${system.user}: active`
    },
    {
      name: `hello`,
      description: `say "hi" to The User`,
      exe: (): string => `Hello ${system.user}`
    },
    {
      name: `whenisit`,
      description: `the current time`,
      exe: (): string => `Time: Thu Jan 1 00:00:00 1970 aka o0 (oonix time)`
    },
    // {
    //   name: `pwd`,
    //   description: `your current directory`,
    //   exe: (...args) => `/` + system.currentDirectory.name
    // },
    // {
    //   name: `ls`,
    //   description: `list files`,
    //   exe: (...args): string => {
    //     const actualArgs = args[0];
    //     if (actualArgs.length === 0) {
    //       console.log(`actual args: ${actualArgs}`);
    //       const fileMetadata = system.drive.getMetadata(actualArgs[0]);
    //       const folders = fileMetadata.folders
    //         .map(r => {
    //           return ` ${r.name}`;
    //         })
    //         .join(`\n`);

    //       const files = fileMetadata.files
    //         .map(r => {
    //           return ` ${r.name}`;
    //         })
    //         .join(`\n`);

    //       return `folders:\n${folders}\nfiles:\n${files}`;
    //     } else if (actualArgs[0] === `log.txt`) {
    //       return system.drive.root.folders
    //         .map(r => {
    //           return r.name;
    //         })
    //         .join(`/ \n`);
    //     }
    //   }
    // },
    {
      name: `qup`,
      description: `upgrade the QBIOS of your QEP. `,
      exe: (): string =>
        `Warning: corruption of QBIOS will irrevocably decohere the QEP from the QNET.\nWarning: a corrupted QBIOS can't be booted, rendering it's data lost.\nWarning: For real, don't mess this up or it will brick your shit!\n Do you want to continue? Y/n`
    },
    // {
    //   name: `read`,
    //   description: `render text file to screen`,
    //   exe: (...args): string => {
    //     if (args[0].length === 0) {
    //       return `the 'read' program requires at least 1 argument\n eg: read log.txt`;
    //     } else {          
    //       try{
    //         // return system.drive.getData(args[0][0]);  
    //         return 
    //       } catch (e) {
    //         return e.message;
    //       }
    //     }
    //   }
    // }
  ]
};

export default system;
