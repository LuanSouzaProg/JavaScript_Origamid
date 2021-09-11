//retorne no console todas as imagens do site

const retorneImg = document.querySelectorAll('img');
console.log(retorneImg);

//retorne no console apenas as imagens que começaram com a palavra imagem

const imgUnicas = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imgUnicas);

// selecione todos os links internos(onde o href começa com #)

const meusLinks = document.querySelectorAll('[href^="#"]');
console.log(meusLinks);

//selecione o primeiro h2 dentro de .animais-descricao

const primeiroH2 = document.querySelector('.animais-descricao h2');
console.log(primeiroH2.innerHTML);

//selecione o último p do site

const ultimoP = document.querySelectorAll('p');
console.log(ultimoP[ultimoP.length - 1].innerHTML);