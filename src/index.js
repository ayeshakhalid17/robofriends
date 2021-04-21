import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import {robots} from '../components/robots.js'
import App from './containers/App.js'
import reportWebVitals from './reportWebVitals';
import 'tachyons'

ReactDOM.render(
  <div className="tc">
    <App/>
  </div>,
  document.getElementById('root')
);
reportWebVitals();
