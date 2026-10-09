
const express = require('express');
const app = express();

app.listen(3000, () => console.log("escutando"));
app.use(express.static('site'));


// 0. Crie a lista para armazenar os dados em memória
let lista = [
    {titulo: "obra de arte 1", descricao: "ficticio"},
    {titulo: "obra de arte 2", descricao: "ficticio2"},
];

//1. Middleware obrigatorio para ler JSON
app.use(express.json());

//2. Rota POST: Recebe e guarda a nova obra
app.post('/api/lista', (req, res) => {
    const novaObra = req.body;
    lista.push(novaObra);
    res.json({ status: "sucessos"});

});

//3. Rota GET: Devolve a lista completa
app.get( '/api/lista', (req, res) => {
    res.json(lista);
});


































