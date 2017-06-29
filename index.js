const express = require('express');
const router = require('./router');
const spdy = require('spdy');
const fs = require('fs');

const app = express();
app.set('view engine', 'ejs');

router(app);

const options = {
    key: fs.readFileSync('./cert/key.pem'),
    cert: fs.readFileSync('./cert/cert.pem')
};
spdy.createServer(options, app).listen(8080, () => {
    console.log('Listening to https://localhost:8080');
});