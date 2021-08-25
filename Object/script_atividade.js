// crie um objeto com os seus dados pessoais
//deve possuir pelo menos duas propriedades nome e sobrenome

var dadosPessoais = {
    nome: 'luan',
    sobrenome: 'souza',
    idade: 20,
    cidade: 'Passo de Torres',

//crie um método no objeto anterior, que mostre o seu nome completo

    nomeCompleto: function(){
        return this.nome + ' ' + this.sobrenome;
    }
}

console.log(dadosPessoais.nome);
console.log(dadosPessoais.nomeCompleto());

//modifique o valor da propriedade preco para 3000

var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
}

carro.preco = 3000;

// crie um objeto de um cachorro que represente um labrador,
//preto com 10 anos, que late ao ver o homem

var cachorro = {
    raca: 'labrador',
    idade: 10,
    cor: 'preto',
}

cachorro.latir = function(pessoa){
    if(pessoa == 'homem'){
        return this.raca + ' está latindo'
    }else(pessoa == 'mulher')
        return this.raca + ' não está latindo' 
}

console.log(cachorro.latir('homem'))