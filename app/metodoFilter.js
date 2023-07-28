const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click', FiltrarLivros))


function FiltrarLivros(){
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    const livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibildade() : extrairPorCategoria(categoria)
    exibirOsLivrosNaTela(livrosFiltrados)
    if(categoria == 'disponivel'){
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados)
        
        exibirValorTotalDosLivrosDisponivelNaTela(valorTotal)
    }
}  

function extrairPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtrarPorDisponibildade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirValorTotalDosLivrosDisponivelNaTela(valorTotal){
   elementoComValorTotaDeLivrosDisponiveis.innerHTML = `<div class="livros__disponiveis">
   <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
 </div>`    
}



