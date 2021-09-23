export default function initFuncionamento(){

    const funcionamento = document.querySelector('[data-semana]');
    const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
    const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);
    
    const dataAtual = new Date();
    const diaAtual = dataAtual.getDay();
    const horarioAtual = dataAtual.getHours();
    
    const semanaAberto = diasSemana.indexOf(diaAtual) !== -1;
    
    const horarioAberto = (horarioAtual >= horarioSemana[0] && horarioAtual < horarioSemana[1]);
    
    if(semanaAberto && horarioAberto){
        funcionamento.classList.add('aberto');
    }

}


//Entendando o método Date();


/*const agora = new Date();
const futuro = new Date('Dec 24 2021 23:59');

console.log(agora.getMonth());

console.log(agora);
console.log(futuro);

function trasformarDias(tempo){
    return tempo / (24 * 60 * 60 * 1000);
};

const diasAgora = trasformarDias(agora.getTime());
const diasFuturo = trasformarDias(futuro.getTime());

console.log(diasFuturo - diasAgora);*/