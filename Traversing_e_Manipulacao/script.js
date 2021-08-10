const h1 = document.querySelector('h1');
const animaisLista = document.querySelector('.animais-lista');

console.log(h1.innerHTML);
console.log(h1.outerHTML);

//h1.innerHTML = '<p>Novo Título</p>';

console.log(animaisLista.innerHTML);

const lista = document.querySelector('.animais-lista');

console.log(lista.parentElement);
console.log(lista.nextElementSibling);
console.log(lista.previousElementSibling);
console.log(lista.children[lista.children.length - 1]);
console.log(lista.querySelector('li:last-child'));

console.log(lista.childNodes);
console.log(lista.previousSibling);

const animais = document.querySelector('.animais');
const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');

const mapa = document.querySelector('.mapa')

contato.replaceChild(lista, titulo);

//animais.appendChild(titulo);
//contato.insertBefore(animais, mapa);

const novoH1 = document.createElement('h1');

novoH1.innerText = 'Novo Título';
novoH1.classList.add('titulo');

mapa.appendChild(novoH1)

console.log(novoH1);

const h1 = document.querySelector('h1');
const faq = document.querySelector('.faq');
const cloneH1 = h1.cloneNode(true);

cloneH1.classList.add('azul')
faq.appendChild(cloneH1);
