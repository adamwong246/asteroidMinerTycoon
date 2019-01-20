import React from 'react';

export default class TerminalError extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    return(
      <div className="flex flex-row db monospace w-100">
        <span className="flex-auto">'{this.props.message}' command not found. (try 'help')</span>
      </div>
    )
  }  
}
