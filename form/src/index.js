import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // Make sure to import BrowserRouter
import './index.css'
import App from './App'; // Replace 'App' with the entry component of your application

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);






