//Utilizando o forEach na array abaixo, some os valores de taxa e os valores de recebimento

const transacoes = [

    {
        descricao : 'Taxa do Pão',
        valor : 'R$ 39.00',
    },

    {
        descricao : 'Taxa do Mercado',
        valor : 'R$ 129.00',
    },

    {
        descricao : 'Recebimento do cliente',
        valor : 'R$ 99.00',
    },

    {
        descricao : 'Taxa do Banco',
        valor : 'R$ 129.00',
    },

    {
        descricao : 'Recebimento do cliente',
        valor : 'R$ 49.00',
    },

];

let taxaTotal = 0;
let recebimentoTotal = 0;

transacoes.forEach((item) => {
    const numeroLimpo = +item.valor.replace('R$ ', '')

    if(item.descricao.slice(0, 4) === 'Taxa'){
        taxaTotal = taxaTotal + numeroLimpo;
    }else if(item.descricao.slice(0, 4) === 'Rece'){
        recebimentoTotal = recebimentoTotal + numeroLimpo;
    }
});

console.log(taxaTotal);
console.log(recebimentoTotal);


//Retorne uma array com a lista abaixo

const transporte = 'Carro;Avião;Trem;Ônibus;Bicicleta';

const arrayTrasnporte = transporte.split(';');

console.log(arrayTrasnporte);

//Substitua todos os span's por a's

let html = '<ul><li><span>Sobre</span></li><li><span>Produtos</span></li><li><span>Contatos</span></li></ul>';

html = html.split('span').join('a');

console.log(html);

//Retorne o último caracter da frase

const fraseAtividade = 'Melhor do ano!';

console.log(frase[frase.length - 1]);

//Retorne o total de taxas

const transacoes2 = ['Taxa do Banco', 'TAXA DO PÃO', 'taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

let taxasTotal = 0;

transacoes2.forEach((item) =>{
    item = item.toLowerCase().trim().slice(0,4);

    if(item === 'taxa'){
        taxasTotal++
    }
});

console.log(taxasTotal);

