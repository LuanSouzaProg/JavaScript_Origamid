//Crie uma função construtora de Pessoa deve conter nome,sobrenome e idade
//Crie um método no protótipo que retorne o nome completo da pessoa

function Pessoa2(nome, sobrenome, idade){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
}

Pessoa2.prototype.nomeCompleto = function(){
    return `${this.nome} ${this.sobrenome}`
}

const luan = new Pessoa2 ('luan', 'de souza', 20);

//liste os métodos acessados por dados criados com nodeList, HTMLCollection, Document

Object.getOwnPropertyNames(NodeList.prototype);
Object.getOwnPropertyNames(HTMLCollection.prototype);
Object.getOwnPropertyNames(Document.prototype);

//Liste os construtores dos dados abaixos

const li = document.querySelector('li');

li; //HTMLLIElement
li.click; //Function
li.innerText; //String
li.value; //Number
li.hidden; //Boolean
li.offsetLeft; //Number
li.click(); //undefined

//Qual o constructor do dado abaixo:
li.hidden.constructor.name; //String