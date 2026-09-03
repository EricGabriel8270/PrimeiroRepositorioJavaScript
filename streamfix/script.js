//Document ---> pagina inteira do meu html 

//getElementByID -> procura pelo atributo id=""

//filme principal - > ID que queremos.

const elemento = document.getElementById('filme-principal')

console.log(elemento)
console.log(elemento.tagName)

function selecionarPorId(){

    const titulofilme = document.getElementById('titulo-filme')

    console.log(titulofilme)
    console.log(titulofilme.tagName) //H3
    console.log(titulofilme.textContent)//o conteudo do H3
    console.log(titulofilme.id)//titulo filme

    titulofilme.classList.add('elemento-selecionado')


}