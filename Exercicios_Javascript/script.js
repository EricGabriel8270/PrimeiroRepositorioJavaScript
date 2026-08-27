
//exercicio1
/*
let idade = number(prompt("Digite sua idade"))
if (idade >=18){
    console.log("e maior de idade")
}else{
    console.log("nao e maior de idade")
}
*/
//exercicio 2
/*
let numero = Number(prompt("digite o numero"))
if(numero >0){
    console.log("numero positivo")
    alert("numero positivo")
}else{
    console.log("numero negativo")
    alert("numero negativo")
}
*/
//exercicio 3
/*
let nota = Number(prompt("Digite a sua nota"))
if( nota >= 60 ){
    alert("Aprovado")
}else{
    alert("Reprovado")
}
*/
//exercicio 4
/*
let numero = Number(prompt("Digite um numero"))
if(numero >0){
    alert("Numero positivo")
}else if(numero < 0){
    alert("Numero negativo")
}else{
    alert("zero")
}
 */
//exercicio 5
/*
let idade = Number(prompt("Digite a sua idade"))
if(idade >=0 && idade <=12){
    alert("Crianca")
}else if(idade >=13 && idade <=17 ){
    alert("Adolecente")
}else if (idade <0){
    alert("Idade invalida")
}else{
    alert("Adulto")
}
*/
//exercicio 6
/*
let numero = Number(prompt("Digite um numero"))
if(numero % 2 === 0){
    alert("par")
}else{
    alert("impar")
}
*/
//execrcio 7
/*
let numero = Number(prompt("Digite o primeiro numero"))
let operacao = prompt("Selecione a opercao desejada + - / *")
let numero2 = Number(prompt("Digite o segundo numero"))

if(operacao =="+"){
    resultado = numero+numero2
}else if(operacao =="-"){
    resultado = numero-numero2
}else if(operacao =="*"){
    resultado = numero*numero2
}else{
    resultado = numero/numero2
}

alert(resultado)
*/
//Exercicio 8 
/*
const numero = Number(prompt("Digite o primeiro numero"))
const numero2 = Number(prompt("Digite o segundo numero"))
const numero3 = Number(prompt("Digite o terceiro numero"))

if(numero > numero2 && numero > numero3){
    alert("primeiro numero e maior")
}else if(numero2 > numero && numero2 > numero3){
    alert("segundo numero e maior")
}else{
    alert("terceiro numero e maior")
}
*/
//Exercicio 9
/*
let valor = Number(prompt("Digite o valor da compra"))

if(valor >= 100){
    valorfinal = valor*1.10
    alert(valorfinal)
}else{
    alert(valor)
}
*/
//Exercicio 10
/*
const usuario = prompt("Digite o usuario")
const senha = Number(prompt("Digite a senha"))

if(usuario=="admin" && senha==1234){
    alert("Acesso concedido")
}else{
    alert("restrito")
}
*/
//Exercicio 11
/*
const lado1 = Number(prompt("Digite o primeiro lado"))
const lado2 = Number(prompt("Digite o segundo lado"))
const lado3 = Number(prompt("Digite o terceiro lado"))

if(Number.isNaN(lado1,lado2,lado3)){
    alert("valor invalido,informe somente numeros")
}else if ((lado1+lado2) < lado3 ){
    alert("nao e um triangulo")
}else if(lado1==lado2 && lado2==lado3 && lado1==lado3){
    alert("triangulo equilatero")
}else if(lado1==lado2 || lado2==lado3 || lado1==lado3){
    alert("triangulo isosceles")
}else{
    alert("traingulo escaleno")
}
*/
//Exercicio 12
/*
const nota = Number(prompt("Digite a nota"))

if(nota>100 || nota<0){
    alert("Numero invalido")
}else if(nota>=90 && nota<=100){
    alert("A")
}else if(nota>=80 && nota<=89){
    alert("B")
}else if (nota>=70 && nota <=79){
    alert("C")
}else if (nota>=60 && nota <=69){
    alert("D")
}else{
    alert("F")
}
/*
//Exercicio 13
/*
let peso = Number(prompt("peso"))
let altura = Number(prompt("altura"))

let imc = peso / (altura ** 2)

console.log(imc.toFixed(2))
alert(imc.toFixed(2))

if(imc <=18){
    console.log("Abaixo do peso")
}else if(imc > 18 && imc <= 24){
    console.log("peso normal")
}else if(imc >25 && imc <=30) {
    console.log("Sobrepeso")
}else{
    console.log("Acima do peso")
}
*/
//Exercicio 14
/*
let ano = Number(prompt("Me diga uma data: (Atividade 15)"));
let bissexto = (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0;

if (bissexto) {
  alert("É bissexto");
} else {
  alert("Não é bissexto");
}
*/