// crie uma array com os anos que o Brasil ganhou a copa
//1959,1962,1970,1994,2002

var copas = [1959, 1962, 1970, 1994, 2002];

//interaja com o array utilizando um loop para mostrar
//no console a seguinte mensagem, 'O Brasil ganhou a copa de ${ano}'

for(var i = 0; i < copas.length; i++){
    console.log('O Brasil ganhou a copa de ', copas[i]);
}

//interaja com o loop abaixou e pare ao chegar em pera

var frutas = ['bananas', 'maçã', 'Pera', 'Uva', 'Melância'];

for(var n = 0; n < frutas.length; n++){
    console.log(frutas[n]);
    if(frutas[n] === 'Pera'){
        break;
    }
}

//coloque a última fruta da array acima em uma variável
//sem remover a mesma do array

var ultimaFruta = frutas[4];
console.log(ultimaFruta);