// Retorne o url da página atual utilizando o objeto window

const hrefPagina = window.location.href;
console.log(hrefPagina);

// Seleciona o primeiro elemento da página que possua a classe ativo

const elementoAtivo = document.querySelector('.ativo');

//Retorne a linguagem do navegador 

const linguaguem = window.navigator.language;
console.log(linguaguem);

// Retorne a largura da janela

const larguraTotal = window.innerWidth;
console.log(larguraTotal);