//Some 500 ao valor de scroll abaixo,
//atribuindo o novo valor a scroll

var scroll = 1000;

scroll += 500;

console.log(scroll);

//Atribua True para a variável darCredito,
//caso o cliente possua carro e casa.
//e false caso o contrário

var possuiCarro = true;
var possuiCasa = true;
var darCredito;

darCredito = (possuiCarro && possuiCasa) ? 'Você tem crédito' : 'Você não tem Crédito';

console.log(darCredito)