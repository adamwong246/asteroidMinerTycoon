import React from "react";
import ReactDOM from "react-dom";

import TerminalMessage from "./components/message";
import TerminalError from "./components/error";
import TerminalCommand from "./components/command";

export default class extends React.Component<
  { messages: any[]; updating: boolean },
  {}
> {
  constructor(props) {
    super(props);
  }

  messagesEnd;

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    const node = ReactDOM.findDOMNode(this.messagesEnd) as HTMLElement;
    node.scrollIntoView({ behavior: "smooth" });
  }

  render() {
    return (
      <div>
        {this.props.children}
        {this.props.messages.map((message, i) => {
          if (
            this.props.updating == true &&
            i == this.props.messages.length - 1
          ) {
            return <span className="dib loading-stepped">|</span>;
          }
          if (message.type == "command") {
            return <TerminalCommand message={message.content} />;
          } else if (message.type == "error") {
            return <TerminalError message={message.content} />;
          } else {
            return <TerminalMessage message={message.content} />;
          }
        })}
        <div
          ref={el => {
            this.messagesEnd = el;
          }}
        />
      </div>
    );
  }
}
