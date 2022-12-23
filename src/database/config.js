const { Client } = require('pg')

const client = new Client({
  user: 'postgres',
  password: '1234',
  database: 'unidit'
});

module.exports = client;
