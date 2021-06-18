//verificar se a sua idade é maior do que a de algum parente
//dependendo do resultado coloque no console 'é maior', 'é igual' ou 'é menor'

var idade = 32;
var parente = 30;

if(idade<parente){
    console.log('você é menor');
}else if(idade === parente){
    console.log('vocês tem a mesma idade');
}else{
    console.log('você é maior');
}

//qual valor é retornado na seguinte expressão?

var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
// 3

// verifique se as seguintes variáveis são true ou false

var nome = 'luan'; //true
var idade = 28; //true
var possuiDoutorado = false; // false
var empregoFuturo; // false
var dinheiroNaConta = 0; //false

console.log(!!nome, !!idade, !!possiuDoutorado, !!empregoFuturo, !!dinheiroNaConta);

//compare o valor de habitantes do brasil com china (valor em milhão)

var brasil = 207;
var china = 1340;

var total = china - brasil;

if(brasil < china){
    console.log('china é maior que o brasil e tem : ' + total + ' de habitantes a mais');
}else{
    console.log('brasil é maior que a china');
}

// oque irá aparecer no console?

if (('Gato' === 'gato') && (5 > 2)){
    console.log('Verdadeiro');
}else{
    console.log('Falso');
}

//Falso

//oque ira irá aparecer no console?

if(('Gato' === 'gato') || (5 > 2)){
    console.log('Gato' && 'Cão');
}else{
    console.log('Falso')
}


//'Cão'