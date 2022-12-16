const express = require('express');
const routes = express.Router();

const AlunoController = require('./controllers/AlunoController')
const CursoController = require('./controllers/CursoController.js')


routes
    // aluno
    .get('/aluno', AlunoController.index)
    .post('/aluno', AlunoController.create)
    .put('/aluno/:id', AlunoController.update)
    .delete('/aluno/:id', AlunoController.delete)
    // curso
    .get('/curso', CursoController.index)
    .post('/curso', CursoController.create)
    .put('/curso/:id', CursoController.update)
    .delete('/curso/:id', CursoController.delete)

module.exports = routes;
