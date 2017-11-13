import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CountUP from './container/container';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <CountUP />,
  document.getElementById('root')
);
registerServiceWorker();
