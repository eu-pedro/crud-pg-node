const client = require('../database/config')

module.exports = {
  async index(req, res){
    try {

      await client.connect()
      const query = await client.query('SELECT * FROM aluno')
      return res.status(200).json(query.rows)

    } catch (error) {
      console.log(error)
      return res.status(500).json(error.message)
    }


  },
  async create(req, res){
    try {

      const { nome, cpf , telefone, email, cep, rua, bairro, numero_casa, uf } = req.body[0];

      await client.connect()
      const query = await client.query(`INSERT INTO aluno(nome, cpf, telefone, email,cep, rua, bairro, numero_casa, uf) VALUES('${nome}', '${cpf}', '${telefone}', '${email}', '${cep}', '${rua}', '${bairro}', '${numero_casa}', '${uf}')`)
      return res.status(200).json(query.rows)
    } catch (error) {
      console.log(error)
      return res.status(500).json(error.message)
    }
  },

  async update(req, res){
    try {

      const { nome, cpf , telefone, email, cep, rua, bairro, numero_casa, uf } = req.body[0];
      const { id } = req.params;

      console.log(id)

      await client.connect()
      const query = await client.query(`UPDATE aluno SET '${nome}', '${cpf}', '${telefone}', '${email}','${cep}', '${rua}', '${bairro}', '${numero_casa}', '${uf}' WHERE 'id' = ${id}`)
      return res.status(200).json(query.rows)
    } catch (error) {
      console.log(error)
      return res.status(500).json(error.message)
    }
  }
}
