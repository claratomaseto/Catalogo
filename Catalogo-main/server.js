
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('site'));

let lista = [
    {
        nome: "Jason Todd",
        codinome: "Capuz Vermelho",
        tipo: "Anti-herói",
        status: "Ativo",
        localizacao: "Gotham City",
        imagem: "https://via.placeholder.com/150"
    },
    {
        nome: "Dick Grayson",
        codinome: "Asa Noturna",
        tipo: "Herói",
        status: "Ativo",
        localizacao: "Blüdhaven",
        imagem: "https://via.placeholder.com/150"
    }
];

let listaEquipes = [
    {
        nomeEquipe: "Batfamília",
        baseOperacoes: "Batcaverna",
        anoCriacao: 1940
    },
    {
        nomeEquipe: "Titãs",
        baseOperacoes: "Torre dos Titãs",
        anoCriacao: 1964
    }
];

let listaLocalizacoes = [
    {
        nomeLocal: "Gotham City",
        universo: "DC Comics"
    },
    {
        nomeLocal: "Metropolis",
        universo: "DC Comics"
    }
];

app.get('/api/lista', (req, res) => {
    res.json(lista);
});

app.get('/api/equipes', (req, res) => {
    res.json(listaEquipes);
});

app.get('/api/localizacoes', (req, res) => {
    res.json(listaLocalizacoes);
});

app.post('/api/lista', (req, res) => {
    const novoItem = req.body;
    lista.push(novoItem);
    res.json({ status: "sucesso" });
});

app.post('/api/equipes', (req, res) => {
    const novaEquipe = req.body;
    listaEquipes.push(novaEquipe);
    res.json({ status: "sucesso" });
});

app.post('/api/localizacoes', (req, res) => {
    const novaLocalizacao = req.body;
    listaLocalizacoes.push(novaLocalizacao);
    res.json({ status: "sucesso" });
});

app.listen(3000, () => {
    console.log("Servidor escutando em http://localhost:3000");
});