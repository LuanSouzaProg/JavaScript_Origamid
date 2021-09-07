function somar (n1, n2){
    return n1 * n2 + '';
};

console.log(somar(3, 3));
console.log(somar.length);

function darOi(nome, idade){
    console.log('Oi para você ' + nome + idade);
}

darOi.call(null, 'Luan ', 20);

const carro = {
    marca : 'Honda',
    ano : 2015,
}

function descricaoCarro (){
    console.log(this.marca + ' ' + this.ano);
};

descricaoCarro.call(carro);

const carros = ['Ford', 'Fiat', 'WV'];
const frutas = ['Banana', 'Pêra', 'Uva'];

carros.forEach.call(frutas, (item) =>{
    console.log(item);
})

function Dom (selector){
    this.element = document.querySelector(selector);
}

Dom.prototype.ativo = function(classe){
    console.log(this)
    this.element.classList.add(classe);
}

const li = {
    element: document.querySelector('li')
};

Dom.prototype.ativo.call(li, 'ativar');

//const ul = new Dom ('ul');

//ul.ativo.call(li, 'ativo');

const frutas2 = ['Maçã', 'Uva', 'Banana'];

Array.prototype.pop.call(frutas2);
frutas2.pop();

const arrayLike = {
    0: 'Item 1',
    1: 'Item 2',
    2: 'Item 3',
    length : 3,
};

const li2 = document.querySelectorAll('li');

const filtrarLi = Array.prototype.filter.call(li2, (item) =>{
    return item.classList.contains('ativar');
})

const filtrarLi2 = Array.prototype.filter.bind(li2, (item) =>{
    return item.classList.contains('ativar');
})

console.log(filtrarLi);
console.log(filtrarLi2());

const numeros = [20, 30, 50, 200, 300, 700, 20];

console.log(Math.max.call(null, numeros));
console.log(Math.max.apply(null, numeros));

const $ = document.querySelectorAll.bind(document, 'li');

const carros2 = {
    marca : 'Ford',
    ano : 2018,
    acelerar: function(aceleracao, tempo){
        return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
    }
}

const honda = {
    marca : 'Honda'
}

const acelerarHonda = carros2.acelerar.bind(honda);

console.log(acelerarHonda(300, 20));

console.log(carro);

function imc(altura, peso){
    return peso / (altura *altura);
};

const imc180 = imc.bind(null, 1.80);

console.log(imc(1.80, 70));
console.log(imc180(70));


