const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nome: String,
    nomePai: String,
    nomeMae: String,
    cpf: String,
    nascimento: Date,
    telefone: String,
    email: String,
    //adicionar Nome de parentes.
});

module.exports = mongoose.model('User', UserSchema); //exporta model user