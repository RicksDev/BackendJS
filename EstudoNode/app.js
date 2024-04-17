//o módulo 'fs' lida com arquivos

//o módulo http é por padrão do node
var http = require('http');

//Iniciando um servidor

//o express é um framework =>(Ferramente que serve para facilitar o trabalho para usar uma tecnologia como o Node). 
//O express é um facilitador para ajudar a montar aplicações web backend. Principal framework e principal ferramente para usar o Node backend.

const express = require('express');
//todo o conteúdo do express, estará dentro de app. Por isso usaremos o app.use e etc
const app = express();

const router = require("./Src/router/routes");

app.use("/", router);

app.get("/", (req, res) =>{
    res.send("Seja bem-vindo ao meu App!")
});

app.get("/sobre", (req, res) => {
    res.send("Minha página sobre");
});

app.get("/blog", (req, res) => {
    res.send("Seja bem-vindo ao meu blog")
});

//o /: quer dizer que será criado um parâmetro dinâmico
app.get("/ola/:nome/:idade", (req, res) =>{
    //Aqui ele vai receber os dados de uma requisição (parâmetros)
    res.send("<h1>Olá" + " " +req.params.nome + "</h1><br>" + req.params.idade + "<h2>Sua idade é: " + req.params.idade + "</h2>");
    //O "send" só pode ser usado 1 vez na rota
   
});


//A "abertura" do servidor, sempre é por último.
app.listen(3000, () => {
    console.log("O servidor está iniciado na porta http://localhost:3000");
});


