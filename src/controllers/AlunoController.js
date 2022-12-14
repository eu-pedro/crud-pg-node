const client = require('../database/config')

module.exports = {
  async index(req, res){
    try {

      const query = await client.query('SELECT * FROM aluno')
      return res.status(200).json(query.rows)

    } catch (error) {
      console.log(error)

      return res.status(200).json(error.message)
    }


  },
  async create(req, res){
    try {

      const { cod_curso, nome, cpf , telefone, email, cep, rua, bairro, numero_casa, uf } = req.body;



      const query = await client.query(`INSERT INTO aluno(cod_curso, nome, cpf, telefone, email,cep, rua, bairro, numero_casa, uf) VALUES('${cod_curso}','${nome}', '${cpf}', '${telefone}', '${email}', '${cep}', '${rua}', '${bairro}', '${numero_casa}', '${uf}')`)

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

      const { nome, cpf , telefone, email, cep, rua, bairro, numero_casa, uf } = req.body;
      const { id } = req.params;

      console.log(id)


      const query = await client.query(`UPDATE aluno SET nome = '${nome}', cpf = '${cpf}', telefone = ${telefone}, email = '${email}', cep = '${cep}', rua = '${rua}', bairro = '${bairro}', numero_casa = '${numero_casa}', uf = '${uf}' WHERE 'cod_aluno' = '${id}'`)
      return res.status(200).json(query.rows).send('dados atualizados com sucesso!')
    } catch (error) {
      console.log(error)
      return res.status(500).json(error.message)
    }
  },
  async delete(req, res){
    try {


      const { id } = req.params;


      const query = await client.query(`DELETE FROM aluno WHERE 'cod_aluno' = ${id}`)
      return res.status(200).json(query.rows)

    } catch (error) {
      console.log(error)
      return res.status(500).json(error.message)
    }
  }
}
