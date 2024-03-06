const express = require('express');

//Define o processo de rota no Framework
const router = express.Router();

//ta retornoTela12 só pra testar, de onde que puxa.
const retornoTela12 = require('../view/indexView');

router.get("/listarAlunos", (req,res) => {
   
    let arrAluno = ["Ricardo","Carlos","Kawan"];
    let texto = "";
    for(i = 0; i < arrAluno.length; i++){
        texto += i + ":" + arrAluno[i] + "<br>";
    }

    res.writeHead(200,{'Content-Type' : 'text/html; charset=utf=8'});
    res.end(texto);
});

router.get("/indexView", (req,res) => {
    //puxando a função que criei no IndexView com a página HTML;
    res.send(retornoTela12());
    
})



module.exports = router;