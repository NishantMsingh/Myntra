import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store/store';
import { Provider } from 'react-redux';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <Provider store={store}>
    <App />
  </Provider>);
