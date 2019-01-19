import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';

import './term.jsx';
import './style.css';

function component() {
  let element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'world'], ' ');
  element.classList.add('hello');

  return element;
}
function component2() {
  let element = document.createElement('div');
  element.id ='demoContainer';

  return element;
}
document.body.appendChild(component());
document.body.appendChild(component2());



const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('demoContainer')
);