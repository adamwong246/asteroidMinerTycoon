import React from "react";
import ReactDOM from "react-dom";

import TerminalUI from "./ui.tsx";
import Shell from "./shell.ts";

function encodeHTML(s) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/"/g, "&quot;");
}

export default class TerminalApp extends React.Component<
  {
    startupMessages: string[];
  },
  {
    updating: boolean;
    messages: string[];
    userInput: string;
  }
> {
  constructor(props) {
    super(props);
    this.state = {
      messages:
        props.startupMessages !== undefined ? props.startupMessages : [],
      userInput: props.startupInput,
      updating: false
    };
  }

  updateUserInput(input: string): void {
    let sanitizedInput = encodeHTML(input);
    this.setState({
      userInput: sanitizedInput
    });
  }

  addMessages(message, showSpinner = false) {
    let messages = this.state.messages;

    if (Array.isArray(message) == true) {
      message.map(msg => {
        messages.push(msg);
      });
    } else {
      messages.push(message);
    }

    this.setState({ messages: messages, userInput: "", updating: showSpinner });
  }

  doCommand(cmd: string) {
    const command = Shell(cmd);
    this.addMessages(command.messages);
  }

  render() {
    return (
      <TerminalUI
        input={this.state.userInput}
        messages={this.state.messages}
        updating={this.state.updating}
        updateUserInput={this.updateUserInput.bind(this)}
        doCommand={this.doCommand.bind(this)}
      />
    );
  }
}
