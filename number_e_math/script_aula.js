//Verifica se está retornando NaN

console.log(Number.isNaN(NaN));
console.log(Number.isNaN(5));

//Verifica se o número e inteiro

console.log(Number.isInteger(20));
console.log(Number.isInteger(20.5));

//parseFloat retorna números de strings, não pode conter caracteres

console.log(parseFloat('2002020'));
console.log(parseFloat('100 reais'));
console.log(parseFloat('R$ 100'));

console.log(parseInt('23.59'));

const preco = 2.99;
console.log(preco.toFixed());

const carro = 1000.455;
console.log(carro.toFixed(2));

const preco2 = 1499.49;
console.log(preco2.toFixed());

//toLocaleString formata o número de acordo com a língua e opções passadas.

let valor = 48.49;
let valor2 = 48.49;
valor = valor.toLocaleString('pt-BR', {style:'currency', currency:'BRL'});
valor2 = valor2.toLocaleString('en-US', {style:'currency', currency:'USD'});

console.log(valor);
console.log(valor2);

//Math é um objeto

console.log(Math.SQRT1_2);
console.log(Math.PI);

console.log(Math.abs(-5.5)); //transforma em um número absoluto
console.log(Math.ceil(4.8334)); //sempre arredonda pra cima
console.log(Math.ceil(4.3));
console.log(Math.floor(4.8334));//sempre arredonda pra baixo
console.log(Math.floor(4.3));
console.log(Math.round(4.8334));//arredonda conforme os números dígitados
console.log(Math.round(4.3));

console.log(Math.max(5,3,10,42,2));
console.log(Math.min(5,3,10,42,2));

console.log(Math.random());

const aleatorio = Math.floor(Math.random() * 100);  // número random de 0 e 100
const aleatorio2 = Math.floor(Math.random() * 500);

console.log(aleatorio);
console.log(aleatorio2);

console.log(Math.floor(Math.random() * (72 - 32 + 1)) + 32);

const number1 = 20;
const number2 = 40;

console.log(Math.floor(Math.random() * (number2 - number1 + 1)) + number1);

