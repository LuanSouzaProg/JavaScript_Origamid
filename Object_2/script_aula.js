const pessoa = new Object({
    nome : 'Luan',
});

console.log(pessoa);

const carro = {
    rodas : 4,

    init(valor){
        this.marca = valor;
        return this;
    },

    acelerar(){
        return this.marca + ' Acelerou';
    },

    buzinar(){
        return this.marca + ' Buzinou';
    },
};

const honda = Object.create(carro).init('Honda');

console.log(honda.acelerar());

const ferrari = Object.create(carro).init('Ferrari');

console.log(ferrari.acelerar());

const funcaoAutomovel = {
    acelerar(){
        return 'Acelerou';
    },

    buzinar(){
        return 'Buzinou';
    },
}

const motos = {
    rodas : 2,
    capacete : true,
}

const carros = {
    rodas : 4,
    portaMala : true,
}

Object.assign(motos, funcaoAutomovel);

console.log(motos);

Object.assign(carros, funcaoAutomovel);

console.log(carros);

const motos2 = {
    capacete : true,
};

Object.defineProperties(motos2, {
    rodas : {
        //configurable : false, //impede deletar e mudar o valor do object, caso estiver false.
        //writable: true, //caso colocar em true, pode ser feita a mudança de valor.
        //enumerable: true, //torna enumerável.

        get(){
            return this._rodas;
        },

        set(valor){
            this._rodas = valor * 2 + 'Total rodas';
        },
    }
});

console.log(motos2);

const innerHeightConfig = Object.getOwnPropertyDescriptor(window, 'innerHeight');

console.log(innerHeightConfig);

const arrayNames = Object.getOwnPropertyNames(Array.prototype);

console.log(arrayNames);

const frutas = ['Banana'];

console.log(Object.getPrototypeOf(frutas)); //retorna o prototype do valor dígitado.

const frutas1 = ['Banana', 'Uva'];
const frutas2 = ['Banana', 'Uva'];

const novasFrutas = frutas1;

console.log(Object.is(frutas1, frutas2));
console.log(Object.is(frutas1, novasFrutas)); // só retorna true quando estiver falando do mesmo object.

const carro2 = {
    marca : 'ford',
    ano : 2018,
}

Object.freeze(carro2);// congela o object e não permite mais fazer alterações.
Object.seal(carro2);//não permite add novas coisas ao object, mais permite fazer alterações nos criados.
Object.preventExtensions(carro2);// não permite add novas coisas ao object, mais permite deletar as criadas.

const frase = 'Isso é uma string';
frase.constructor; //string

const frutas3 = ['Banana', 'Uva'];
const frase2 = 'Olá'
const somar = function (a, b) {
    return a + b;
};

const carro3 = {
    marca : 'Ford',
};

console.log(frutas3.toString());
console.log(frase2.toString());
console.log(somar.toString());
console.log(carro3.toString());

Object.prototype.toString.call(frutas3); //método de verificação(usado para verificar qual é o tipo do object).

