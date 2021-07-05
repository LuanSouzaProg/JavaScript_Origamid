var nome = 'Luan';

console.log(nome);
console.log(nome.length);

var nomeMinusculo = nome.toLowerCase();

console.log(nomeMinusculo);

var numero = 1.8.toFixed();

console.log(numero);

function areaQuadrado(lado){
    return lado * lado;
}

console.log(areaQuadrado.toString());

var btn = document.querySelector('.btn');

btn.addEventListener('click', function(){
    console.log('Clicou')
})
