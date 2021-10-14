    //Forma mais atualizada
fetch('./dados.json')
    .then(r => r.json())
    .then(json =>{
        json.forEach(materia => {
            console.log(materia);
        });
    });

    //Parse, não vamos utilizar desta forma. O parse serve para transformar um texto JSON em um object JavaScript.
fetch('./dados.json')
    .then(r => r.text())
    .then(jsonText =>{
        const jsonFinal = JSON.parse(jsonText)
        console.log(jsonFinal);
    });

    //O stringify transforma um object JavaScript em uma string no formato JSON.
const configuracoes = {
    player: "Google",
    tempo: 25.5,
    aula: "2.1 JavaScript",
};

localStorage.config = JSON.stringify(configuracoes);

console.log(JSON.parse(localStorage.config));




