//tipos de strings

// var nome = 'luan de souza'; //string
// var idade = 20; //number
// var time; //undefined
// var time2 = null; //null
// var simbolo = Symbol(); //symbol
// var possuiFaculdade = true; // boolean


// console.log(typeof nome);
// console.log(typeof idade);
// console.log(typeof time);
// console.log(typeof time2);
// console.log(typeof simbolo);
// console.log(typeof possuiFaculdade);


// somar e concatenar strings

var nome = 'luan';
var sobrenome = 'souza';
var nomeCompleto = nome + ' ' + sobrenome;
console.log(nomeCompleto);

var gols = 1000;
var frase = 'Romário fez ' + gols + ' gols';
console.log(frase);

var ano = '2018';
var mes = 8;
console.log(ano + ' ' + mes)

var melhor = 'teste';
var frase1 = "esse é o" + melhor +"jogo";
console.log(frase1);

//template string

var gols2 = 1200;
var frase2 = `Romário fez ${gols2} gols`;
console.log(frase2)