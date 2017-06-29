require('seneca')()
  .client(8080)
  .act({role: 'article', cmd: 'get'}, console.log);