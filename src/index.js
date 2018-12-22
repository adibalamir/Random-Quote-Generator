import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider as Redux } from 'react-redux'
import { createStore } from 'redux'
import quotes from './reducers'

const store = createStore(quotes)

ReactDOM.render(
  <Redux store={store}>
    <App />
  </Redux>
, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
