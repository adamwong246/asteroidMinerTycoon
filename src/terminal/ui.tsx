import React from "react";
import ReactDOM from "react-dom";

import TerminalInput from "./components/input.js";
import TerminalHistory from "./history.tsx";

export default class TerminalUI extends React.Component<
  {
    messages: string[];
    updating: boolean;
    doCommand: Function;
    updateUserInput: Function;
    input: string;
  },
  {}
> {
  constructor(props) {
    super(props);
    this.state = { input: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ input: event.target.value });
  }

  messagesInput;

  focusElement() {
    this.messagesInput.focus();
  }

  handleReturn(e) {
    if (e.keyCode == 13) {
      e.preventDefault();
      const node = ReactDOM.findDOMNode(this.messagesInput) as HTMLInputElement;
      this.props.doCommand(node.value);
    }
  }

  updateMessageOutput(event) {
    var node = ReactDOM.findDOMNode(this.messagesInput) as HTMLInputElement;
    this.props.updateUserInput(node.value);
  }

  render() {
    return (
      <div
        className="bg-green dark-gray center mw7 h5 pa3 overflow-x-hidden overflow-y-scroll"
        onClick={this.focusElement.bind(this)}
      >
        <pre className="border-box w-100 h-100 lh-copy ma0">
          <TerminalHistory
            messages={this.props.messages}
            updating={this.props.updating}
          />
          <TerminalInput input={this.props.input} />
        </pre>
        <input
          type="text"
          value={this.props.input}
          ref={el => {
            this.messagesInput = el;
          }}
          onChange={this.updateMessageOutput.bind(this)}
          onKeyDown={this.handleReturn.bind(this)}
          className="absolute absolute-fill"
          style={{ zIndex: -1 }}
        />
      </div>
    );
  }
}
