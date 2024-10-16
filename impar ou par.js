// SOLICITE 3 NÚMEROS PARA O USUÁRIO E INFORME SE O NÚMERO SOLICITADO É PAR OU ÍMPAR

const readline = require("readline-sync");


for(numero = 1; numero <=3; numero++) {
    const numero = readline.questionFloat('Qual o Numero que Voce Deseja saber sobre? ')
}
const par = numero/2

if (numero = par) {

    console.log('Esse Numero',{numero},' e par')
    
    
    }else{

        console.log('Esse Numero', {numero},' E Impar')
    }

