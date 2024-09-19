const { Socket } = require('dgram');
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
 
const app =  express(); // iniciando servidor express
const server = http.createServer(app); // Criando server
 
const io = new Server(server); // Web socket
 
app.get ('/', ( req, res) => {
    res.sendFile(__dirname + '/index.html');
});
 
let esperandoUsuario = null;
 
io.on('connection', (socket) => {
    console.log('Um usuario se conectou');
 
    socket.on('set username' , (username) => {
        socket.username = username; // capturando o nome do usuario
        // quem conectou na sala
        console.log(`${username} entrou na sala.`);
 
        if(esperandoUsuario){
            // Se ha um usuario esperando, emparelha os dois
            socket.partner = esperandoUsuario;
            esperandoUsuario.partner = socket;
            // Notificar os usuarios conectados
            esperandoUsuario.emit('chat start', `Falando com : ${socket.username}`);
            socket.emit('chat start', `Falando com : ${esperandoUsuario.username}`);
            // Zeramos  o usuario que esta esperando
            esperandoUsuario = null;
        } else {
            // Se não tem ninguem esperando, colocar ele como proximo a esperar
            esperandoUsuario = socket;
            socket.emit('waiting', 'Aguardando usuario para conversar...');
        }
    });
 
    // Enviar mensagem
    socket.on('chat message', (msg) => {
        if(socket.partner){
            socket.partner.emit('chat message', `${socket.username}: ${msg}`);
        }
    });
    // Se desconectar
    socket.on('manual disconnect', () => {
        if(socket.partner) {
            socket.partner.emit('chat end', `${socket.username} desconectou`);
            socket.partner.partner = null;
            socket.partner = null;
        }
        socket.emit('chat end', 'Voce desconectou');
    });
    // Lidar com desconexão
    socket.on('disconnect', () =>{
        console.log('Usuario se desconectou');
        if (socket.partner) {
            socket.partner.emit('chat end', `${socket.username} desconectou`);
            socket.partner.partner = null;
        }
        if (esperandoUsuario === socket){
            esperandoUsuario = null;
        }
    });
});
 
server.listen(3000, () => {
    console.log('servidor rodando na porta 3000');
});
 