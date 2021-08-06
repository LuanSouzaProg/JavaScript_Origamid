//mostre no console cada parágrafo do site
//mostre o texto dos parágrafos no console

const paragrafos = document.querySelectorAll('p');
const paragrafosArray = Array.from(paragrafos);

console.log(paragrafosArray);

paragrafosArray.forEach((item) => console.log(item.innerText));

//como corrigir os erros abaixos

const imgsAtividades = document.querySelectorAll('img');

imgsAtividades.forEach((item, index) =>{
    console.log(item, index);
});

let i = 0;
imgsAtividades.forEach(() => {
    console.log(i++);
});

imgsAtividades.forEach(() => (i++));