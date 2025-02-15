//const Cafe = require("../models/Cafe");
const ListaCafes = require("../models/ListaCafes");
const listaCafes = new ListaCafes();
//const listaMenu = new ListaCafes();

//const cafe1 = new Cafe("Com leite", "médio", "pão na chapa");
//const cafe2 = new Cafe("Expresso", "pequeno", "torrada");

const listarCafes = (req, res) => {
    res.json(listaCafes.listarCafes());
};

const adicionarCafe = (req, res) => {
    const {tipo, tamanho, acompanhamento} = req.body;
    if(!tipo || !tamanho || !acompanhamento){
       return res.status(400).json({erro: "todos os campos são obrgatórios"});
    }

   const novoCafe = listaCafes.adicionarCafe(tipo, tamanho, acompanhamento);
   res.status(201).json(novoCafe);
};
//const listaPedido = new ListaCafes();

//const criarCafes = () => {
   // listaPedido.adicionarCafe("Com leite", "médio", "pão na chapa");
   // listaPedido.adicionarCafe("Expresso", "pequeno", "torrada");
//};


const buscarCafePorId = (req, res) => {
    const { id } = req.params;
    const cafe = listaCafes.buscarCafePorI(id);
    if (cafe){
       return res.json(cafe);
    } 
        res.status(404).json({erro: 'cafe não encontrado'});
    
  //  const cafe = listaCafes.buscarCafePorId(parseInt(req.params.id));
   // if (!cafe) {
   //     return res.status(404).json({ erro: "Café não encontrado." });
   // }
   // res.json(cafe);
};

const removerCafe = (req, res) => {
    const { id } = req.params;
    const cafeRemovido = listaCafes.removerCafe(id);
    if (cafeRemovido){
    return res.json({mensagem: "cafe removido com sucesso"});
    } 
    res.status(404).json({ erro: 'Café não encontrado'});
    
 };


    //const cafeRemovido = listaCafes.removerCafe(parseInt(req.params.id));
    //if (!cafeRemovido) {
      //  return res.status(404).json({ erro: "Café não encontrado." });
    //}
    //res.json({ mensagem: "Café removido com sucesso" });

//p criar os coffes iniciais

module.exports = {
    listarCafes,
    adicionarCafe,
    buscarCafePorId, 
    removerCafe
};



