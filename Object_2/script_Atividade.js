//crie uma função que verifique corretamente o tipo de dado.

function retornarDados (dados){
    return Object.prototype.toString.call(dados);
};

console.log(retornarDados('Teste'));

//crie um object quadrado com a propriedade lados e torne ela imutável.

const quadrado = {};

Object.defineProperties(quadrado, {
    lados : {
        value : 4,
        enumerable : true,
    }
})

console.log(quadrado);

//previna qualquer mudança no object abaixo

const configuracao = {
    with : 800,
    height : 600,
    background : '#333',
};

Object.freeze(configuracao);

//liste o nome de todas as propriedades do prototipo de string e array.

console.log(Object.getOwnPropertyNames(String.prototype));
console.log(Object.getOwnPropertyNames(Array.prototype));