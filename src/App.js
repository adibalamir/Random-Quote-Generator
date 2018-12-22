import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import { connect } from 'react-redux'
import quotes from './reducers'

const api = axios.create({
  baseURL: 'http://localhost:8080',
});

class App extends Component {

  componentDidMount() {
    this.getQuote()
  }

  componentDidUpdate() {
    if (this.props.hasFailed === true) {
      this.getQuote()
    }
  }

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
        <h1>{this.props.quote.text}</h1>
        <h2>~{this.props.quote.author}</h2>
        <button onClick={this.getQuote}>Refresh</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  hasFailed: state.hasFailed,
  quote: {
    text: state.quote.text,
    author: state.quote.author
  }
})

const mapDispatchToProps = (dispatch) => ({
  fetchQuoteSuccessfully: (quote) => dispatch({
    type: 'FETCHING_QUOTE_SUCCEEDED',
    quote
  }),
  fetchQuoteFailed: () => dispatch({
    type: 'FETCHING_QUOTE_FAILED',
    quote: {
      text: '',
      author: ''
    }
  })
})



export default connect(mapStateToProps, mapDispatchToProps)(App)
