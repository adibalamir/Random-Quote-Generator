import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { connect } from 'react-redux'
import quotes from './reducers'

const api = axios.create({
  baseURL: 'http://localhost:8080',
});
class App extends Component {
  getQuote = () => {
    api.get(`/get_quote`)
      .then(res => {
      if (typeof res.data === 'string') {
        this.props.fetchQuoteFailed()
      } else {
        this.props.fetchQuoteSuccessfully({
          text: res.data.quoteText,
          author: res.data.quoteAuthor
        })
    }
  })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
