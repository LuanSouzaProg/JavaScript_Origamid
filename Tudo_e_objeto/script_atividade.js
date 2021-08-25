// nomeie 3 prorpiedades ou métodos de strings

var nome2 = 'Luan';

nome2.toLowerCase;
nome2.bold;
nome2.fixed;

// nomeie 5 propriedades ou métodos de elementos do DOM

var btn = document.querySelector('.btn')

btn.addEventListener;
btn.childElementCount;
btn.cloneNode;
btn.remove;
btn.scroll;

//Busque na web um objeto(método) capaz de interagir com o clip,
//clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V

let btn2 = document.querySelector('#copy');
btn2.addEventListener('click', function(e) {
    let textArea = document.querySelector('.text');
    textArea.select();
    document.execCommand('copy');
});