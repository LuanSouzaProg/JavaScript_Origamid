//Selecione cada curso e retorne uma array com objetos contendo o título, descricao,
//aulas e horas de cada curso

const cursos = document.querySelectorAll('.curso');
const arrayCursos = Array.from(cursos);

const objetosCurso = arrayCursos.map((cursos) => {

    const titulo = cursos.querySelector('h1').innerText;
    const descricao = cursos.querySelector('p').innerText;
    const aulas = cursos.querySelector('.aulas').innerText;
    const horas = cursos.querySelector('.horas').innerText;

    return {
        titulo,
        descricao,
        aulas,
        horas,
    }
});

console.log(objetosCurso);

//Retorne uma lista com os números maiores que 100
const numerosAtividades = [3, 44, 333, 23, 122, 322, 33];

const maioresQue100 = numerosAtividades.filter((number) =>{
    return number > 100;
});

console.log(maioresQue100);

//Verifique se BAIXO faz parte da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado'];

const possuiBaixo = instrumentos.some((item) => {
    return item === 'Baixo'
})

console.log(possuiBaixo);

//Retorne o valor total das compras
const compras = [
    {
        item: 'Banana',
        preco: 'R$ 4,99',
    },
    {
        item: 'Ovo',
        preco: 'R$ 2,99',
    },
    {
        item: 'Carne',
        preco: 'R$ 25,49',
    },
    {
        item: 'Refrigerante',
        preco: 'R$ 5,35',
    },
    {
        item: 'Queijo',
        preco: 'R$ 10,60',
    },
]

const soma = compras.reduce((acumulador, item ) => {

    const limparPreco = item.preco.replace('R$ ', '').replace(',', '.')
    var convertido = parseFloat(limparPreco);

    return acumulador + convertido;
}, 0)

console.log(soma);

