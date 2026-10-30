
const express = require('express');
const app = express();

//1. Middleware obrigatorio para ler JSON
app.use(express.json());

app.use(express.static('site'));

// 0. Crie a lista para armazenar os dados em memória
let lista = [
    {
        titulo: "obra de arte 1",
        descricao: "ficticio",
        imagem: "https://via.placeholder.com/150",
        descImagem: "Imagem ficticia '"
    },
    {
        titulo: "obra de arte 2",
        descricao: "ficticio2",
        imagem: "https://via.placeholder.com/150",
        descImagem: "Imagem ficticia 2"
    }
];

// Rota GET: Devolve a lista completa
app.get( '/api/lista', (req, res) => {
    res.json(lista);
});

//2. Rota POST: Recebe e guarda a nova obra
app.post('/api/lista', (req, res) => {
    const novaObra = req.body;
    lista.push(novaObra);
    res.json({ status: "sucessos"});
});

app.listen(3000, () => {
    console.log("Servidor escutando em http://localhost:3000");
});


































