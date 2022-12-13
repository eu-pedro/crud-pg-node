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


  }
}
