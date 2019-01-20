import React from 'react';
import ReactDOM from 'react-dom';

import TerminalApp from './app.tsx';

let element = document.createElement('div');
element.id ='demoContainer';
document.body.appendChild(element);

ReactDOM.render(
  <TerminalApp startupMessages={[{content: `Welcome to ooonix!`, type: 'message'}]} />, 
	document.getElementById('demoContainer')
);