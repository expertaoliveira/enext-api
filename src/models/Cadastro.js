const mongoose = require('mongoose');

const CadastroSchema = mongoose.Schema({
    nome: String,
    email: String,
    departamento: String,
    telefone: String,
    foto: String,
});

module.exports = mongoose.model( 'Cadastro', CadastroSchema );