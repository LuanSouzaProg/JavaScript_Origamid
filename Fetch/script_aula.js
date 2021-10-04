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

const img = fetch("./teste.jpg");

img.then(resolucao => resolucao.blob())
.then(body => {
    const blobUrl = URL.createObjectURL(body);
    const imgDom = document.querySelector('img');
    imgDom.src = blobUrl;
});

const TestClone = fetch("https://viacep.com.br/ws/88980-000/json/");

TestClone.then(resolucao => {
    const resolucao2 = resolucao.clone();
    resolucao.text().then((text)=>{
        //console.log(text)
    });
    resolucao2.json().then((json)=>{
        //console.log(json);
    });
}).then(body => {
    console.log(body);
});

const testStatus = fetch("https://viacep.com.br/ws/88980-000/json/");

testStatus.then(response => {
    console.log(response.status);
    console.log(response.type);
    console.log(response.url);

    if(response.status === 404){
        console.log('Página não existe');
    }else if(response.status === 200){
        console.log('Página existe')
    }
});

