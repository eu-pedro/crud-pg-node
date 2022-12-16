const client = require('../database/config')

module.exports = {
  async index(req, res){
    try {


      const query = await client.query('SELECT * FROM curso')


      return res.status(200).json(query.rows)

    } catch (error) {
      console.log(error)

      return res.status(200).json(error.message)
    }
  },
  async create(req, res){
    try {

      const { nome, carga_horaria, data_cadastro } = req.body;


      const query = await client.query(`INSERT INTO curso(nome, carga_horaria, data_cadastro) VALUES('${nome}', '${carga_horaria}', '${data_cadastro}')`)

      return res.status(200).json(query.rows)

    } catch (error) {
      console.log(error)
      client.end((err) => {
        console.log('client has disconnected')
        if (err) {
          console.log('error during disconnection', err.stack)
        }
      })
      return res.status(500).json(error.message)
    }
  },
  async update(req, res){
    try {

      const { nome, carga_horaria, data_cadastro } = req.body;
      const { id } = req.params;




      const query = await client.query(`UPDATE curso SET nome = '${nome}', carga_horaria = '${carga_horaria}', data_cadastro = '${data_cadastro}' WHERE cod_curso = '${id}'`)

      return res.status(200).json(query.rows)

    } catch (error) {
      console.log(error)
      return res.status(500).json(error.message)
    }
  },
  async delete(req, res){
    try {


      const { id } = req.params;


      const query = await client.query(`DELETE FROM curso WHERE cod_curso = ${id}`)
      return res.status(200).json(query.rows)

    } catch (error) {
      console.log(error)
      return res.status(500).json(error.message)
    }
  }
}
