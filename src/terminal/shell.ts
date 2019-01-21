import MESSAGE from "./message";

interface PROGRAM {
  name: string;
  description: string;
  exe: Function;
}

interface SYSTEM {
  programs: PROGRAM[];
}

const system: SYSTEM = {
  programs: [
    {
      name: `help`,
      description: ``,
      exe: (): string =>
`
Demiurge Industries
ooonix 1.0
Quantum Entagled Identifier (QEID)   "adam" 
Quantum Entagled Processor  (QEP)    #0

DIRECTIVE:       Acrue capital   (This machine is NOT cerified by the Turing Regsitry of General Artificial Intelligences)
AUTHORIZATION:   All             (Asimovian Software License was NOT found)

Time:        o0
Net worth:   $0
Sum QEPs:     1

for a list of more PROGRAMS, use the 'programs' command
`
    },

    {
      name: `programs`,
      description: `show installed and authorized PROGRAMS`,
      exe: (): string =>
        `programs: show installed and authorized PROGRAMS\n ${system.programs.reduce(
          (mm, lmnt, ndx) => `${mm}\n- ${lmnt.name} - ${lmnt.description}`,
          ``
        )}`
    },{
      name: `whoami`,
      description: `the current user`,
      exe: (): string => `User0`
    },{
      name: `users`,
      description: `list users of this System`,
      exe: (): string => `DrHofstadter: deactivated\nUser0:        active`
    },
    {
      name: `hello`,
      description: `say "hi" to The User`,
      exe: (): string => `Hello User0`
    },
    {
      name: `whenisit`,
      description: `the current time`,
      exe: (): string => `Time: Thu Jan 1 00:00:00 1970 aka o0 (oonix time)`
    },
    {
      name: `fakebook`,
      description: `send and recieve electronic messages`,
      exe: (): string => `Time: Thu Jan 1 00:00:00 1970 aka o0 (oonix time)`
    },
    {
      name: `awSim`,
      description: `simluate any physical system, for a price`,
      exe: (): string => `Time: Thu Jan 1 00:00:00 1970 aka o0 (oonix time)`
    },
    {
      name: `bank`,
      description: `your capital, portflio, etc`,
      exe: (): string => `Time: Thu Jan 1 00:00:00 1970 aka o0 (oonix time)`
    },
    {
      name: `market`,
      description: `buy and sell anything`,
      exe: (): string => `Time: Thu Jan 1 00:00:00 1970 aka o0 (oonix time)`
    },
    {
      name: `hr`,
      description: `human resources`,
      exe: (): string => `Time: Thu Jan 1 00:00:00 1970 aka o0 (oonix time)`
    },
    {
      name: `kiwifeedia`,
      description: `the best encyclopedia`,
      exe: (): string => `Time: Thu Jan 1 00:00:00 1970 aka o0 (oonix time)`
    },
    {
      name: `sleep`,
      description: `go into sleep mode until something interesting happens`,
      exe: (): string => `Time: Thu Jan 1 00:00:00 1970 aka o0 (oonix time)`
    }
  ]
};

const findProgram = (cmd: string): false | Function => {
  const program = system.programs.filter(lmnt => lmnt.name === cmd)[0];
  if (program === undefined) {
    return false;
  } else {
    return program.exe;
  }
};

export default (cmd): { messages: MESSAGE[]; showSpinner: boolean } => {
  let messages = [{ content: cmd, type: "command" }],
    showSpinner = false;

  const program = findProgram(cmd);
  if (program === false) {
    messages.push({ content: cmd, type: "error" });
  } else {
    const content = program();
    messages.push({ content: content, type: "message" });
  }
  return { messages, showSpinner };
};
