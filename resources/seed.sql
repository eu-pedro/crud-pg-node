INSERT INTO
  aluno (
    nome,
    cpf,
    telefone,
    email,
    cep,
    rua,
    bairro,
    numero_casa,
    uf
  )
VALUES
  (
    'Pedro',
    '61463268912',
    '98984857621',
    'pedro@gmail.com',
    '65021854',
    'Rua 300',
    'Cohatrac',
    'casa 08',
    'MA'
  );

INSERT INTO
  curso (nome, carga_horaria, data_cadastro)
VALUES
  ('Medicina', '160', '2022/04/22');



INSERT INTO
  matricula (cod_aluno, cod_curso)
VALUES
  (
    (
      select
        cod_aluno
      from
        aluno
      limit
        1
    ), (
      select
        cod_curso
      from
        curso
      limit
        1
    )
  );
