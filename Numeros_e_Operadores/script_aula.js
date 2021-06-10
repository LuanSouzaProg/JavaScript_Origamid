// Operadores Aritméticos

var soma = 100 + 50; //150
var subtracao = 100 - 50; //50
var multiplicacao = 100 * 2; //200
var divisao = 100 / 2; //50
var expoente = 2 ** 4; //16
var modulo = 14 % 5; //4

var total = 10 + 5 + 10;
console.log(total);

var totalDivisao = 200 / 5;
console.log(totalDivisao);

var totalModulo = 3872983892 % 3;
console.log(totalModulo);

//Operadores Aritméticos(Strings)

var soma2 = '100' + 50; //10050
var subtracao2 = '100' - 50; //50
var multiplicacao2 = '100' * '2'; //200
var divisao2 = '10' / 2; //5
var divisaoComCaracter = 'Comprei 10' / 2; //NaN (Not a Number)

console.log(soma2);
console.log(subtracao2);
console.log(multiplicacao2);
console.log(divisao2);
console.log(isNaN(divisaoComCaracter))

//A ordem importa

var soma01 = 20 + 5 * 2; //30
var soma02 = (20 + 5) * 2; //50
var soma03 = 20 / 2 * 5; //50
var soma04 = 10 + 10 * 2 + 20 / 2; //40


var soma1 = 10 + 10 + 20 + 30 * 4 / 2 + 10; // 110

console.log(soma1)

//Operadores aritméticos unários

var incremento = 5;
console.log(incremento++); //5
console.log(incremento); //6

var incremento2 = 5;
console.log(++incremento2); //6
console.log(incremento2); //6

//Mesma coisa para decremento (--)

//O + e - tenta trasnformar o valor seguinte em número
//O - antes de um número torna ele negativo

var frase = 'Isso é um teste';
+frase; //NaN
-frase; //NaN

var idade = '28';
+idade; //28 (número)
-idade; //-28 (número)
console.log(+idade + 5); //33

var possuiFaculdade = true;
console.log(+possuiFaculdade); //1

var idade2 = '28';
var soma = 5;

console.log(idade2 + soma); // concatena
console.log(+idade + soma); // soma 