
const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Seja bem-vindo ao meu aplicativo');
});


app.listen(8081, function () {
    console.log('servidor rodando na url http://localhost:8081');
});  