//Linguagem Iinterpretad
//Node.js
//Tipagem fraca

//Condicionais (if, else, operadore logicos)
/*
const idade = 15;

if(idade >= 18){
    console.log("Voce e maior de idade");
} else{
    console.log("voce e menor de idade")
}
*/
//const idade = Number(prompt("Digite sua idade:"));

//if(idade >=18) {
//console.log("Voce pode tirar carteira de motorista");
//} else{
//    console.log("Voce ainda nao pode dirigir")
//}

//const idade = 20;
//const temDocumento = true;
//const estaLista = true;

//if(idade >=18 && temDocumento && estaLista) {
//    console.log("Pode entrar!!")
//} else {
//    console.log("Acesso negado!!")
//}

/*
const temDinheiro = false;
const temCartao = true;
const temPix = false;

if (temDinheiro || temCartao || temPix) {

} else {

}
*/
/*
const usuario = "admin";
const senha = 1234;

const senhaCorreta = (senha === "1234");
const ehAdmin = (usuario === "admin");
const ehGerente = (usuario ==="gerente");

if((ehAdmin && senhaCorreta) || (ehGerente && senhaCorreta)) {
    console.log("Acesso liberado!");
} else {
    console.log("Acesso negado")
}

if((ehAdmin || ehGerente) && senhaCorreta) {

} else {

}
*/
/*
const usuario = prompt("Usuario:");
const senha = prompt("Senha:");

const acessoAdmin = (usuario === "admin" && senha === "1234");
const acessoUser = (usuario === "user" && senha === "senha1234");

if (acessoAdmin || acessoUser){
    console.log("Acesso liberado!")
} else {
    console.log("Aceso negado!")
}
*/
/*
const nota = 75;

if(nota >= 80) {
    console.log("Aprovado")
} else if(nota >= 60){
    console.log("Recupercao!")
} else {
    console.log("Reprovado!")
}
*/
/*
Exercício — Classificação da Temperatura

Crie um programa em JavaScript que solicite ao usuário uma temperatura em graus Celsius (°C) e classifique a temperatura de acordo com as faixas abaixo:

Temperatura	Classificação
Abaixo de 0°C	🥶 Muito frio
De 0°C a 15°C	❄️ Frio
De 16°C a 25°C	😊 Agradável
De 26°C a 35°C	🌡️ Quente
Acima de 35°C	🔥 Muito quente
*/
const temp = Number(prompt("temperatura"));

if(Number.isNaN(temp)) {
    console.log("temperatura invalida")
} else if (temp < 0){
    console.log("muito frio")
} else if(temp >= 0 && temp <= 15){
    console.log("Frio")
} else if(temp >= 16 && temp <= 25){
    console.log("Agradavel")
} else if(temp >= 26 && temp <=35){
    console.log("Quente")
} else{
    console.log("Muito quente")
}