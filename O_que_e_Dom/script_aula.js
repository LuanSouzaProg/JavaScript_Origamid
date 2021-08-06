//window.alert('Olá mundo');

const href = window.location.href;

console.log(href);

if(href === "http://127.0.0.1:5500/O_que_e_Dom/index.html"){
    console.log('O meu site');
}else{
    console.log('Não é o meu site');
}

const h1Selecionado = document.querySelector('.h1');
const h1Classes = h1Selecionado.classList;

function callBackh1(){
    console.log('clicou em', h1Selecionado);
}

h1Selecionado.addEventListener('click', callBackh1);
