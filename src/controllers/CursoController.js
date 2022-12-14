const client = require('../database/config')

module.exports = {
  async index(req, res){
    try {
      
      await client.connect()
      const query = await client.query('SELECT * FROM curso')
      
      return res.status(200).json(query.rows)

    } catch (error) {
      console.log(error)
      client.end((err) => {
        console.log('client has disconnected')
        if (err) {
          console.log('error during disconnection', err.stack)
        }
      })
      return res.status(200).json(error.message)
    } 
  },
}