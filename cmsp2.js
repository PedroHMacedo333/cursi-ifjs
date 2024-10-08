/**
 * SOLICITE O NOME DO ALUNO(A) E SUAS 4 NOTAS BIMESTRAIS E CALCULE A MÉDIA FINAL
 */

const readline = require("readline-sync");

// 1 pegar o nome do aluno 
const nome = readline.question("Qual o nome do aluno ");
//2 notas do bimestre
const nota_do_1B = readline.questionFloat("Qual a sua nota no 1 Bimestre? ");
const nota_do_2B = readline.questionFloat("Qual a sua nota no 2 Bimestre? ");
const nota_do_3B = readline.questionFloat("Qual a sua nota no 3 Bimestre? ");
const nota_do_4B = readline.questionFloat("Qual a sua nota no 4 Bimestre? ");

readline.que

console.log(`O nome  do aluno informado foi: ${nome}`);
console.log(`a nota do 1 Bimestre informada foi de ${nota_do_1B}`)
console.log(`a nota do 2 Bimestre informada foi de ${nota_do_2B}`)
console.log(`a nota do 3 Bimestre informada foi de ${nota_do_3B}`)
console.log(`a nota do 4 Bimestre informada foi de ${nota_do_4B}`)
//eu criei varaveis para ficar mais faceis
const Nota1B = nota_do_1B
const Nota2B = nota_do_2B
const Nota3B = nota_do_3B
const Nota4B = nota_do_4B
// fazer as contas
const resultado1T = Nota1B + Nota2B
const resultado2T = Nota3B + Nota4B
const NotaFinal = resultado1T + resultado2T

// e o resultado 
console.log('Sua nota Escolar esse Ano foi de', NotaFinal / 4)
