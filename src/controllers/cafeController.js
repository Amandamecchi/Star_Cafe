//const Cafe = require("../models/Cafe");
const ListaCafes = require("../models/ListaCafes");

//const listaMenu = new ListaCafes();

//const cafe1 = new Cafe("Com leite", "médio", "pão na chapa");
//const cafe2 = new Cafe("Expresso", "pequeno", "torrada");

const listaPedido = new ListaCafes();

const criarCafes = () => {
    listaCafes.adicionarCafe("Com leite", "médio", "pão na chapa");
    listaCafes.adicionarCafe("Expresso", "pequeno", "torrada");
};

const listarCafes = (req, res) => {
    const cafes = ListaCafes.listarCafes();
    res.json(cafes);
}

const adicionarCafe = (req, res) => {
    const {cafe, tipo, acompanhamento} = req.body;
    if(!cafe || !tipo || !acompanhamento){
       return res.status(400).json({erro: "todos os campos são obrgatórios"});
    };

   const novoCafe = listaCafes.adicionarCafe(cafe, tipo, acompanhamento);
   return res.status(201).json(novoCafe);
};

const buscarCafesPorId = (req, res) => {
    const {id} = req.params;
    const cafe = listaCafes.buscarCafePorId(parseInt(id, 10));
    if (cafe){
       return res.json(cafe);
    } else{
         return res.status(404).json({erro: 'cafe não encontrado'})
    }
  //  const cafe = listaCafes.buscarCafePorId(parseInt(req.params.id));
   // if (!cafe) {
   //     return res.status(404).json({ erro: "Café não encontrado." });
   // }
   // res.json(cafe);
};

const removerCafe = (req, res) => {
    const { id } = req.params;
    const cafeRemovido = listaCafes.removerCafe(parseInt(id, 10));
    if (cafeRemovido){
    return res.json({mensagem: "cafeRemovido"});
    } else{
        return res.status(404).json({ erro: 'Café não encontrado'});
    }
 };


    //const cafeRemovido = listaCafes.removerCafe(parseInt(req.params.id));
    //if (!cafeRemovido) {
      //  return res.status(404).json({ erro: "Café não encontrado." });
    //}
    //res.json({ mensagem: "Café removido com sucesso" });

//p criar os coffes iniciais
criarCafes();

module.exports = {
    listarCafes,
    adicionarCafe,
    buscarCafesPorId, 
    removerCafe
};



