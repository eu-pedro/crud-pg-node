const express = require('express');
const routes = express.Router();

const AlunoController = require('./controllers/AlunoController')



routes.get('/aluno', AlunoController.index)
routes.post('/aluno', AlunoController.create)
routes.put('/aluno/:id', AlunoController.update)

module.exports = routes;
