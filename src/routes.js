const express = require('express');
const routes = express.Router();

const AlunoController = require('./controllers/AlunoController')



routes.get('/aluno', AlunoController.index )

module.exports = routes;
