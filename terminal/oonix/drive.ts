// a simulated file drive

import { QuomputerTypes } from "./types";

import root from "./root.tsx";

const recurs = (root, fileName: string = `/`): QuomputerTypes.FILE => {
  // the path, split, on slashes, from a string, into an array of strings
  const parsedPath: string[] = fileName.split(`/`);

  //
  const foundFile: QuomputerTypes.FILE = root.files.filter(
    f => f.name === fileName
  )[0];

  // if none are found, we need to find the matching parent
  if (foundFile === undefined) {
    // look for matching folders in the currently searched dir
    const filePathsFirstFolder: string =
      parsedPath[0] === `` ? `/` : parsedPath[0];
    console.log(
      `no file matches path. Checking for folder of name "${filePathsFirstFolder}"`
    );

    if (filePathsFirstFolder === `/`) {
      return root;
    }

    const foundFolder = root.folders.filter(
      f => f.name === filePathsFirstFolder
    )[0];

    if (foundFolder === undefined) {
      // throw oooErrors.FileNotFound(drive.name, fileName);
      // // throw new Error(
      // //   `the file system couldn't find a file for the path "${fileName}"`
      // // );
    } else {
      return recurs(foundFolder, parsedPath.slice(-1, 1).join(`/`));
    }
  } else {
    return foundFile;
  }
};

const recursMap = (pointer, mapper: any, memo: []): any => {
  const files: QuomputerTypes.FILE[] = pointer.files;
  const folders: QuomputerTypes.FOLDER[] = pointer.folders;
  return files
    .map(mapper)
    .concat(
      folders.map(mapper).map((e: { path: string }, i) => {
        return { path: e.path + "/" };
      })
    )
    .concat(memo);
};
const drive: QuomputerTypes.FILE_SYSTEM = {
  name: `hofstadters video games`,
  root: root,
  entry: (path: string): QuomputerTypes.FILE => {
    return recurs(root, path);
  },
  metaEntries: (path: string = `/`): QuomputerTypes.METAFILE[] => {
    const pointer: any = recurs(root, path);
    const tabularMetaEntries = recursMap(
      pointer,
      fl => {
        return { path: `${path}${fl.name}` };
      },
      []
    );
    return tabularMetaEntries;
  }
};

export default drive;
