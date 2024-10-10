/** oieee :3 */
const readline = require("readline-sync");

const sexo = readline.question(" qual o seu sexo? M - Masculino ou F - Feminino   R) ");
// sexo.toUpperCase() - Para letras maiúsculas 
if (sexo.toUpperCase() == "m") {
    console.log("Pode entra no banheiro masculino");  
} else {
    console.log("Não pode entra no banheiro masculino");
}