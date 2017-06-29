const articles = [
  {id: 1, title: 'Messer'},
  {id: 2, title: 'Gabel'},
  {id: 3, title: 'Schere'},
  {id: 4, title: 'Licht'},
];

const controller = {
  getAll(msg, reply) {
      reply(null, articles);
  }
}
const seneca = require('seneca')();
seneca.add('role:article,cmd:get', controller.getAll);

seneca.act({role: 'article', cmd: 'get'}, (err, result) => {
  if (err) {
      return console.error(err);
  }
  console.log(result);
});