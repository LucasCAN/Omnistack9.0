//index, show, store, update, destroy

const User = require('../models/User');

module.exports = {
    async store(req, res) {
        //const email = req.body.email;
        const { nome, nomePai, nomeMae, cpf, nascimento, telefone, email } = req.body;

        let user = await User.findOne({ nome, nomePai, nomeMae, cpf, nascimento, telefone, email });

        if(!user){
            user = await User.create({ nome, nomePai, nomeMae, cpf, nascimento, telefone, email }); //await aguarda funcao ser exec 
        }

        return res.json(user);
    }
};