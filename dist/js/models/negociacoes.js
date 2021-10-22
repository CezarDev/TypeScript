export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adicionaLista(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
}
