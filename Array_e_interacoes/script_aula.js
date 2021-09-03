const carros = ['Ford', 'Fiat', 'Honda'];

carros.forEach((item, index, array) =>{
    console.log(item.toUpperCase, index, array);
})

const li = document.querySelectorAll('li');

li.forEach((item)=>{
    item.classList.add('ativo');
});

const carros2 = ['Ford', 'Fiat', 'Honda'];

const novaArray = carros2.map((item, index, array) =>{
    return item.toUpperCase;
})

const numeros = [2, 4, 5, 6, 78];

const numerosX2 = numeros.map(n => n * 2);

console.log(carros2);
console.log(numerosX2);

const aulas = [
    {
        nome : 'HTML 1',
        min : 15,
    },
    {
        nome : 'HTML 2',
        min : 10,
    },
    {
        nome : 'CSS 1',
        min : 20,
    },
    {
        nome : 'JS 1',
        min : 25,
    },
];

const tempoAulas = aulas.map(aula =>{
    return aula.min;
});

const nomeAulas = (aula) =>{
    return aula.nome;
}

const arrayNomeAulas = aulas.map(nomeAulas);

console.log(tempoAulas);
console.log(arrayNomeAulas);

const aulas2 = [10, 25, 30];

const reduceAulas = aulas2.reduce((acumulador, item, index, array) =>{
    return acumulador + item;
}, 0);

console.log(reduceAulas);

const numeros2 = [10, 25, 30, 3, 54, 33, 22];

const maiorNumero = numeros2.reduce((anterior, atual) =>{
    if(anterior > atual){
        return anterior;
    }else{
        return atual;
    }
}, 0);

const aulas3 = [
    {
        nome : 'HTML 1',
        min : 15,
    },
    {
        nome : 'HTML 2',
        min : 10,
    },
    {
        nome : 'CSS 1',
        min : 20,
    },
    {
        nome : 'JS 1',
        min : 25,
    },
];

const listaAulas = aulas2.reduce((acumulador, aula, index) =>{
    acumulador[index] = aula.nome;
    return acumulador;
}, {});

const frutas = ['Banana', '','Pêra', 'Uva'];

const temUva = frutas.some((item) =>{
    return item === 'Uva';
});

const every = frutas.every((frutas) =>{
    return frutas;
});

const find = frutas.find((item) =>{
    return item === 'Uva';
});

const findIndex = frutas.findIndex((item) =>{
    return item === 'Uva';
});

console.log(every);
console.log(temUva);
console.log(find);
console.log(findIndex);

const numeros3 = [6, 43, 22, 88, 101, 29];

const maiorQue3 = numeros3.every((numero) =>{
    return numero > 3;
});

console.log(maiorQue3);

const frutas2 = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã'];

const arrayLimpa = frutas.filter((fruta) =>{
    return fruta;
});

console.log(arrayLimpa);

const aulas4 = [
    {
        nome : 'HTML 1',
        min : 15,
    },
    {
        nome : 'HTML 2',
        min : 10,
    },
    {
        nome : 'CSS 1',
        min : 20,
    },
    {
        nome : 'JS 1',
        min : 25,
    },
];

const maiores15 = aulas4.filter((aulas) =>{
    return aulas.min >= 15;
});

console.log(maiores15);