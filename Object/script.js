var pessoa = {
    nome: 'Luan',
    idade: 20,
}

console.log(pessoa.idade);

var quadrado = {
    lados: 4,

    area:function(lado){
        return lado * lado;
    },

    perimetro: function(lado){
        return this.lados * lado;
    },
}

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));


console.log(Math.random());

//Dot Notation Get

var menu = {
    width: 800,
    height: 50,
    backgroundColor: '#84E',
    metadeHeight(){
        return this.height / 2
    }
}

menu.backgroundColor = '#000';
menu.color = 'blue';

menu.esconder = function(){
    console.log('escondi');
}

var bg = menu.backgroundColor;