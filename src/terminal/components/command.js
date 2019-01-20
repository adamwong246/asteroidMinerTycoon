import React from 'react';

export default class TerminalCommand extends React.Component {
  
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