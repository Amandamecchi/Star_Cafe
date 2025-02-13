class ListaCafes{
    constructor(){
        this.cafes = [];
        
    }

    adicionarCafe(tipo, tamanho, acompanhamento){
        const novoCafe = new Cafe(this.proximoId++,  tipo, tamanho, acompanhamento);
        this.cafes.push(novoCafe);
        return novoCafe;
    }

    ListarCafes(){
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
}

module.exports = ListaCafes;