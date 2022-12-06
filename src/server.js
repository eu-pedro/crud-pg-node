// import { pool } from "./database/client.js";

// async function main() {
//   const client = await pool.connect();
//   try {
//     const result = await client.query(`CREATE TABLE aluno (
//       cod_aluno SERIAL PRIMARY KEY,
//       nome varchar(30) NOT NULL,
//       cpf varchar(11) NOT NULL,
//       telefone varchar(11) NOT NULL,
//       email varchar(30) NOT NULL,
//       cep varchar(8) NOT NULL,
//       rua varchar(30) NOT NULL,
//       bairro varchar(30) NOT NULL,
//       numero_casa varchar(10) NOT NULL,
//       uf char(2) NOT NULL
//     );

//     CREATE TABLE curso (
//       cod_curso SERIAL PRIMARY KEY,
//       nome varchar(15) not NULL,
//       carga_horaria varchar(5) NOT NULL,
//       data_cadastro DATE not NULL
//     );

//     CREATE TABLE matricula (
//       cod_matricula SERIAL PRIMARY KEY,
//       cod_aluno integer not NULL,
//       foreign key(cod_aluno) references aluno(cod_aluno),
//       cod_curso integer not NULL,
//       foreign key(cod_aluno) references curso(cod_curso)
//     );
//     `);
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// }

// main();

import express, { json, response } from 'express';
import { Pool } from 'pg';
var pool = new Pool();


const app = express();
app.use(json())

const alunos = [];



app.get('/unidit/api/v1', (req, res) => {
  return res.json(alunos)
})

app.post('/unidit/api/v1', (req, res) => {
  try {
    // const { nome, cpf, telefone, email, cep, rua, bairro, numero_casa, uf} = req.body;

    // const aluno = { nome, cpf, telefone, email, cep, rua, bairro, numero_casa, uf};

    // alunos.push(aluno)

    // return res.json(aluno)

    pool.connect((err, client, done) => {
      if(err) return done(err);

      client.query('INSERT INTO')
    })

  } catch (error) {
    console.log(error)
  }
})


app.listen(3333, () => console.log('servidor rodando'))




