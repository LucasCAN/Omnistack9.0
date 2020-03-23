const express = require('express'); //importa express
const mongoose = require('mongoose'); //importa mongoose
const cors = require('cors'); //importa cors
const path = require('path'); //importa path

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@projetoomni-majqw.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// GET(buscar), POST(add), PUT(edit) , DELETE
//req.query = acessar query params (para filtros)
//req.params = acessar route params (para edição,delete)
//req.body = acessar corpo da requisiçao (para criacao, edicao)

app.use(cors());
app.use(express.json());
app.use('/files',express.static(path.resolve(__dirname, '..','uploads')));
app.use(routes); //app abre routes

app.listen(3333);