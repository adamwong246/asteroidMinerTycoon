import React from 'react';
import ReactDOM from 'react-dom';

// const converter = new showdown.Converter()

const validCmd = {
  'help': 'You can get started by typing *npm i hugo -g*',
  'ls': 'README',
  'cat README': `Supported commands:
    - help
    - ls
    - cat README (you're here)
    - npm
    - npm i hugo -g
    - tree
  `,
  'npm': `Usage: npm <command>

where <command> is one of:
    access, adduser, bin, bugs, c, cache, completion, config,
    ddp, dedupe, deprecate, dist-tag, docs, edit, explore, get,
    help, help-search, i, init, install, install-test, it, link,
    list, ln, login, logout, ls, outdated, owner, pack, ping,
    prefix, prune, publish, rb, rebuild, repo, restart, root,
    run, run-script, s, se, search, set, shrinkwrap, star,
    stars, start, stop, t, tag, team, test, tst, un, uninstall,
    unpublish, unstar, up, update, v, version, view, whoami

npm \<cmd\> -h     quick help on <cmd>
npm -l           display full usage info
npm help <term>  search for help on <term>
npm help npm     involved overview

Specify configs in the ini-formatted file:
    ~/.npmrc
or on the command line via: npm <command> --key value
Config info can be viewed via: npm help config

npm@3.10.10 /usr/local/lib/node_modules/npm`,
  'npm i': 'npm WARN enoent ENOENT: no such file or directory, open \'package.json\'',
  'npm i hugo -g': 
    `/usr/local/bin/hugo -> /usr/local/lib/node_modules/hugo/bin/cli.js
    └─┬ hugo@0.0.3 
  ├── async@0.2.10 
  ├─┬ color@0.4.4 
  │ ├── color-convert@0.2.1 
  │ └── color-string@0.1.3 
  ├── debug@0.7.4 
  ├── lodash@2.2.1 
  └─┬ request@2.27.0 
    ├── aws-sign@0.3.0 
    ├── cookie-jar@0.3.0 
    ├── forever-agent@0.5.2 
    ├─┬ form-data@0.1.4 
    │ ├── async@0.9.2 
    │ └─┬ combined-stream@0.0.7 
    │   └── delayed-stream@0.0.5 
    ├─┬ hawk@1.0.0 
    │ ├── boom@0.4.2 
    │ ├── cryptiles@0.2.2 
    │ ├── hoek@0.9.1 
    │ └── sntp@0.2.4 
    ├─┬ http-signature@0.10.1 
    │ ├── asn1@0.1.11 
    │ ├── assert-plus@0.1.5 
    │ └── ctype@0.5.3 
    ├── json-stringify-safe@5.0.1 
    ├── mime@1.2.11 
    ├── node-uuid@1.4.8 
    ├── oauth-sign@0.3.0 
    ├── qs@0.6.6 
    └── tunnel-agent@0.3.0`,
  'tree': `
\`\`\`
888                           
888                           
888                           
888888888d888 .d88b.  .d88b.  
888   888P"  d8P  Y8bd8P  Y8b 
888   888    8888888888888888 
Y88b. 888    Y8b.    Y8b.     
 "Y888888     "Y8888  "Y8888  
                   \`\`\``
}

const startupMessages = [
  {content: `Welcome to FoOnix 1.0.`, type: 'message'}
]

class TerminalApp extends React.Component {
  
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
    let messages = [{content: cmd, type: 'command'}],
        showSpinner = false,
        responseIndex = Object.keys(validCmd).indexOf(cmd);
    
    if(responseIndex !== -1) {
      let i = Object.keys(validCmd)[responseIndex];
      
      messages.push({content: validCmd[i], type: 'message'});
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

class TerminalMessage extends React.Component {
  
  constructor(props) {
    super(props);

  }
  
  render() {
    let message = this.props.message;//converter.makeHtml(encodeHTML());
    return(
      <div className="db white monospace pv3 w-100 tl">
        <span dangerouslySetInnerHTML={{ __html: message }}></span>
      </div>
    )
  }
  
}

class TerminalError extends React.Component {
  
  constructor(props) {
    super(props);

  }
  
  render() {
    return(
      <div className="flex flex-row db monospace w-100">
        <span className="dib pr2 w1" style={{flexBasis: '58px'}}>-bash: </span>
        <span className="flex-auto">{this.props.message}: command not found</span>
      </div>
    )
  }  
}

class TerminalCommand extends React.Component {
  
  constructor(props) {
    super(props);

  }
  
  render() {
    return(
      <div className="flex flex-row db monospace w-100">
        <span className="dib pr2 w1" style={{flexBasis: '4px'}}>$</span>
        <span className="flex-auto">{this.props.message}</span>
      </div>
    )
  }
}

class TerminalInput extends React.Component {
   
  constructor(props) {
    super(props);

  }
  
  render() {
    return(
      <div className="flex flex-row db monospace w-100">
        <span className="dib pr2" style={{flexBasis: '4px'}}>$</span>
        <span>{this.props.input}</span>
        <span className="animated infinite flash">|</span>
      </div>
    )
  }
  
}

function encodeHTML(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
}

let element = document.createElement('div');
element.id ='demoContainer';
document.body.appendChild(element);

ReactDOM.render(
	<TerminalApp startupMessages={startupMessages} />, 
	document.getElementById('demoContainer')
);

