/*const btn = document.querySelector('button');

btn.addEventListener('click', handleClick);

//sempre usar arrowFunction se for usar o setTimeout em uma função.

function handleClick(){
    setTimeout(() => {
        console.log(this);
        this.classList.add('active');
    }, 1000)
}

function espera(texto){
    console.log(texto);
};

setTimeout(espera, 1000, 'Depois de 1s');

setTimeout(() => {
    console.log('Testando');
}, 2000); */

/*for(let i = 0; i < 20; i++){
    setTimeout(() => {
        console.log(i);
    }, 300 * i);
}*/

/*
function loop(text){
    console.log(text);
};

//setInterval(loop, 300, '300ms');

let i = 0;

const meuloop = setInterval(() => {
    console.log(i++)
        if(i > 20){
            clearInterval(meuloop);
        }
}, 300);

// para usar o clearInterval vc precisa colocar o setTimeout em uma variável
*/
