const Cafe = require("../models/Cafe");
const ListaCafes = require("../models/ListaCafes");

const lista = new ListaCafes();

const cafe1 = new Cafe("Com Leite", "Médio", "Pão na Chapa");
lista.addCafe(cafe1);

lista.addCafe(new Cafe("Café Preto", "Pequeno", "Pão de Queijo"));

const router = {
   addCafe: (req, res) => {
      try {
         const { tipo, tamanho, acompanhamento } = req.body;
         if (!tipo || !tamanho || !acompanhamento) {
            throw new Error("Preencha todos os campos!");
         }
         const cafe = new Cafe(tipo, tamanho, acompanhamento);
         lista.addCafe(cafe);
         res.status(200).json({ message: "Criado com sucesso", cafe });
      } catch (error) {
         res.status(400).json({
            message: "Erro ao criar café",
            error: error.message,
         });
      }
   },

   getAllCafes: (req, res) => {
      try {
         const cafes = lista.getAllCafes();
         res.status(200).json(cafes);
      } catch (error) {
         res.status(404).json({
            message: "Erro ao buscar cafes",
            error: error.message,
         });
      }
   },
   getCafeById: (req, res) => {
      try {
         const id = req.params.id;
         res.status(200).json(lista.getCafeById(id));
      } catch (error) {
         res.status(404).json({
            message: "Erro ao buscar café por id",
            error: error.message,
         });
      }
   },
   updateCafe: (req, res) => {
      try {
         res.status(200).json(lista.updateCafe(req.params.id, req.body));
      } catch (error) {
         res.status(404).json({
            message: "Erro ao atualizar",
            error: error.message,
         });
      }
   },
   deleteCafe: (req, res) => {
      try {
         const cafe = req.params.id;
         lista.deleteCafe(cafe);
         res.status(200).json({
            message: "Café deletado com sucesso",
            cafe,
         });
      } catch (error) {
         res.status(404).json({
            message: "Erro ao deletar café",
            error: error.message,
         });
      }
   }


};

module.exports = router



