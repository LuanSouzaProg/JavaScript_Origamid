const comida = 'pizza';
const agua = new String('Agua');

console.log(comida.length);

const frase = 'A melhor comida';

console.log(frase[frase.length -1]);
console.log(frase.charAt(frase.length[1]));

const frase2 = 'A melhor linguagem é ';
const linguagem = 'JavaScript';

const fraseFinal = frase.concat(linguagem, '!!', 'oi');

const fruta = 'Banana';
const listaFruta = 'Melancia, Banana, Laranja';

console.log(listaFruta.includes(fruta, 5)); //true
fruta.includes(listaFruta); //false

console.log(fruta.startsWith('Ba'));
console.log(fruta.endsWith('na'));

const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

console.log(transacao1.slice(0, 3));
console.log(transacao2.slice(0, 2));
console.log(transacao3.slice(0, -2));

console.log(transacao1.substring(0, 3));
console.log(transacao2.substring(0, 2));
console.log(transacao3.substring(0, 10));

console.log(transacao1.indexOf('c'));
console.log(transacao2.indexOf('f'));
console.log(transacao3.indexOf('T'));

console.log(transacao1.lastIndexOf('t'));
console.log(transacao2.lastIndexOf('t'));
console.log(transacao3.lastIndexOf('a'));

const preco = ['R$ 99,00', 'R$ 199,00', 'R$ 299,00'];

preco.forEach((item) =>{

    console.log(item.padStart(20, '.'));

});

const frase3 = 'Tá';

console.log(frase3.repeat(3));

//regular expression

let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
listaItens = listaItens.replace(/[ ]+/g,', ');
console.log(listaItens);

const arrayLista = listaItens.split(', ');
console.log(arrayLista);

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
const htmlArray = htmlText.split('div');
const novoHtml = htmlArray.join('section');

console.log(htmlText);
console.log(htmlArray);
console.log(novoHtml);

const frutasArray = ['Banana','Melancia','Laranja'];
console.log(frutasArray.join(', '));

const sexo1 = 'Feminino';
const sexo2 = 'feminino';
const sexo3 = 'FEMININO';

console.log(sexo1.toLowerCase() === 'feminino');
console.log(sexo2.toLowerCase() === 'feminino');
console.log(sexo3.toLowerCase() === 'feminino');

const valor = '   R$ 23.00';
console.log(valor.trim());
console.log(valor.trimStart());
console.log(valor.trimEnd());