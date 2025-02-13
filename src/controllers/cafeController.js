//const Cafe = require("../models/Cafe");
const ListaCafes = require("../models/ListaCafes");

//const listaMenu = new ListaCafes();
//const listaPedido = new ListaCafes();

//const cafe1 = new Cafe("Com leite", "médio", "pão na chapa");
//const cafe2 = new Cafe("Expresso", "pequeno", "torrada");

const criarCafes = () => {
    ListaCafes.adicionarCafe("Com leite", "médio", "pão na chapa");
    ListaCafes.adicionarCafe("Expresso", "pequeno", "torrada");
}

const listarCafes = (req, res) => {
    const cafes = ListaCafes.listaCafes();
    res.json(cafes);
}

const adicionarCafe = (req, res) => {
    const {cafe, tipo, acompanhamento} = req.body;
    const novoCafe = listaCafes.adicionarCafe(cafe, tipo, acompanhamento)
    Response.status(201).json(novoCafe)
    //if(!cafe || !tipo || !acompanhamento){
      //  return res.status(400).json({erro: "todos os campos são obrgatórios"});
    };

   // const novoCafe = listaCafes.adicionarCafe(cafe, tipo, acompanhamento);
   // res.status(201).json(novoCafe);
//};

const buscarCafesPorId = (req, res) => {
    const {id} = req.params;
    const cafe = listarCafes.buscarCafePorId(parseInt(id, 10));
    if (cafe){
        res.json(cafe);
    } else{
        res.status(404).send('cafe não encontrado')
    }
  //  const cafe = listaCafes.buscarCafePorId(parseInt(req.params.id));
   // if (!cafe) {
   //     return res.status(404).json({ erro: "Café não encontrado." });
   // }
   // res.json(cafe);
};

const removerCafe = (req, res) => {
    const { id } = req.params;
    const cafeRemovido = listarCafes.removerCafe(parseInt(id, 10));
    if (cafeRemovido){
    res.json(cafeRemovido)
    } else{
        res.status(404).send('Café não encontrado');
    }
 };


    const cafeRemovido = listaCafes.removerCafe(parseInt(req.params.id));
    if (!cafeRemovido) {
        return res.status(404).json({ erro: "Café não encontrado." });
    }
    res.json({ mensagem: "Café removido com sucesso" });


criarCafes();

module.exports = {
    listarCafes,
    adicionarCafe,
    buscarCafePorId,
    removerCafe
};



