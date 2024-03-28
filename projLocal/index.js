const express = require('express');
const app = express();
const router = require('./Src/router/router')
// const routes = require("./Src/router/routes");

//O ejs consegue colocar java no meio do HTML. E ele consegue ler tudo separadamente e mostra tudo como HTML.

//to falando quando a estrutura de view vou trabalhar
app.set('view engine', 'ejs');
//Apontamento de pasta de onde estará o view de execução
app.set('views', 'Src/view/');

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use("/", router);


app.listen(3002, () => {
    console.log("Servidor (API) iniciado em http://localhost:3002");
});