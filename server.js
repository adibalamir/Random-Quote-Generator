const express = require('express');
const app = express();
var request = require('request');

var allowCrossDomain = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  next();
}


app.use(allowCrossDomain);
app.get('/get_quote', (req, res) => {
  request('https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json', function(error, response, body) {
        res.send(body)
    });
});




app.listen(8080, () => console.log('Bitch, I\'m listening at 8080!'));