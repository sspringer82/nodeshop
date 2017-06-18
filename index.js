const express = require('express');
const router = require('./router');
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use(session({
  secret: 'nodeshop',
  resave: true,
  saveUninitialized: true
}));

app.set('view engine', 'ejs');

app.use(express.static('public'));

router(app);

app.listen(8080, () => {
  console.log('Server listening to http://localhost:8080');
});