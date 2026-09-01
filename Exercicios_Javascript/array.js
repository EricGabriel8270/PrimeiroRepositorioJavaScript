//ARRAY
//Um ARRAY e um tipo de dados que serve para armazenar VALOR 
//Sequencialmento em forma de lista

const numeros= [ 1,2,3,4,5]
const nomes = ["Ana", "Caio","Lucas","jacinto"]

//na minha lista de numeros
//eu quero a posicao 0
console.log(numeros[0])

console.log(nomes[0])

//LEGTH
//E uma prioridade para obter o comprimero de uma array.

console.log(nomes.length) 
//vamos percorrer toda a lista 
//e colocar no console cada item.

for( let i =0;i < nomes.length; i++){

    console.log(nomes[i])

}
//for of
const frutas = ["Maca", "Laranja","Uva","Morango"]

for(const fruta of frutas ){
    console.log(fruta)
}

//Faca a soma de todos os numeros de um array 

const listanumeros = [10,25,8,42,15,7]

let soma =0;

for (const numero of listanumeros){
    soma += numero
    //mesmo que soma = soma + numero
}

console.log("Numero", listanumeros)
console.log("Soma", soma)


const notas = [7.5, 9.0, 6.5,8.8, 10.0, 5.5];
//Utilizando o for of e retorne a maior nota.

let maiornota = listanota[0]

for (const nota of listanota){

    if(nota > maiornota)
        maiornota = nota
}

console.log("Maior nota: " + maiornota)
