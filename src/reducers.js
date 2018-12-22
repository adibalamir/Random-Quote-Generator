const initalState = {
  hasFailed: false,
  quote: {
    text: '',
    author: ''
  }
}

const quotes = (state = initalState, action) => {
  switch (action.type) {
    case 'FETCHING_QUOTE_SUCCEEDED':
      return {
        quote: action.quote,
        hasFailed: false
      }
    case 'FETCHING_QUOTE_FAILED':
      return {
        quote: {
          text: '',
          author: ''
        },
        hasFailed: true
      }
    default:
      return state
  }
}

export default quotes