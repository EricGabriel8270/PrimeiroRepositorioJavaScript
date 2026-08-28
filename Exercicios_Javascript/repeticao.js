//WHILE (enquanto)
//Permite criar loops que sao executados zero ou mais vezes.


/*
while(true){
    console.log("Ao infinito e alem ")
}
*/

//Contador que exibir na tela de 1 a 5

//contador inicia com o numero 1 
//let contador = 1

//Enquanto o meu contador por menor ou igual a 5,continue
/*
while (contador <=5 ){

    console.log("Contagm"  + contador)

    //console = (contador + 1)

    contador++

    //contador = 2

}

let tempo = 10 

while(tempo > 0){
    console.log(tempo)

    //tempo = tempo - 1 retira do tempo 

    tempo--//retira 1 do tempo 
}
console.log("Codigo acabou.")

*/
//validacao senha
/*
const senhaCorreta ="148supersenha"
let tentativa =""

while(tentativa !=senhaCorreta){

    tentativa = prompt("Digite a senha:")

    if(tentativa == senhaCorreta){
        console.log("Senha correta! Acesso liberado")
    }
    else{
        console.log("Senha incorreta. tente novamente")
    }
}
*/
//Criar um codigo com while  que some numeros ate
//passar de 100
/*
let soma = 0;
let numero = 0;

while(soma <= 100){

    numero = Number(prompt("Informe um numero"))

    soma = soma + numero

}

console.log("A soma dos numeros chegou em:" + soma)

//DO - WHILE PERMITE CRIAR LOOP QUE SAO EXECUTAFOS UMA OU MAIS VEZES.

let repetir = false

do{
    console.log("so uma vez")

}
while(repetir) //Enquanto a condicao for TRUE.
*/
//WHILE vs Do..While 
/*
let num = 10;

while(num){
    console.log("isso NAO vai aparecer.")
}

do {
    console.log("isso VAI aparece pelo menos 1x")
}while(num > 5 )   
*/
//ADIVINHE O NUMERO
/*
//1 a 100.
const numeroSecreto = Math.floor(Math.random()* 10) + 1;

let palpite;
let tentativas = 0;

console.log("Adivinhe o numero etre 1 e 10.")

do{
    //alert( Math.floor(Math.random()* 10) + 1)

    palpite = Number(prompt("Seu palpite"))
    tentativas++

    if(Number.isNaN(palpite)){
        console.log("Digite um numero valido")
    }

    else if (palpite == numeroSecreto){
        console.log("Acertou" + "Em" + tentativas + "tentativas.")
    }
    else if (palpite < numeroSecreto){
        console.log("Muito baixo tente um numero menor")
    }
    else if (palpite > numeroSecreto){
        console.log("Muito alto tente um numero maior")
    }
}while(palpite != numeroSecreto)
*/

//FOR - LOOP

//let conta = 0;Variavel de controle.
//conta < 10 - analise de condicao
//conta++ - o que acontece com a variavel de controle.

for( let conta = 0;conta < 10; conta++){
    console.log(conta)
}

console.log("O loop terminou.")

//tabuada 
/*
const numero = Number(prompt("Tabuada de qual numero"))

if(Number.isNaN(numero)){
    console.log("❌numero invalido")
}
else{
    //console.log("TABUADA DO" + numero)
    console.log(`\n TABUADA DO ${numero}  \n`)

    for(let i =1;i <=10; i++ ){
        const resultado = numero * i
        //console.log(numero + "X" + i + "=" + resultado)
        console.log(`${numero} x ${i} = ${resultado}`)
    }

}
*/
//Exiba numero pares de 0 a 20

console.log("Numero pares de 0 a 20: \n")

for(let pares= 0; pares <=20; pares+=2){
    console.log(pares)

}

//Contagem regressiva com for

console.log("Lancamento em : \n")

for(let conta = 10; conta >= 1; conta-- ){
    console.log(conta + "....")
}

console.log("Decolar!")

//DESAFIO
/*
Crie um programa que mostre os numeros de 1 a 3.
cada numero deve aparecer 3 vezes na mesma linha.

saida esperada:
111
222
333

DICA:
use um for para controlar os numeros
e o outro for dentro para repetir cada numero.
*/
/*
for(let cont = 1; cont <=3;cont ++){
    let resultado =""
    for(let numero = 1; numero <=3; numero ++) {
        resultado += cont + ""
    }  
    console.log(resultado)
}
*/
//linha de piramide de asteriscos
/*
for(let cont = 1; cont <=10;cont ++){
    let resultado ="";

    for (let espaco = 10; espaco > cont; espaco--) {
        resultado += "";
    }
    for (let numero = 1; numero <= (2 * cont - 1); numero++) {
        resultado += "*";
    }
    console.log(resultado)
}
*/
//Exercicio 1
/*
for( let conta = 0;conta < 11; conta++){
    console.log(conta)
}
*/
//Exercicio 2
/*
const numero = Number(prompt("Tabuada de qual numero"))

if(Number.isNaN(numero)){
    console.log("❌numero invalido")
}
else{
    //console.log("TABUADA DO" + numero)
    console.log(`\n TABUADA DO ${numero}  \n`)

    for(let i =1;i <=10; i++ ){
        const resultado = numero * i
        //console.log(numero + "X" + i + "=" + resultado)
        console.log(`${numero} x ${i} = ${resultado}`)
    }

}
*/
//Exercicio 3
/*
const numero = Number(prompt("Qual e o valor?"))
let resultado = 0
let expressao = ""
for(let i = 1; i<= numero; i++){
    resultado=resultado + i 
    expressao+=i

    if (i< numero){
        expressao += "+ "
    }
}
console.log(`${expressao} = ${resultado}`)
*/
//Exercicio 4
/*
console.log("Numero pares de 0 a 20: \n")

for(let pares= 0; pares <=50; pares+=2){
    console.log(pares)

}
*/
//Exercicio 5
/*
const numeroSecreto = Math.floor(Math.random()* 100) + 1;

let palpite;
let tentativas = 0;

console.log("Adivinhe o numero etre 1 e 100.")
console.log(numeroSecreto)

do{
    //alert( Math.floor(Math.random()* 10) + 1)

    palpite = Number(prompt("Seu palpite"))
    tentativas++

    if(Number.isNaN(palpite)){
        console.log("Digite um numero valido")
    }

    else if (palpite == numeroSecreto){
        console.log("Acertou" + "Em" + tentativas + "tentativas.")
    }
    else if (palpite < numeroSecreto){
        console.log("Muito baixo tente um numero menor")
    }
    else if (palpite > numeroSecreto){
        console.log("Muito alto tente um numero maior")
    }
}while(palpite != numeroSecreto)
*/
//Exercicio 6
/*
console.log("Lancamento em : \n")

for(let conta = 5; conta >= 1; conta-- ){
    console.log(conta + "....")
}

console.log("Decolar!")
*/
//Exercicio 7
const numero = Number(prompt("Qual e o valor?"))
let resultado = 0
let expressao = ""
    for(let i = 1; i<= numero; i++){
        resultado=resultado + i 
        expressao+=i

        if (i< numero){
            expressao += "+ "
        }
    }

console.log(`${expressao} = ${resultado}`)




