const { query } = require('express')
const client = require('../database/config')

module.exports = {
  async index(req, res, next){
    try {

      const { cod_curso } = req.query

      let query = client.query('SELECT * FROM curso')

      if(cod_curso){
        query = client.query(`SELECT * FROM curso WHERE cod_curso = '${cod_curso}'`)
      }

      const results = await query;




      results.rows.forEach(element => {
        const localDate = new Date(element.data_cadastro)
        let date = `${localDate.getDate()}/${localDate.getMonth() + 1}/${localDate.getFullYear()}`

        element.data_cadastro = date
      });

      return res.status(200).json(results.rows)

    } catch (error) {
      next(error)
    }
  },
  async create(req, res, next){
    try {

      const { nome, carga_horaria } = req.body;


      const query = await client.query(`INSERT INTO curso(nome, carga_horaria) VALUES('${nome}', '${carga_horaria}')`)

      return res.status(201).json(query.rows)

    } catch (error) {
      next(error)
    }
  },
  async update(req, res, next){
    try {

      const { nome, carga_horaria} = req.body;
      const { id } = req.params;

      const query = await client.query(`UPDATE curso SET nome = '${nome}', carga_horaria = '${carga_horaria}' WHERE cod_curso = '${id}'`)

      return res.status(200).json(query.rows)

    } catch (error) {
      next(error)
    }
  },
  async delete(req, res, next){
    try {

      const { id } = req.params;

      const query = await client.query(`DELETE FROM curso WHERE cod_curso = ${id}`)
      return res.status(204).json(query.rows)

    } catch (error) {
      next(error)
    }
  }
}
