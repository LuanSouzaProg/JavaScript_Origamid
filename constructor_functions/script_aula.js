function Carro(marcaAtribuida, precoAtribuio){

    this.marca = marcaAtribuida;
    this.preco = precoAtribuio;

};

const honda = new Carro('Honda', 3000);
const fiat = new Carro('Fiat', 2000);

function Carro2(marca, precoInicial){

    this.taxa = 1.2;

    const precoFinal = precoInicial * this.taxa;
    console.log(precoFinal);

    this.marca = marca;
    console.log(this);

    this.preco = precoInicial;
    console.log(this);
};

const mazda = new Carro2('mazda', 5000);

//const Dom = {
    //seletor: 'li',
    //element(){
        //return elementoSelecionado = document.querySelector(this.seletor);
    //},
    //ativar(){
        //this.element().classList.add('Ativar');
    //},
//}

function Dom (seletor) {
    this.element = function(){
        return document.querySelector(seletor);
    };
    this.ativar = function(classe){
        element.classList.add(classe);
    };
}

const li = new Dom('li');
const ul = new Dom('ul');

const lastLi = new Dom('li:last-child');


