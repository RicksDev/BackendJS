const express = require('express');
const porta = 3000;
const app = express();

const routes = require('./Src/routes/routes');

app.use('/', routes);

app.use(express.static("public"));

app.listen(porta, () => {
    console.log("Servidor executado no localhost: http://127.0.0.1:3000/listarAlunos")
    console.log("Servidor executado no localhost: http://127.0.0.1:3000/indexView")
});