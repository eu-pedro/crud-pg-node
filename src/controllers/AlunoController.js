const client = require("../database/config");

module.exports = {
  async index(req, res, next) {
    try {
      const { cod_curso } = req.query;
      const { cod_aluno } = req.query;

      let query = client.query("SELECT * FROM aluno");
      
      if(cod_aluno) {
        query = client.query(`SELECT * FROM aluno WHERE cod_aluno = '${cod_aluno}'`)
      }

      

      if (cod_curso) {
        query = client.query(
          `select aluno.cod_aluno, aluno.nome, curso.nome as curso_nome from aluno inner join curso on curso.cod_curso = aluno.cod_curso where curso.cod_curso = '${cod_curso}'`
        );
      }
      const results = await query;


      return res.status(200).json(results.rows);
    } catch (error) {
      next(error);
    }
  },
  async create(req, res, next) {
    try {
      const {
        cod_curso,
        nome,
        cpf,
        telefone,
        email,
        cep,
        rua,
        bairro,
        numero_casa,
        uf,
      } = req.body;

      const query = await client.query(
        `INSERT INTO aluno(cod_curso, nome, cpf, telefone, email,cep, rua, bairro, numero_casa, uf) VALUES('${cod_curso}','${nome}', '${cpf}', '${telefone}', '${email}', '${cep}', '${rua}', '${bairro}', '${numero_casa}', '${uf}')`
      );

      return res.status(201).json(query.rows);
    } catch (error) {
      next(error);
    }
  },

  async update(req, res, next) {
    try {
      const {
        cod_curso,
        nome,
        cpf,
        telefone,
        email,
        cep,
        rua,
        bairro,
        numero_casa,
        uf,
      } = req.body;

      const { id } = req.params;

      const query = await client.query(
        `UPDATE aluno SET cod_curso = ${cod_curso}, nome = '${nome}', cpf = '${cpf}', telefone = '${telefone}', email = '${email}', cep = '${cep}', rua = '${rua}', bairro = '${bairro}', numero_casa = '${numero_casa}', uf = '${uf}' WHERE cod_aluno = '${id}'`
      );

      return res.status(200).json(query.rows);
    } catch (error) {
      next(error);
    }
  },
  async delete(req, res, next) {
    try {
      const { id } = req.params;

      const query = await client.query(
        `DELETE FROM aluno WHERE cod_aluno = ${id}`
      );
      return res.status(204).json(query.rows);
    } catch (error) {
      next(error);
    }
  },
};
