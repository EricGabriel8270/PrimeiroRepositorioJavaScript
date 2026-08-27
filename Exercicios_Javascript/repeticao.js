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
