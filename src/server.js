
const express = require('express')
const app = express();
const client = require('./database/config.js')
client.connect();

const routes = require('./routes')

app.use(express.json())

app.use(routes)



app.listen(3333, () => console.log('rodando'))

