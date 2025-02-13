const { v4: uuid4 } = require("uuid");

class Cafe {
    constructor(tipo, tamanho, acompanhamento){
        this.id = uuid4();
        this.tipo = tipo;
        this.tamanho = tamanho;
        this.acompanhamento = acompanhamento;
    }
}

module.exports = Cafe;