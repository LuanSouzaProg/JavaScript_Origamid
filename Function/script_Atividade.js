//retorne a soma total de caracteres dos parágrafos acima utilizando  reduce

const paragrafos = document.querySelectorAll('p');

const totalCaracteres = Array.prototype.reduce.call(paragrafos, (acumulador, item) =>{
    return acumulador + item.innerText.length;
}, 0);

console.log(totalCaracteres);

//crie uma função quer retorne novos elementos html, com os seguintes parâmetros tag, classe e conteudo.

function criarElemento (tag, classe, conteudo){
    const elemento = document.createElement(tag);

    classe ? elemento.classList.add(classe) : null;
    conteudo ? elemento.innerHTML = conteudo : null;

    return elemento;
};

console.log(criarElemento('h1', 'Ativo', 'Olá Mundo'));

//crie uma nova função utilizando como base essa nova função deverá sempre criar h1 com a classe titulo. Porém o parâmetro conteudo continuará dinâmico

const h1Titulo = criarElemento.bind(null, 'h1', 'titulo');

const cursoJS = h1Titulo('Curso de JavaScript');
const cursoHTML = h1Titulo('Curso de Html');

console.log(cursoJS, cursoHTML);