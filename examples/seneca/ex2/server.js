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


function articlesFn(options) {
    this.add({role:'article',cmd:'get'}, controller.getAll);
}

require('seneca')()
    .use(articlesFn)
    .listen(8080);