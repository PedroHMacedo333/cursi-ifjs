/** 
 * Solicitar a idade e o sexo da pessoa.
 * Se for maior ou igual a 18 anos, verificar se é do sexo masculino.
 * Se for do sexo masculino, informar "Bem-vindo ao exército brasileiro";
 * Se for do sexo feminino, perguntar "Desejar se alistar ao exército? ".
 * Se sim, informar "Bem-vindo ao exército brasileiro".
 * Se não, informar "Obrigado."
*/

const readline = require("readline-sync");

const idade = readline.question("Qual A Sua Idade?\n")
const sexo = readline.question("Qual O Seu Sexo? M = Masculino F = Feminino?\n")

if (sexo = "M") {

    if (idade >= 18) console.log("Bem vindo ao exército Brasileiro") 

}
 else if (sexo = "F") {

    if (idade >= 18 ) readline.question("Você quer servir ao exército Brasileiro S = SIM N = NÃO")

    else if (pergunta = "S") console.log('Bem vinda qao exército Brasileiro')

    else if (pergunta = "N") console.log ('OBRIGADO')
}
