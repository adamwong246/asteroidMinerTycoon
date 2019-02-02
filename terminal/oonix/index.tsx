import React from "react";

import TerminalApp from "./terminal/app.tsx";

import Shell from "./shell.ts";


const app = (<TerminalApp 
  shell={Shell}
  startupMessages={[{ content: `Welcome to ooonix!`, type: "message" }]}
/>);

export default app;