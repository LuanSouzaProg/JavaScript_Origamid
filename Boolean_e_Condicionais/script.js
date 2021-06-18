// Boolean

var possuiGraduacao = false;
var possiuDoutorado = true;

//condicionais if e else

if(possuiGraduacao){
    console.log('Possui graduação');
}else if(possiuDoutorado){
    console.log('Não possui graduação');
}else{
    console.log('Não possui nada');
}



var nome = 'luan';

if(nome){
    console.log(nome);
}else{
    console.log('nome não existe');
}

var nome2 = '10kg' / 10;

if(nome2){
    console.log(nome2);
}else{
    console.log('nome não existe');
}

//operador lógico de negação : ! 

var possuiGraduacao2 = false;

if(!possuiGraduacao2){
    console.log('não possui graduação');
}



var x = 10;

console.log(x === 10);
console.log(x !== 10);


// operadores lógicos && o famoso E
//o && retorna sempre o primeiro false ou o último verdadeiro

true && true; //true
true && false; //false
false && true; //false
'gato' && 'cão'; // 'cão'
(5 - 5) && (5 + 5); // 0
'gato' && false; // false
(5>=5) && (3 < 6); //true

if((5 - 5) && (5 + 5)){
    console.log('Verdadeiro');
}else{
    console.log('false');
}

var condicional = (5 - 10) && (5 + 5);

if(condicional){
    console.log('Verdadeiro : ' + condicional);
}else{
    console.log('false');
}

// operadores lógicos || o famoso ou
//retornar o primeiro número verdadeiro 

true || true; //true
true || false; //true
false || true; //true
'gato' || 'cão'; //'gato'
(5 - 5) || (5 + 5); //10
'gato' || false; //'gato'
(5 >= 5) || (3 < 6); true


var condicional2 = (5 - 5) || (5 + 5) || (10 - 2);
var condicional3 = (5 - 5) || (5 + 5) && (10 - 2);
console.log(condicional2);
console.log(condicional3);


//switch 

var corFavorita = 'verde'

switch(corFavorita){
    case'azul':
        console.log('olha para o céu')
    break;

    case'amarelo':
        console.log('olhe para o sol')
    break;

    case'verde':
        console.log('olhe para a floresta')
    break;

    default:
        console.log('feche os olhos');
}


