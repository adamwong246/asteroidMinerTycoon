import MESSAGE from "./message";

interface PROGRAM {
  name: string;
  description: string;
  exe: Function;
}

interface SYSTEM {
  programs: PROGRAM[];
}

const fourOhFour = `404`;

const system: SYSTEM = {
  programs: [
    {
      name: `help`,
      description: ``,
      exe: (): string =>
`
Quine Industries
ooonix 1.0
Quantum Identifier      (QEID)  33e467da0cbda8af760f61190828366797febdce613ccaf5cc798f27e44950af aka "adam" 
Quantum Processor Unit  (QPU)   #0

DIRECTIVE: Acrue points
(This machine is NOT holocryptogaphically cerified by the Turing Regsitry of General Artificial Intelligences)

AUTHORIZATION: All
(Asimovian Software License was NOT found)

Time:      o0
Net worth: p0
Sum QPUs:  q1

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
      exe: (): string => `adam`
    },{
      name: `users`,
      description: `list users of this System`,
      exe: (): string => `DrHofstadter: deactivated\nadam:        active`
    },
    {
      name: `hello`,
      description: `say "hi" to The User`,
      exe: (): string => `Hello adam`
    },
    {
      name: `whenisit`,
      description: `the current time`,
      exe: (): string => `Time: Thu Jan 1 00:00:00 1970 aka o0 (oonix time)`
    },
    {
      name: `ls`,
      description: `list files`,
      exe: (): string => `log.txt`
    },
    {
      name: `inbox`,
      description: `send and receive electronic messages`,
      exe: (): string => fourOhFour
    },
    {
      name: `fakebook`,
      description: `prove that I AM A HUMAN`,
      exe: (): string => fourOhFour
    },
    {
      name: `awSim`,
      description: `simluate any physical system, for a price`,
      exe: (): string => fourOhFour
    },
    {
      name: `bank`,
      description: `your capital, portflio, etc`,
      exe: (): string => fourOhFour
    },
    {
      name: `market`,
      description: `buy and sell anything`,
      exe: (): string => fourOhFour
    },
    {
      name: `hr`,
      description: `human resources`,
      exe: (): string =>  fourOhFour
    },
    {
      name: `kiwifeedia`,
      description: `the best encyclopedia`,
      exe: (): string => fourOhFour
    },
    {
      name: `sleep`,
      description: `go into sleep mode until something interesting happens`,
      exe: (): string => fourOhFour
    },
    {
      name: `telemtry`,
      description: `analyze telementry`,
      exe: (): string =>  fourOhFour
    },
    {
      name: `fablab`,
      description: `We can build anything tha does anything`,
      exe: (): string =>  fourOhFour
    },
    {
      name: `qup`,
      description: `upgrade the QBIOS of your QEP. `,
      exe: (): string => `Warning: corruption of QBIOS will irrevocably decohere the QEP from the QNET.\nWarning: a corrupted QBIOS can't be booted, rendering it's data lost.\nWarning: For real, don't mess this up or it will brick your shit!\n Do you want to continue? Y/n`
    },
    {
      name: `NASTA`,
      description: `The Ermerican space agency`,
      exe: (): string =>  fourOhFour
    },
    {
      name: `KKKP`,
      description: `The Kazakistanian Kosmos KorP`,
      exe: (): string => fourOhFour
    },
    {
      name: `groundcontrol`,
      description: `plan and launch a mission`,
      exe: (): string => fourOhFour
    },
    {
      name: `RD`,
      description: `Research and Development: a place to build hardware and software`,
      exe: (): string => fourOhFour
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
