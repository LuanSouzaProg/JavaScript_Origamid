const doc = fetch("./docs.txt");

doc.then((resolucao)=>{
    return resolucao.text();
}).then((body)=>{
    const conteudo = document.querySelector('.conteudo');
    conteudo.innerText = body;
});

const cep = fetch("https://viacep.com.br/ws/88980-000/json/");

cep.then((resolucao)=>{
    return resolucao.json();
}).then((body)=>{
    const conteudo = document.querySelector('.cep');
    conteudo.innerText = body.localidade;
});

const background = fetch("./style.css");

background.then((resolucao)=>{
    return resolucao.text();
}).then((body)=>{
    const conteudo = document.querySelector('.conteudo');
    const style = document.createElement('style');
    style.innerHTML = body;
    conteudo.appendChild(style);
});

const paginaSobre = fetch("./sobre.html");
const div = document.createElement('div');

paginaSobre.then((resolucao)=>{
    return resolucao.text();
}).then((body)=>{
    div.innerHTML = body;
    const titulo = div.querySelector('h1');
    document.querySelector('h1').innerText = titulo.innerText;
});