const express = require('express');

//Define o processo de rota no Framework
const router = express.Router();

//ta retornoTela12 só pra testar, de onde que puxa.
const retornoTela12 = require('../view/indexView');
const retornoTela = require('../view/indexView');

//array com apontamento de campos (Array dicionário)
var arrAluno = [{ name: 'Ana' }, { name: 'Carlos' }, { name: 'Renato' }];




//na ação get do navegador ou seja, no "/" do navegador.
router.get("/listarAlunos", (req, res) => {
    //Criado um array com 3 nomes.
    //let arrAluno = ["Ricardo", "Carlos", "Kawan"];
    //Isso é pra dar um espaço na tela
    let texto = "";
    for (i = 0; i < arrAluno.length; i++) {

        //AGORA SE EU QUISER TRAZER ALGO ESPECÍFICO, COMO SÓ O NOME, EU FAÇO ASSIM:
        // texto += i + ":" + arrAluno[i].nome + "<br>";

        //aqui é pra pegar o objeto do array todo
        texto += i + ":" + Object.values(arrAluno[i]) + "<br>";
    }

    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf=8' });
    res.end(texto);
});

router.get("/indexView", (req, res) => {
    //puxando a função que criei no IndexView com a página HTML;
    res.send(retornoTela());

    //Quando usar o end ou send.
    //Quando eu quero carregar sem verificar antes, eu mando o end.
    //jà no send, verifica antes de mandar.

});

router.get('/AlunoId/:name', (req, res) => {

    const { name } = req.params;
    const index = arrAluno.map(aluno => aluno.name).indexOf(name);
    let texto;
    if (index > - 1) {
        texto = "<h1>Aluno localizado no sistema. </h1> <h3>O id do aluno no array é: " + index + "<br> Nome: " + name; + "</h3> "
    } else {
        texto = "<h1>Aluno não localizado no sistema</h1>";
    }
    res.writeHead(220, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(texto);


});

router.get('/novoAluno/:name', (req, res) => {
    const { name } = req.params;

    const index = arrAluno.map(aluno => aluno.name).indexOf(name);

    if (index === -1) {
        let novoNome = { name: name };
        arrAluno.push(novoNome);
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end("<h2>Aluno cadastrado</h2>");
        res.send(arrAluno);
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end("<h1>Usuário já cadastrado</h1>");
    }
    //Criar uma rotina que atualiza um aluno

});




//Exporta o arquivo para o módulo de exportação que executar arquivos externos que conjunto com o framwork
module.exports = router;