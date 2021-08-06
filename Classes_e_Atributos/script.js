const menu = document.querySelector('.menu');

menu.classList.add('ativo', 'azul');
menu.classList.remove('azul');
menu.classList.toggle('azul');

if(menu.classList.contains('azul')){
    menu.classList.add('possui_azul');
}else{
    menu.classList.remove('não_possui_azul');
}

menu.className += ' vermelho';
console.log(menu.className);

console.log(menu);


const animais = document.querySelector('.animais');

console.log(animais.attributes);

const img = document.querySelector('img');

const srcImg = img.getAttribute('src');
img.setAttribute('alt' , 'é uma raposa');
const possuiAlt = img.hasAttribute('alt' , 'é uma raposa');
console.log(possuiAlt);

console.log(srcImg);

/*const carro = {
    portas = 4,
    andar: function(km){
        console.log(`andou ${km}`);
    }
}*/

