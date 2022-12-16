
const express = require('express')
const app = express();
const client = require('./database/config.js')
const routes = require('./routes')

// criando config para exportar para planilha
const xl = require('excel4node')
const wb = new xl.Workbook();
const ws = wb.addWorksheet('Sistema Unidit')

const curso = [
    {"nome_curso": "Medicina", "carga_horaria": "160", "data_cadastro": "22/04/2022"},
    {"nome_curso": "Direito", "carga_horaria": "230", "data_cadastro": "10/01/2021"},
    {"nome_curso": "Administração", "carga_horaria": "210", "data_cadastro": "15/12/2022"}
];

const headingColumnNamesCurso = [
    "Nome do Curso",
    "Carga Horaria",
    "Data Cadastro"
];

let headingColumnIndex = 1;
headingColumnNamesCurso.forEach(heading => {
    ws.cell(1, headingColumnIndex++).string(heading)
})

let rowIndex = 2;
curso.forEach(record => {
    let columnIndex = 1;
    Object.keys(record).forEach(columnName => {
        ws.cell(rowIndex, columnIndex++).string(record[columnName])
    });
    rowIndex++
})

const aluno = [
    {
        "nome": "pedro",
        "cpf": "61463268912",
        "telefone": "98984857621",
        "email": "pedro@gmail.com",
        "cep": "65021854",
        "rua": "rua 300",
        "bairro": "cohatrac",
        "numero_casa": "casa 08",
        "uf": "MA"
    },
    {
        "nome": "fabio",
        "cpf": "61169968822",
        "telefone": "98985663214",
        "email": "fabio123@gmail.com",
        "cep": "65014852",
        "rua": "rua 200",
        "bairro": "cohama",
        "numero_casa": "39",
        "uf": "MA"
    },
    {
        "nome": "henrique",
        "cpf": "61463262577",
        "telefone": "98985625324",
        "email": "henrique@gmail.com",
        "cep": "65014589",
        "rua": "rua D",
        "bairro": "maiobao",
        "numero_casa": "63",
        "uf": "MA"
    },
    {
        "nome": "junior",
        "cpf": "61563961422",
        "telefone": "98984225147",
        "email": "junior@gmail.com",
        "cep": "65052145",
        "rua": "rua G",
        "bairro": "vila lobao",
        "numero_casa": "14",
        "uf": "MA"
    },
    {
        "nome": "lucas",
        "cpf": "64769862512",
        "telefone": "98982653145",
        "email": "lucas@gmail.com",
        "cep": "65125369",
        "rua": "rua J",
        "bairro": "areinha",
        "numero_casa": "88",
        "uf": "MA"
    },
    {
        "nome": "bruno",
        "cpf": "62561463512",
        "telefone": "98999651234",
        "email": "bruno@gmail.com",
        "cep": "65078142",
        "rua": "rua veneza",
        "bairro": "anjo da guarda",
        "numero_casa": "141",
        "uf": "MA"
    },
    {
        "nome": "marcelo",
        "cpf": "62361469936",
        "telefone": "98983524163",
        "email": "marcelo@gmail.com",
        "cep": "65145285",
        "rua": "rua do fio",
        "bairro": "vila nova",
        "numero_casa": "55",
        "uf": "MA"
    }
];

const headingColumnNamesAluno = [
    "Nome do Aluno",
    "Cpf",
    "Telefone",
    "Email",
    "CEP",
    "Rua",
    "Bairro",
    "Numero da Casa",
    "UF"
];

let headingColumnIndexAluno = 6;
headingColumnNamesAluno.forEach(heading => {
    ws.cell(1, headingColumnIndexAluno++).string(heading)
});

let rowIndexAluno = 2;
aluno.forEach(record => {
    let columnIndexAluno = 6;
    Object.keys(record).forEach(columnName => {
        ws.cell(rowIndexAluno, columnIndexAluno++).string(record[columnName])
    })
    rowIndexAluno++
})

wb.write('arquivo.xlsx')

// Fim configurações para exportar para planilha

client.connect();

app.use(express.json())

app.use(routes)

// caso não encontre a rota
app.use((req, res, next) => {
    const error = new Error('não encontrado');
    error.status = 404;
    next(error)
})


// catch all
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({error: error.message })
})

// criação de planilha




app.listen(3333, () => console.log('rodando'))

