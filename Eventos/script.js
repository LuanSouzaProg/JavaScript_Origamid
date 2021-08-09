const img = document.querySelector('img');

function callBack (event){
    console.log(event);
}

img.addEventListener('click', callBack);

const animaisLista = document.querySelector('.animais-lista');

function callbackLista(event){
    console.log(event.currentTarget);
    console.log(event.target);
    console.log(event.type);
}

animaisLista.addEventListener('click', callbackLista);

console.log(animaisLista);

const linkExterno = document.querySelector('a[href^="http"]');

function handleLinkExterno(event){
    event.preventDefault();
    console.log(event);
    console.log(this.getAttribute('href'));
    console.log(event.currentTarget);
}

linkExterno.addEventListener('click', handleLinkExterno);

const h1 = document.querySelector('h1');

function handleEvent(event){
    console.log(event.type, event);
}

//h1.addEventListener('click', handleEvent);
//h1.addEventListener('mouseenter', handleEvent);
//h1.addEventListener('mousemove', handleEvent);

//window.addEventListener('scroll', handleEvent);
//window.addEventListener('resize', handleEvent);

function handleKeyBoard(event){
    if(event.key === 'f'){
        document.body.classList.toggle('fullscreen');
    }
}

window.addEventListener('keydown', handleEvent);


const imgs = document.querySelectorAll('img');

function imgSrc(event) {
    const src = event.currentTarget.getAttribute('src');
    console.log(src);
}

imgs.forEach((img) => {
    img.addEventListener('click', imgSrc);
})



