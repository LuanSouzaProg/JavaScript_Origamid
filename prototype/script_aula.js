function Pessoa (nome, idade){
    this.nome = nome;
    this.idade = idade;
}

Pessoa.prototype.andar = function(){
    return this.nome + ' pessoa andou';
}

Pessoa.prototype.nadar = function(){
    return this.nome + ' pessoa nadou';
}

const andre = new Pessoa('Andre', 28);

console.log(Pessoa.prototype);