const { Client } = require('pg')

const client = new Client({
  user: 'postgres',
  password: '0000',
  database: 'unidit'
});

module.exports = client;
