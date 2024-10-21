const express = require('express');
const path = require('path');
const app = express();
const port = 3000;


app.use(express.static('views'));

// Rota para Vampiro
app.get('/vampiro', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'vampiro.html'));
});

// Rota para Halloween
app.get('/halloween', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'halloween.html'));
});

// Rota para Lobisomem
app.get('/lobisomen', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'lobisomen.html'));
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});


