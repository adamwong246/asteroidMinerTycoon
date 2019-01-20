const validCmd = {
  'help': () => {
    return 'Programs: \n- ' + Object.keys(validCmd).join('\n- ');
  },
  'pacman': 'package manager',
  'email': 'Check your email',
  'contacts': 'people you know',
  'classifieds': 'find a job',
  'HR': 'hire and fire',
  'stock market': '$$$',
  'bank': 'more $$$',
  'kiwifeedia': 'wiki',
  'awsim': 'simulator',
  'fablab': 'buy a thing',
  'sleep': 'wait for a while'
}

export default (cmd) => {
  let messages = [{ content: cmd, type: "command" }],
    showSpinner = false,
    responseIndex = Object.keys(validCmd).indexOf(cmd);

  // if it's NOT an error
  if (responseIndex !== -1) {
    let i = Object.keys(validCmd)[responseIndex];
    let response = validCmd[i];
    let content = typeof response === "function" ? response() : response;

    messages.push({ content: content, type: "message" });
    showSpinner = true;
  } else {
    messages.push({ content: cmd, type: "error" });
  }

  if (cmd == "help") showSpinner = false;

  return({messages, showSpinner});
};
