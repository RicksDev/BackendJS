const express = require('express');

//Define o processo de rota no Framework
const router = express.Router();

const fs = require('fs');

//ta retornoTela12 só pra testar, de onde que puxa.
const retornoTela12 = require('../view/indexView');
const retornoTela = require('../view/indexView');

//array com apontamento de campos (Array dicionário)
var arrAluno = [{ name: 'Ana' }, { name: 'Carlos' }, { name: 'Renato' }];

let texto = '<h1>Opções disponíveis: /listarAlunos, /AlunoId/name, novoAluno/name, excluirAluno/name</h1> '
router.get('/', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf=8' });
    res.end(texto);
});


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
        res.send(arrAluno);
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end("<h1>Usuário já cadastrado</h1>");
    }
    //Criar uma rotina que atualiza um aluno

});

router.get('/excluirAluno/:name', (req, res) => {
    const { name } = req.params;
    const index = arrAluno.map(aluno => aluno.name).indexOf(name);
    if (index > -1) {
        arrAluno.splice(index, 1);
        res.send(arrAluno);
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end("<h1>Usuário não existe para ser deletado</h1>");
    }
});

//método Post ==  existe no formulário, no "enviar", posso definir se o envio é via Get ou Post
//O post vai pegar todos os campos do form e vai enviar para o local sem informar no endereçamento (url)

router.post('/addAluno', (req, resp) => {
    let dado = req.body;
    resp.send(JSON.stringify(dado));
    criarArquivo(JSON.stringify(dado));

});
 
function criarArquivo(dado) {
    fs.writeFile("./src/database/dbAluno.json", dado, (err) => {
        if (err) {
            console.log("erro ao criar arquivo");
        }
        console.log(dado);
    });
}




//Exporta o arquivo para o módulo de exportação que executar arquivos externos que conjunto com o framwork
module.exports = router;