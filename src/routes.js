const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload')

const cadastroController = require('./controllers/CadastroController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post("/cadastro", upload.single('foto'),  cadastroController.store);

module.exports = routes;