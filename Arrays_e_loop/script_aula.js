// arrays e loops

var videoGames = ['Switch', 'PS4', 'XBOX'];

videoGames[2]; // 'XBOX'

var ultimoItem = videoGames.pop(); // retorna o ultimo item e remove ele

videoGames.push('3DS'); // adiciona oque estiver escrito no final da array

//loops

for(var numero = 1; numero <= 10; numero++){
    console.log(numero);
}

//while loop

var i = 0;
while (i < 10){
    console.log(i);
    i++;
}


var videoGames2 = ['Switch', 'PS4', 'XBOX', '3DS'];

for(var item = 0; item < videoGames2.length; item++){
    console.log(videoGames2[item]);
    if(videoGames2[item] === 'PS4'){
        break
    }
}

// forEach

var frutas = ['Banana', 'Maça', 'Morango', 'Manga'];

frutas.forEach(function(fruta, index){
    console.log(fruta, index);
})