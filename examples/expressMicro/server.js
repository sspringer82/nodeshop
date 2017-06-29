const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.get('/user', (req, res) => {
  res.send('hello world');
});
app.post('/user', (req, res) => {
  console.log(req.body);
  res.send('good morning');
});

app.listen(8080);