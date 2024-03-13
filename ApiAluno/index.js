const express = require('express');
const porta = 3000;
const app = express();

const bodyParser = require('body-parser');
//Quando ser acionado o "/", sera acionado o routes.
//ou seja, toda vez q tiver barra, o programa vai entender que vai entrar na pasta routes e procurar a rota desejada.
const routes = require('./Src/routes/routes');


app.use(bodyParser.json());

//Isso é pra desconsiderar qualquer tipo de erro, tipo 403 etc
//Ele não retorna nada
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', routes);
app.use(express.static("public"));

app.listen(porta, () => {
    console.log("Servidor executado no localhost: http://127.0.0.1:3000/listarAlunos");
    console.log("Servidor executado no localhost: http://127.0.0.1:3000/indexView");
});