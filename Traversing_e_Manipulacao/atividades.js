//duplique o menu e adicione ele em copy

const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');
const cloneMenu = menu.cloneNode(true);

copy.appendChild(cloneMenu)

//selecione o primeiro DT da dl de Faq

const faq = document.querySelector('.faq');
const primeiroDT = faq.querySelector('dt');

console.log(primeiroDT);

//selecione o dd referente ao primeiro DT

const proximoDD = primeiroDT.nextElementSibling;

console.log(proximoDD);

//substitua o conteúdo html de .faq pelo de .animais

const animais = document.querySelector('.animais');

faq.innerHTML = animais.innerHTML;