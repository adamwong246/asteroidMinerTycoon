// "Crash" is the in-game name of the bash style shell. Like it's real live counterpart, it has a small set of "builtins" but most programs are called by executing "tsexes".

import OoonixSystem from "./operatingSystem.tsx";

interface MESSAGE {
  content: string;
  type: string;
}

const findProgram = (cmd: string): null | Function => {
  const name = cmd.split(` `)[0];
  const builtins = OoonixSystem.builtins;
  const programs = builtins.filter(
    lmnt => lmnt.name === name
  );
  const program = programs[0];
  const toReturn = program ? program.exe : null;
  return toReturn;
};

export default (cmd): { messages: MESSAGE[]; showSpinner: boolean } => {
  const parsed = cmd.trim().split(` `);
  const rgz = parsed.slice(1);
  let messages = [{ content: cmd, type: "command" }],
    showSpinner = false;

  const program = findProgram(cmd);
  if (program === null) {
    messages.push({ content: cmd, type: "error" });
  } else {
    const content = program(rgz);
    messages.push({ content: content, type: "message" });
  }
  return { messages, showSpinner };
};
