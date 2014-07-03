var Bookshelf  = require('bookshelf');
Bookshelf.PG = Bookshelf.initialize({
  client: 'pg',
  connection: {
    host     : '127.0.0.1',
    user     : 'dinero',
    password : 'dinero',
    database : 'dinero',
    charset  : 'utf8'
  },
  debug: true
});
