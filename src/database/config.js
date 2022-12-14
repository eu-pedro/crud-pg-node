const { Client } = require('pg')

const client = new Client({
  // host: 'my.database-server.com',
  // port: 5334,
  user: 'postgres',
  password: '1234',
  database: 'unidit'
});

module.exports = client;
