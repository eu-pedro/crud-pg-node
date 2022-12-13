CREATE DATABASE unidit;

CREATE TABLE aluno (
  cod_aluno SERIAL PRIMARY KEY,
  cod_curso integer not null,
  foreign key(cod_curso) references curso(cod_curso),
  nome varchar(30) NOT NULL,
  cpf varchar(11) NOT NULL,
  telefone varchar(11) NOT NULL,
  email varchar(30) NOT NULL,
  cep varchar(8) NOT NULL,
  rua varchar(30) NOT NULL,
  bairro varchar(30) NOT NULL,
  numero_casa varchar(10) NOT NULL,
  uf char(2) NOT NULL
);

CREATE TABLE curso (
  cod_curso SERIAL PRIMARY KEY,
  nome varchar(15) not NULL,
  carga_horaria varchar(5) NOT NULL,
  data_cadastro DATE not NULL
);


