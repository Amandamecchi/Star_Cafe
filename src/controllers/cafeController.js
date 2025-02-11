const listaCafes = require("../models/ListaCafes");

const listaCafes = (req, res) => {
    res.json(listaCafes.listaCafes());

};

const adicionarCafe = (req, res) => {
    const {cafe, tipo, acompanhamento} = req.body;
    if(!cafe || !tipo || !acompanhamento){
        return res.status(400).json({erro: "todos os campos são obrgatórios"});
    }
    const novoCafe = listaCafes.adicionarCafe(cafe, tipo, acompanhamento);
    res.status(2001).json(novoCafe);
};

const cafe = listaCafes.buscarCafePorId(parseInt(req.params.id));
if (!cafe){
    return res.status(404).json({erro: "Café não encontrado."});
    res.json(cafe);
};

const removerCafe = (req, res) => {
    const cafeRemovido = listaCafes.removerCafe(parseInt.id);
    if (!cafeRemovido) {
        return res.status(404).json({erro:"Café não encontrado."
        });
    }
    res.json({mensagem: "Café removido com sucesso"});
};

module.exports = {listaCafes, adicionarCafe, buscarCafes, removerCafe};
