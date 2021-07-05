// crie uma função para verificar se um valor é truthy.
function maiorQue20Anos(idades){
    if(idades >= 20){
        return true;
    }else{
        return false;
    }
}

console.log(maiorQue20Anos(18));


//crie uma função matematica que retorne o perímetro de um quadrado
//lembrando: perímetro é a soma dos quatros lados do quadrado.

function aoQuadrado(lado){
    return lado * 4;
}

console.log(aoQuadrado(20));


//crie uma função que retorne o seu nome completo ela deve possuir
//os parâmetros : nome e sobrenome.

function nomeCompleto(meuNome){
    var nome = 'luan';
    var sobrenome = 'Souza';
    return `meu nome completo é ${nome + " " + sobrenome}`;

}

console.log(nomeCompleto());


//crie uma função que verifica se um número é par.

function parOUimpar(numero){
    if(numero%2 == 0){
        return 'esse número é par';
    }else{
        return 'esse número é impar';
    }
}

console.log(parOUimpar(5));

//crie uma função que retorne o tipo de dado do argumento passado
//nela (typeof).

function tipoDado(dados){
    return typeof dados;
}

console.log(tipoDado(20))

//addEventListener é uma função nativa do javaScript
//o primeiro parâmetro é o evento que ocorre e o segundo o callback
//utilize essa função para mostrar no console o seu nome completo
//quando o evendo 'scroll' ocorre.

function evento(){
    console.log('luan souza');
}

addEventListener('click', evento);
addEventListener('scroll', evento);

//corrija o erro abaixo.

var totalPaises = 193;
function precisoVisitar(paisesVisitados){
    return `ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}

function jaVisitei(paisesVisitados){
    return `já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}

console.log(precisoVisitar(20));

console.log(jaVisitei(20));