const { v4: uuidv4 } = require("uuid");

class Cafe {
    constructor(tipo, tamanho, acompanhamento){
        this.id = uuidv4();
        this.tipo = tipo;
        this.tamanho = tamanho;
        this.acompanhamento = acompanhamento;
    }
}

module.exports = Cafe;