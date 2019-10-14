const Cadastro = require('../models/Cadastro');

module.exports = {
    async store(req, res) {
        const { filename } = req.file;
        const { nome, email, telefone, departamento } = req.body;

        let buscaemail = await Cadastro.findOne({ email });

        if (buscaemail) {
            return res.status(400).json({ error: 'O email informado já esta cadastrado!'});
        }

        const cadastro = await Cadastro.create({
            nome,
            email,
            departamento,
            telefone,
            foto: filename
        });

        return res.json(cadastro);
    }
}