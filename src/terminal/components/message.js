import React from 'react';

export default class TerminalMessage extends React.Component {
  
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