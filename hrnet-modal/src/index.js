import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App'
import reportWebVitals from './reportWebVitals';
import Appstyle from './styles/appstyle.js';

ReactDOM.render(
  <React.StrictMode>
    <App /><Appstyle/>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
