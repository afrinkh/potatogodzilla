import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import HeaderRoute from './pages/header/headerRouter';
ReactDOM.render(
    <App />,
  document.getElementById('root')
);
ReactDOM.render(
    <HeaderRoute />,
  document.getElementById('header')
);
