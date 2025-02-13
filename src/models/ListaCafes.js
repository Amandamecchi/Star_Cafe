const Cafe = require("./Cafe");

class ListaCafes{
    constructor(){
        this.cafes = [];
        this.proximoId = 1;
    }

    adicionarCafe(cafe, tipo, acompanhamento){
        const novoCafe = new Cafe(this.proximoId++, cafe, tipo, acompanhamento);
        this.cafe.push(novoCafe);
        return novoCafe;
    }

    ListaCafes(){
        return this.cafes;
    }

    buscarCafes(){
        return this.cafes;
    }

    buscarCafePorId(id){
        return this.cafes.find(cafe => cafe.id === id);
    }

    removerCafe(id){
        const index = this.cafes.findIndex(cafe => cafe.id === id);
        if (index !== -1){
            return this.cafes.splice(index, 1) [0];

        }
        return null;
    }
    
    updateCafe(id, updateData){
        const cafe = this.buscarCafePorId(id);
        if (!cafe) return null;
        Object.assign(cafe, updateData);
        return cafe;
    }
}

module.exports = new ListaCafes();