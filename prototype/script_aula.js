function Pessoa (nome, idade){
    this.nome = nome;
    this.idade = idade;
    this.abracar = function(){
        return 'Abraçou';
    };
    this.andar = function(){
        return 'Andou pelo objeto';
    };
};

Pessoa.prototype.andar = function(){
    return this.nome + ' pessoa andou';
}

Pessoa.prototype.nadar = function(){
    return this.nome + ' pessoa nadou';
}

const andre = new Pessoa('Andre', 28);

//console.log(Pessoa.prototype);

const pais = 'Brasil';

const cidade = new String ('Rio');

const listaAnimais = ['Cachorro', 'Gato', 'Cavalo'];

const lista = document.querySelectorAll('li');

const listaArray1 = Array.prototype.slice.call(lista);
const listaArray2 = Array.from(lista);

Object.getOwnPropertyNames(Array);


const carro = {
    marca = 'Ford',
    preco = 2000,
    andar(){
        return true;
    },
}
