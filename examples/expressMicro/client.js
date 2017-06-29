const request = require('request');

const options = {
  uri: 'http://localhost:8080/user',
  method: 'POST',
  json: {
    name: 'Klaus',
    age: 42
  }
};

request(options, (err, res, body) => {
  console.log(err);
  console.log(res);
  console.log(body);
});

const options2 = {
  uri: 'http://localhost:8080/user',
  method: 'GET'
};

request(options2, (err, res, body) => {
  console.log(err);
  console.log(res);
  console.log(body);
});