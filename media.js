/** 
 * Solicitar o nome do aluno, as 4 notas dele no ano, calcular a média final. 
 * Se a média for maior ou igual 6, exibir "O aluno <nome> foi aprovado com a média <media>".
 * Senão, exibir "O aluno <nome> foi reprovado com a média <media>".
*/

const readline = require("readline-sync");

const nome = readline.question("Qual o nome do aluno? ");

const nota1 = readline.questionFloat("Qual a nota do 1 bimestre? ");
const nota2 = readline.questionFloat("Qual a nota do 2 bimestre? ");
const nota3 = readline.questionFloat("Qual a nota do 3 bimestre? ");
const nota4 = readline.questionFloat("Qual a nota do 4 bimestre? ");

const media = (nota1 + nota2 + nota3 + nota4) / 4;

if (media >= 6 ) { 
    console.log("a media do aluno", {nome},"foi aprovada com a media de", {media});
}
else if  ( media < 6 ) {
    console.log("a media do aluno", {nome},"foi reprovada com a media de", {media});
}
