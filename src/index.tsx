import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import { App, AppContext } from './App';
import { Navigator } from './navigation/Navigator';
import reportWebVitals from './reportWebVitals';

const navigator = new Navigator(window.location, window.history, window);

ReactDOM.render(
  <AppContext navigator={navigator}>
    <App />
  </AppContext>,
  document.querySelector('.Root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
