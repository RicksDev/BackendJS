const express = require("express");
const app = express();
app.use(express.static("public"));

const indexView =require("./Src/view/indexView");

let listaAluno = [];

function adicionarAluno(nome,idade) {
    let aluno = {
        nome : nome,
        idade : idade
    }

    listaAluno.push(aluno);

}

function mostrarListaAlunos() {
    console.log("Lista de alunos: ");
    listaAluno.forEach(function(aluno,index){
        console.log(`Aluno ${index + 1}: Nome: ${aluno.nome}, idade: ${aluno.idade}`)
    });
}

adicionarAluno("Ricardo",20);
adicionarAluno("Emerson",29);
adicionarAluno("Wagner",27);
adicionarAluno("Chicken",23);

mostrarListaAlunos();

app.get('/listarAlunos',(req,res,next) => {
    res.end(indexView())
})


app.listen(3000, ()=> {
    console.log("Servidor funcionando no : http://127.0.0.1:3000")
});