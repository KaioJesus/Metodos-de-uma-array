let livros = [];
const endPointApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getBuscarLivrosDaAPI();

const elementoParaInserirLivros = document.getElementById('livros');

async function getBuscarLivrosDaAPI() {
    const res = await fetch(endPointApi);
    livros = await res.json();
    //await serve para esperar a promise (promessa), caso não tenha o programa não consegue imprimir o json que pedimos

    exibirLivroNaTelta(livros)
    console.table(livros);
}

function exibirLivroNaTelta(listaDeLivros) {
    listaDeLivros.forEach(livro => {
        elementoParaInserirLivros.innerHTML +=
            `
        <div class="livro">
        <img class="livro__imagens" src="${livro.imagem}" ${livro.alt}" />
        <h2 class="livro__titulo">
          ${livro.titulo}
        </h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">${livro.preco}</p>
        <div class="tags">
          <span class="tag">${livro.categoria}</span>
        </div>
      </div>
        `
    });
}