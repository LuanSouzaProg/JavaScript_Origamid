var x = 5;
var y = 10;

x += y; // x = x + y (15) 
x -= y; // x = x - y (-5) 
x *= y; // x = x * y (50) 
x /= y; // x = x / y (0.5) 
x %= y; // x = x % y (0) 
x **= y; // x = x ** y (9765625) 


var numero = 20;
var numero2 = 10; 

numero += numero2; // numero = numero + numero2
console.log(numero);

//Operador Ternário

var idade = 20;
var naoPossiuDiabetes = true;

var podeBeber;
podeBeber = (idade >= 18 && naoPossiuDiabetes)? 'Pode beber' : 'Não pode beber';

console.log(podeBeber)