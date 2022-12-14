const express = require('express');
const routes = express.Router();

const AlunoController = require('./controllers/AlunoController')
const CursoController = require('./controllers/CursoController.js')


routes
    // aluno
    .get('/aluno', AlunoController.index)
    .post('/aluno', AlunoController.create)
    .put('/aluno/:id', AlunoController.update)
    // curso 
    .get('/curso', CursoController.index)

module.exports = routes;
