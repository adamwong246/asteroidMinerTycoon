export module QuomputerTypes {

  interface PROGRAM {
    name: string;
    description: string;
    exe: Function;
  }
  
  export interface FILE {
    name: string;
    content: string;
  }

  export interface FILE_METADATA_SET {
    set: [{
      name: string;
    }]
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
    root: ROOT_FOLDER;
    // getData: Function;//Promise<FILE|FOLDER|Error>;
    // getMetadata: Function;
  }
  
  export interface SYSTEM {
    programs: PROGRAM[];
    user: string;
    currentDirectory: FOLDER;
    drive: FILE_SYSTEM;
    // cpu: CPU;
    // board: BOARD;
    // aDrive?: FILE_SYSTEM
    // qpuSlot?: QPU
    // kernel: KERNEL;
  }
  
  export interface QPU {
    id: string;
    nickname: string;
  }
  
  export interface QNET {
    id: string;
    qpus: QPU[];
  };
};
