/* Laços de Repetição
 FOR --- Para
 for(let i = 0; i <= 5; i++) {
     console.log(i);
 }

 SEI QUANTAS VEZES QUERO EXECUTAR?
 SIM - UTILIZAR FOR
 NÃO - UTILIZAR WHILE

 WHILE --- Enquanto
 let i = 10;
 while(i < 5) {
     console.log(i);
     i++;
 }
 console.log('Fim do While');
 DO WHILE -- Faça enquanto
let i = 10;
do {
    console.log(i);
    i++;
} while(i < 5);
console.log('Fim do While');

//SOLICITE 3 NÚMEROS PARA O USUÁRIO E INFORME SE O NÚMERO SOLICITADO É PAR OU ÍMPAR
const readline = require('readline-sync');

let soma = 0;
*/
while(soma < 100) {
    let numero = readline.questionInt("Informe um numero para adicionar a soma: ");
    soma = soma + numero;
    console.log("soma: ", som)
}
console.log("soma: ",soma);
