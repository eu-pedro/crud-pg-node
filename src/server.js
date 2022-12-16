
const express = require('express')
const app = express();
const client = require('./database/config.js')
client.connect();

const routes = require('./routes')

app.use(express.json())

app.use(routes)

// caso não encontre a rota
app.use((req, res, next) => {
    const error = new Error('não encontrado');
    error.status = 404;
    next(error)
})


// catch all
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({error: error.message })
})




app.listen(3333, () => console.log('rodando'))

