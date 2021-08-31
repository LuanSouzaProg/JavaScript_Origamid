//Remova o primeiro valor de comidas e coloque em uma variável
//Remova o último valor de comidas e coloque em uma variável
//adicione 'Arroz' ao final da array
//adicione 'Peixe' e 'Batata' ao inicio da array

const comidasAtividades = ['Pizza','Frango','Carne','Macarrão',];

const primeiroValor = comidasAtividades.shift();
const ultimoValor = comidasAtividades.pop();
comidasAtividades.push('Arroz');
comidasAtividades.unshift('Peixe', 'Batata');

console.log(comidasAtividades);

//Arrume os estudantes em ordem alfabética
//inverta a ordem dos estudantes
//verifique se joana faz parte dos estudantes
//verifique se juliana faz parte dos estudantes

const estudantesAtividades = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia',];

estudantesAtividades.sort();
estudantesAtividades.reverse();

console.log(estudantesAtividades);
console.log(estudantesAtividades.includes('Joana'));
console.log(estudantesAtividades.includes('Juliana'));

//substitua section por ul e div com li utilizando split e join

let htmlAtividades = '<section><div>Sobre</div><div>Produtos</div><div>Contato</div></section>';

htmlAtividades = htmlAtividades.split('section').join('ul').split('div').join('li');

console.log(htmlAtividades);

//remova o último carro, mas antes de remover salve a array original em outra variável

const carrosAtividades = ['Ford', 'Fiat', 'VW', 'Honda'];
const carrosCopia = carrosAtividades.slice();

carrosAtividades.pop();

console.log(carrosAtividades);
console.log(carrosCopia);