//Serviçoo padrão para iniciar uma API.
//Deve ser instalado no terminal : express e nodemon. 

const express = require('express');
const app = express();
const porta = 3001;
const router = require("./Src/routers/routes");



app.use(express.static("public"));
app.use(express.json());
app.use("/", router);

app.listen(porta, () => {
    console.log(`Servidor iniciado na porta 3001... http://localhost:${porta}`);
});