import React from 'react';

export default class TerminalError extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    return(
      <div className="flex flex-row db monospace w-100">
        <span className="dib pr2 w1" style={{flexBasis: '58px'}}>-bash: </span>
        <span className="flex-auto">{this.props.message}: command not found. (try `help`)</span>
      </div>
    )
  }  
}
