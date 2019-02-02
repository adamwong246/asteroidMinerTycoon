import { ReactElement } from "react";

export module QuomputerTypes {

  export interface PROGRAM {
    name: string;
    description: string;
    exe: Function;
  }
  
  export interface METAFILE {
    path: string;
  }

  export interface FILE {
    name: string;
    content: string | PROGRAM;
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
    builtins: PROGRAM[];
    user: string;
    currentDirectory: FOLDER;
    drive: FILE_SYSTEM;
  }
};