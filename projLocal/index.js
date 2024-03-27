const express = require('express');
const app = express();
// const routes = require("./Src/router/routes");

//O ejs consegue colocar java no meio do HTML. E ele consegue ler tudo separadamente e mostra tudo como HTML.

//to falando quando a estrutura de view vou trabalhar
app.set('view engine', 'ejs');
//Apontamento de pasta de onde estará o view de execução
app.set('views', 'Src/view/');

const estado = [
    {
        'nome': 'São Paulo',
        'sigla': 'SP',
        'bairro': 'Jardin'
    },
    {
        'nome': 'Rio de Janeiro',
        'sigla': 'RJ',
        'bairro': 'Ipanema'
    },
    {
        'nome': 'Minas Gerais',
        'sigla': 'MG',
        'bairro': 'tubalina'
    }
]

app.get('/', (req, res) => {
    res.render('home', {
        estado: estado
    });
});

app.listen(3002, () => {
    console.log("Servidor (API) iniciado em http://localhost:3002");
});