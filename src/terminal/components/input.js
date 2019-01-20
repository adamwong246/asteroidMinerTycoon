import React from 'react';

export default class TerminalInput extends React.Component {
   
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