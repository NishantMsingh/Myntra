import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import CartProvider from './context/ContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <CartProvider>
    <App />
  </CartProvider>
);
