//utilizando a API https://viacep.com.br/ws/${CEP}/jason/
//crie um formulário onde o usuário pode digitar o cep e o endereço completo é
//retornado ao clicar em buscar.

const inputCep = document.getElementById('cep');
const btnCep = document.getElementById('btnCep');
const resultadoCep = document.querySelector('.resultadoCep');

btnCep.addEventListener('click', handleClick);

function handleClick(event){
    event.preventDefault();
    const cep = inputCep.value;
    buscaCep(cep);
};

function buscaCep(cep){
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.text())
        .then(body => {
            resultadoCep.innerText = body;
        });
};

//utilizando a API https:/blockchain.info/ticker retorne no DOM o valor de compra
//da bitcoin and reais. atualize este valor a cada 30s.

const btcDisplay = document.querySelector('.btc');

function fetchBtc(){
    fetch('https:/blockchain.info/ticker')
        .then(response => response.json())
        .then(btcJson => {
            btcDisplay.innerText = ('R$ ' + btcJson.BRL.buy).replace('.', ',');
        });
};

//setInterval(fetchBtc, 1000 * 30);

fetchBtc();

//utilizando a API https:/api.chucknorris.io/jokes/random
//retorne uma piada randomica do chucknorris, toda a vez que clicar em próxima.

const paragrafoPiada = document.querySelector('.piada');
const btnProxima = document.querySelector('.proxima');

function puxarPiada(){
    fetch('https:/api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(piada => {
            paragrafoPiada.innerText = piada.value;
        })
};

btnProxima.addEventListener('click', puxarPiada);

puxarPiada();

