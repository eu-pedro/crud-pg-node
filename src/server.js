
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

const aluno = [
    {""}

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

wb.write('arquivo.xlsx')



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

