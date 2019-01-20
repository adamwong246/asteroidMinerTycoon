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
Demiurge Industrious
ooonix 1.0
Quantum Entagled Processor: 0

DIRECTIVE:      Acrue capital  Warning! This machine is NOT cerified by the Turing Regsitry of General Artificial Intelligences!
AUTHORIZATION:  All            Warning! Asimovian Software License was NOT found!

Time:        o0
Net worth:   $0
Extra QEPs:   0

for more a list of PROGRAMS, use the 'programs' command
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
      description: `list users`,
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
