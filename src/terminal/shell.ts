import system from "./system.ts";

interface MESSAGE { content: string; type: string; }

const findProgram = (cmd: string): false | Function => {
  const words = cmd.split(` `);
  const commandName = words[0];

  const program = system.programs.filter(lmnt => lmnt.name === commandName)[0];
  if (program === undefined) {
    return false;
  } else {
    return program.exe;
  }
};

export default (cmd): { messages: MESSAGE[]; showSpinner: boolean } => {
  const parsed = cmd.trim().split(` `);
  const rgz = parsed.slice(1);
  let messages = [{ content: cmd, type: "command" }],
    showSpinner = false;

  const program = findProgram(cmd);
  if (program === false) {
    messages.push({ content: cmd, type: "error" });
  } else {
    const content = program(rgz);
    messages.push({ content: content, type: "message" });
  }
  return { messages, showSpinner };
};
