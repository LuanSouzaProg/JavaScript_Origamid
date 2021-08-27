//retorne um número aleatório entre 1050 e 2000

console.log(Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050);

//Retorne o maior número da lista abaixo

const numeros = '4, 5, 20, 8, 9';

const arrayNumber = numeros.split(', ');
const numberMaximo = Math.max(...arrayNumber);
console.log(numberMaximo);


//crie uma função para limpar os preços e retornar os números com centavos arredondados
//depois retorne a soma tolal

const listaPrecos = ['R$ 59,99','R$ 100,222','R$ 230','r$ 200',];

function limparPreco(preco){
    preco = +preco.toUpperCase().replace('R$', '').trim().replace(',', '.');
    preco = +preco.toFixed(2);
    return preco;
}

let somaTotal = 0;

listaPrecos.forEach((item) =>{
    somaTotal = somaTotal + limparPreco(item);
})

console.log(somaTotal.toLocaleString('pt-BR', {style : 'currency', currency: 'BRL'}));

limparPreco(listaPrecos[0]);