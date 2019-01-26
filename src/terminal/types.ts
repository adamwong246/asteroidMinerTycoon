export module QuomputerTypes {

  interface PROGRAM {
    name: string;
    description: string;
    exe: Function;
  }
  
  export interface METAFILE {
    path: string;
  }

  export interface FILE {
    name: string;
    content: string;
  }

  export interface ROOT_FOLDER {
    name?: string;
    folders: FOLDER[];
    files: FILE[];
  }
  
  export interface FOLDER {
    name?: string;
    folders: FOLDER[];
    files: FILE[];
  }
  
  export interface FILE_SYSTEM {
    name?: string;
    root: FOLDER;
    metaEntries: Function;
    entry: Function;
  }
  
  export interface SYSTEM {
    programs: PROGRAM[];
    user: string;
    currentDirectory: FOLDER;
    drive: FILE_SYSTEM;
  }
};