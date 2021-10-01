const promesa = new Promise ((resolve, reject)=>{
    let condicao = true;

    if(condicao){
        setTimeout(()=>{
            resolve({nome : "Luan", idade : 20});
        }, 1000)
    }else{
        reject("Um erro ocorreu na promise");
    };
});


//exemplo 1
promesa.then((resolucao)=>{
    console.log(resolucao);
});

//exemplo2
promesa.then((resolucao)=>{
        return "teste";
    }).then((resolucao)=>{
            console.log(resolucao);
});

//método para organizar, exemplo3
promesa.then((resolucao)=>{  //O .then retorna o resolve da Promise
    resolucao.profissao = "designer";
    return resolucao;
})
.then((resolucao)=>{
        console.log(resolucao);
})
.catch((rejeitada)=>{  //O .catch retorna o reject da Promise
    console.log(rejeitada);
})
.finally(()=>{  //O .finally recebe os dois argumentos "resolve e reject", e retorna o que estiver certo. O .finally não pode passar argumento pois vai retornar undefined
    console.log("Acabou");
})

const login = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("Usuário logado");
    }, 1000);
});

const dados = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("Dados carregados");
    }, 1500);
});

const carregouTudo = Promise.all([login, dados]); // O .all retorna todas a Promise quando forem resolvidas
//const carregouTudo = Promise.race([login, dados]); // O .race retorna a primeira Promise resolvida

carregouTudo.then((resolucao)=>{
    console.log(resolucao);
});