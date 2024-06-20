import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import { BrowserRouter } from 'react-router-dom'
import { ShoppingState } from './components/context/shopping/ShoppingStat.js';

ReactDOM.render(
  < BrowserRouter >
      <ShoppingState>
        <App />
      </ShoppingState>
  </BrowserRouter>,
  document.getElementById('root'));
