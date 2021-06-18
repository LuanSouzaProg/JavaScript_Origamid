//Funções

//01

function areaQuadrado(lado){
    return lado * lado;
}
console.log(areaQuadrado(10));

//02
function pi(){
    return 3.14;
}

var total = 5 * pi();
console.log(total);

//03
function imc(peso, altura){
    var imc = peso / (altura * altura);
    return imc;
}

console.log(imc(80, 1.8));

//04
function corFavorita(cor){
    if(cor === 'azul'){
        return 'Eu gosto do céu';
    }else if(cor === 'verde'){
        return 'Eu gosto de mato';
    }else{
        return 'Eu não gosto de cores';
    }
}

//05
addEventListener('click', function(){
    console.log('Oi');
})

//06
function mostraConsole(){
    console.log('Bem Vindo!');
}

addEventListener('click', mostraConsole)

//07
function imc2(peso2, altura2){
    const imc = peso2 / (altura2 * altura2);
    console.log(imc);
}

imc2(80, 1.80); //retorna o imc
console.log(imc2(80, 1.80)); //retorna o imc e undefined

//08
function terceiraIdade(idade){
    if(typeof idade !== 'number'){
        return 'Digite sua idade';
    }else if(idade >= 60){
        return true;
    }else{
        return false;
    }
}

console.log(terceiraIdade(60));

//09
function faltaVisitar(paisesVisitados){
    var totalPaises = 193;
        return `falta visita ${totalPaises - paisesVisitados} países`;
}

console.log(totalPaises); // erro, totalPaises não definido, por causa de estar dentro do escopo

//10
var profissao = 'Desenvolvedor';

function dados(){
    var nome = 'Luan';
    var idade = 20;

    function outrosDados(){
        var endereco = 'Passo de Torres - RS';
        var idade = 29
        return `${nome}, ${idade}, ${endereco}, ${profissao}`;
    }
    return outrosDados();
}

console.log(dados()); // retorna 'Luan, 29, Passo de Torres - RS, Desenvolvedor'

//outrosDados(); // retorna um erro

