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

//getelementclassna,e -> retorna uma lista 
function selecionarPorClasse(){

    const elementos = document.getElementsByClassName(`genero-acao`)

    //elementos.legth quantidade de lementos encontrados
    console.log('quantidade:' + elementos.length )

    for(let i =0 ; i < elementos.length; i++){

        console.log(elementos[i].textContent.trim())
         elementos[i].classList.add('elemento-selecionado')
         
    }
}
//QuerySelector -> retorna o PRIMEIRO elemento.

function selecionarPorQuery() {

        const elemento = document.querySelector('.filme-mini')
        console.log(elemento)
        elemento.classList.add('elemento-selecionado')
}

//querySelectorALL -->

document.querySelectorAll

function selecionarTodos(){

    const elementos = document.querySelectorAll('.filme-mini')

    elementos.forEach((el, indice) => {
        console.log(indice,el.textContent.trim())
        el.classList.add('elemento-selecionado')

    }
)
}

function mudarTexto(){
    
    //selecionar o element oque queremos mudar
    const titulo = document.getElementById('titulo-destaque')

    titulo.textContent = document.getElementById('input-busca').value

    console.log('Novo Teste', titulo.textContent)
}

function adicionarBadge(){

    const badge = document.createElement('span')

    badge.className = 'badge'
    badge.textContent = '⭐ Em alta'

    const container = document.getElementById('badge-container')

    container.innerHTML = ''

    container.appendChild(badge)
}

function mudarPoster(){

const poster = document.getElementById('poster-destaque')
const titulo = document.getElementById('titulo-destaque')


const opcoes = [
        {
            url: 'https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg',
            nome: 'The Last of Us'
        },
        {
            url: 'https://image.tmdb.org/t/p/w500/qZtAf4Z1lazGQoYVXiHOrvLr5lI.jpg',
            nome: 'Wednesday'
        },
        {
            url: 'https://image.tmdb.org/t/p/w500/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg',
            nome: 'Breaking Bad'
        },
        {
            url: 'https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg',
            nome: 'Round 6'
        },
        {
            url: 'https://image.tmdb.org/t/p/w500/twfKp60THrcOIep9sjHODOOfO8d.jpg',
            nome: 'Stranger Things'
        }
    ];


    const sorteado = opcoes[Math.floor(Math.random() * opcoes.length)];

    poster.src = sorteado.url
    poster.alt = sorteado.nome
    titulo.textContent = sorteado.nome

    console.log("Poster trocado para:", sorteado.nome)

    poster.style.opacity ='0'
    poster.style.transition = 'opacity 0.3s';

    //
    setTimeout( () =>{

        //todo esse bloco de codigo sera executado apos 300ms
        poster.style.opacity = '1';
        poster.classList.add('poster-fate-in')


        //remover uma classe apos 600 ms
        setTimeout(() => poster.classList.remove('poster-fate-in'),600)


    },300 //300ms

    );

}

function lerInput(){

    const input = document.getElementById('input-busca').value.trim()

    if(input == ''){
        alert("⚠️ Digite algo no campo")
        return;// para o processo inteiro da funcao.
    }

    const titulo = document.getElementById('titulo-destaque')
    titulo.textContent = input

    titulo.classList.add('texto-animado')
}