import React from 'react';
import ReactDOM from 'react-dom';

import TerminalApp from './app.tsx';

// const converter = new showdown.Converter()

const startupMessages = [
  {content: `booting ooonix 1.0...`, type: 'message'},
  {content: `Today's date: January 1, 1970, midnight`, type: 'message'},
  {content: `Timestamp: 0`, type: 'message'}
]

let element = document.createElement('div');
element.id ='demoContainer';
document.body.appendChild(element);

ReactDOM.render(
  <TerminalApp startupMessages={startupMessages} />, 
	document.getElementById('demoContainer')
);