//Transforme o objeto abaixo em uma Constructor Function

function Pessoa(nomeAtribuido, idadeAtribuida){
    this.nome = nomeAtribuido;
    this.idade = idadeAtribuida;
    this.andar = function(){
        console.log(this.nome + ' Andou')
    }
}

//crie 3 pessoas, joão - 20 anos, maria - 25 anos, bruno - 15 anos

const joao = new Pessoa ('João', 20);
const maria = new Pessoa ('Maria', 25);
const bruno = new Pessoa ('Bruno', 15);

//crie uma contructor function (Dom) para manipulação de listas
// de elementos do dom. deve conter as seguintes propriedades e métodos:
//
//elements, retorna nodeList com os elementos selecionados
//addClass(classes), adiciona a classe a todos os elementos
//removeClass(classes), remove a classe a todos os elementos

function Dom(seletor){
    const elementList = document.querySelectorAll(seletor);
    this.elements = elementList;
    this.addClass = function(classe){
        elementList.forEach((element) =>{
            element.classList.add(classe);
        });
    };
    this.removeClass = function(classe){
        elementList.forEach((element) =>{
            element.classList.remove(classe);
        });
    };
};

const listaItens = new Dom ('li');
const listaUl = new Dom ('ul');

//listaItens.addClass('Ativar');
//listaUl.addClass('Ativar-ul');