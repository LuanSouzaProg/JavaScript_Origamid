const listaAnimais = document.querySelector('.animais-lista');

const height = listaAnimais.scrollHeight;

console.log(listaAnimais);
console.log(height);

const primeiroh2 = document.querySelector('h2');
const h2left =  primeiroh2.offsetLeft;
const reck = primeiroh2.getBoundingClientRect();

console.log(h2left);
console.log(reck);

if(reck.top < 0){
    console.log('passou do elemento');
}

console.log(
    window.innerWidth,
    window.innerHeight,
    window.outerWidth,
    window.outerHeight,
    window.pageYOffset,
    window.pageXOffset,
);

const small = window.matchMedia('(max-width: 600px)').matches;

if(small){
    console.log('usuário mobile');
}else{
    console.log('usuário desktop');
}

console.log(small);

