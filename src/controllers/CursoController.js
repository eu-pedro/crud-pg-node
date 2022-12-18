const client = require('../database/config')

module.exports = {
  async index(req, res, next){
    try {


      const query = await client.query('SELECT * FROM curso')


      return res.status(200).json(query.rows)

    } catch (error) {
      next(error)
    }
  },
  async create(req, res, next){
    try {

      const { nome, carga_horaria, data_cadastro } = req.body;


      const query = await client.query(`INSERT INTO curso(nome, carga_horaria, data_cadastro) VALUES('${nome}', '${carga_horaria}', '${data_cadastro}')`)

      return res.status(201).json(query.rows)

    } catch (error) {
      next(error)
    }
  },
  async update(req, res, next){
    try {

      const { nome, carga_horaria, data_cadastro } = req.body;
      const { id } = req.params;

      const query = await client.query(`UPDATE curso SET nome = '${nome}', carga_horaria = '${carga_horaria}', data_cadastro = '${data_cadastro}' WHERE cod_curso = '${id}'`)

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
