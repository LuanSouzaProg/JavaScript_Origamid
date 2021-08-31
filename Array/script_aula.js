const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
const precos = [49, 99, 69, 89];

const dados = [new String('tipo 1'), ['carro', 'portas', {cor : 'Azul', preco : 2000}],
function andar(nome) {
    console.log(nome)
}];

dados[2]('Ford');
dados[1][2].cor;

const carros = new Array ('Ford', 'Fiat', 'Honda');

carros[2] = 'Ferrari';
carros[3] = 'Kia';
carros[20] = 'Ferrari';

console.log(carros.length);

const li = document.querySelectorAll('li');

const arrayLi = Array.from(li);

const objeto = {
    0: 'Luan',
    1: 'Natan',
    2: 'Arthur',
    3: 'Gustavo',
    length: 3, 
};

const objetoArray = Array.from(objeto);

console.log(li)
console.log(arrayLi);

const frutas = ['Bananas', 'Pêra', ['Uva Roxa', 'Uva Verde']];

console.log(frutas[2][0].length);

const instrumentos2 = ['Guitarra', 'Baixo', 'Violão'];
const idades = [32, 21, 33, 43, 1, 12, 8];

instrumentos2.sort(); //organiza os itens em uma array
idades.sort();

console.log(instrumentos2);
console.log(idades);

const carros2 = ['Ford', 'Fiat', 'VW'];
carros2.unshift('Honda', 'Kia',); // add os itens dígitados no inicio da array
console.log(carros2);

//carros2.push('Ferrari'); // add os itens dígitados no fila na array
//console.log(carros2);

//console.log(carros2.pop()); //tira o último item da array
//console.log(carros2);

//console.log(carros2.shift()); //tira o primeiro item da array
//console.log(carros2);

//console.log(carros2.reverse()); //inverte a ordem da array


console.log(carros2);
console.log(carros2.splice(2,0, 'Fusca'));

console.log(carros2);

console.log(['Item1', 'Item2', 'Item3', 'Item4', 'Item5'].copyWithin(2, 0, 3));

console.log(['Item1', 'Item2', 'Item3', 'Item4', 'Item5'].fill('Banana', 0, 2));

const transporte1 = ['Barco', 'Avião'];
const transporte2 = ['Carro', 'Moto'];

const todosTransportes = transporte1.concat(transporte2);

console.log(todosTransportes);

const linguagens = ['html', 'css', 'js', 'php', 'python', 'js', ];

console.log(linguagens.includes('css'));//procura para ver se tem na array a palavra dígitada, mostrando true or false
console.log(linguagens.includes('ruby'));
console.log(linguagens.indexOf('python'));//mostra em qual lugar da array o item dígitado está
console.log(linguagens.indexOf('js'));
console.log(linguagens.lastIndexOf('js'));//mostra o último lugar que o item foi dígitado

console.log(linguagens.slice(2,4)); //retorna o item entre as posições dígitadas


let htmlString = '<h2>Título Principal</h2>';
htmlString = htmlString.split('h2');
htmlString = htmlString.join('h1');

console.log(htmlString);



