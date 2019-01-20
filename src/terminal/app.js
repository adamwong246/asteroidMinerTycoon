import React from 'react';
import ReactDOM from 'react-dom';

import TerminalMessage from './components/message';
import TerminalError from './components/error';
import TerminalCommand from './components/command';
import TerminalInput from './components/input';

const validCmd = {
  'hello': 'hello world',
  'help': () => {
    return 'Programs: \n- ' + Object.keys(validCmd).join('\n- ');
  },
  'ls': 'README'
}

function encodeHTML(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
}

class TerminalHistory extends React.Component {
 
  constructor(props) {
    super(props);

  }
  
  componentDidUpdate() {
    this.scrollToBottom();
  }
  
  scrollToBottom() {
    const node = ReactDOM.findDOMNode(this.messagesEnd);
    node.scrollIntoView({behavior: "smooth"});
  }
  
  render() {
    return(
      <div>
        {this.props.children}
        {this.props.messages.map((message, i) => {
          if(this.props.updating == true && i == this.props.messages.length - 1) {
            return(
              <span className="dib loading-stepped">|</span>
            )
          }
          if(message.type == "command") {
            return(
              <TerminalCommand message={message.content} />              
            )
          } else if(message.type == "error") {
            return(
              <TerminalError message={message.content} />
            )
          } else {
            return(
              <TerminalMessage message={message.content} />
            )
          }
        })}
        <div ref={(el) => { this.messagesEnd = el; }}></div>
      </div>
    )
  } 
}

class TerminalUI extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  focusElement() {
    this.messagesInput.focus();
  }
  
  handleReturn(e) {
    if (e.keyCode == 13) {
      e.preventDefault();
      const node = ReactDOM.findDOMNode(this.messagesInput);
      this.props.doCommand(node.value);
    }
}
  
  updateMessageOutput(event) {
    var node = ReactDOM.findDOMNode(this.messagesInput);
    this.props.updateUserInput(node.value);
  }
  
  render() {
    return(
      <div className="bg-green dark-gray center mw7 h5 pa3 overflow-x-hidden overflow-y-scroll" onClick={this.focusElement.bind(this)}>
        <pre className="border-box w-100 h-100 lh-copy ma0">
          <TerminalHistory messages={this.props.messages} updating={this.props.updating}>
          </TerminalHistory>
          <TerminalInput input={this.props.input} />
        </pre>
        <input type="text" value={this.props.input} ref={(el) => { this.messagesInput = el; }} onChange={this.updateMessageOutput.bind(this)} onKeyDown={this.handleReturn.bind(this)} className="absolute absolute-fill" style={{zIndex: -1}} />

       </div>
    )
  }  
}

export default class TerminalApp extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      messages: (props.startupMessages !== undefined) ? props.startupMessages : [],
      userInput: props.startupInput,
      updating: false
     }
    
  }
  
  componentDidUpdate() {
    if(this.state.updating == true) {
      let duration = Math.floor((Math.random() * 300) + 1000);
      setTimeout(() => {
        this.setState({updating: false})
      }, duration);
      
    }
  }
  
  updateUserInput(input) {
    let sanitizedInput = encodeHTML(input);
    this.setState({
      userInput: sanitizedInput
    })
 
  }
  
  addMessages(message, showSpinner = false) {
    let messages = this.state.messages;

    if(Array.isArray(message) == true) {
      message.map((msg) => {
        messages.push(msg);
      });
                    
    } else {
      messages.push(message);
      
    }
    
    this.setState({messages: messages, userInput: '', updating: showSpinner})
  }
  
  doCommand(cmd) {
    console.log(cmd);
    let messages = [{content: cmd, type: 'command'}],
        showSpinner = false,
        responseIndex = Object.keys(validCmd).indexOf(cmd);
    
    // if it's NOT an error
    if(responseIndex !== -1) {
      let i = Object.keys(validCmd)[responseIndex];
      let response = validCmd[i];
      let content =  typeof response === 'function' ? response() : response;
      console.log(content);

      messages.push({content: content, type: 'message'});
      showSpinner = true;
      
    } else {
      messages.push({content: cmd, type: 'error'});
      
    }
    
    if(cmd == 'help')
      showSpinner = false;
    
    this.addMessages(messages, showSpinner);
  }

  render() {  
    return(
        <TerminalUI input={this.state.userInput} 
                    messages={this.state.messages}
                    updating={this.state.updating}
                    updateUserInput={this.updateUserInput.bind(this)}
                    doCommand={this.doCommand.bind(this)} />
    )
  }
  
}