//Quando o usuário clicar nos links internos do site,
//adicione a classe ativo ao item clicaco e remova dos
//demais itens caso eles possuam a mesma. Previna
//o comportamento padrão desses links

const linksInternos = document.querySelectorAll('a[href^="#"]');

function handleLink(event){
    event.preventDefault();
    linksInternos.forEach((link) =>{
        link.classList.remove('Ativo');
    });
    event.currentTarget.classList.add('Ativo');
}

linksInternos.forEach((link) =>{
    link.addEventListener('click', handleLink);
});

//Selecione todos os elementos do site começando a partir do body,
//ao clique mostre exatamente quais elementos estão sendo clicados

//-------------------------------

//Utilizando o código anterior, ao invés de mostrar no console,
//remova o elemento que está sendo clicado, o método remove() rempove um elemento


const todosElementos = document.querySelectorAll('body *');

function handleElemento(event){
    console.log(event.currentTarget);
    event.currentTarget.remove(); //remove
}


todosElementos.forEach((elemento) =>{
    elemento.addEventListener('click', handleElemento);
})


//Se o usuário clicar na tecla (T), aumente todo o texto do site

function handleClickT(event){
    if(event.key === 't'){
        document.documentElement.classList.toggle('textomaior');
    }
}

window.addEventListener('keydown', handleClickT);