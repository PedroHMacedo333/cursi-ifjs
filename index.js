const readline = require('readline-sync')

const nome = readline.question('Qual o seu Nome ? ')
const idade = readline.questionInt('Qual a sua idade ? ')

if (idade >= 18) {
    console.log(`Parabens ${nome}Você maior de idade`)
}else {
    console.log(`Sinto muito mais Você ${nome}e menor de idade`)
}
