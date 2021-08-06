//adicione a classe ativo a todos os itens do menu

const addAtivos = document.querySelectorAll('.menu a');

addAtivos.forEach((item) => {
    item.classList.add('ATIVO');
});

console.log(addAtivos);

//remove a classe ativo de todos os itens do menu e mantenha apenas o primeiro

addAtivos.forEach((item) => {
    item.classList.remove('ATIVO');
});

addAtivos[0].classList.add('ATIVO');

//verifique se as imagens possuem o atributo alt

const imgs = document.querySelectorAll('img');

imgs.forEach((img) => {
    const possuiAtributo = img.hasAttribute('alt');
    console.log(possuiAtributo);
})

//modifique o href do link externo no menu

const link = document.querySelector('a[href^="http"]');
link.setAttribute('href', 'https://www.google.com/');

console.log(link);