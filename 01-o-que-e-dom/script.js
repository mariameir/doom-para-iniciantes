/*
DOCUMENT OBJECT MODEL (DOOM) 
É uma interface de documentos HTML e XML atraves de objetos. Com ela é possivel manipular  estrutura, estilo e conteúdo destes documentos.
*/
console.log(window);
// window é o objeto global do browser
// possui diferentes métodos e propriedades
window.innerHeight; //retorna a altura do browser

//Ao inspecionar elemento com o Chrome, você está vendo a representação oficial do DOM.



//NODE - Toda tag html é representada pelo objeto Element e por isso herda os seus métodos e propriedades. Element é um tipo de objeto Node.
const titulo = document.querySelector('h1');

titulo.innerText; // retorna o texto;
titulo.classList; // retorna as classes;
titulo.id; // retorna o id;
titulo.offsetHeight; // retorna a altura do elemento;

titulo.addEventListener('click', callback);
// ativa a função callback ao click no titulo



const href = window.location.href;

console.log(href);
if (href === 'sdasdadas'){
  console.log('é igual')
}

const h1Selecionado = document.querySelector('h1');
const h1classes = h1Selecionado.classList;

function teste(){
  console.log('Clicou em ', h1Selecionado.innerText);
}

h1Selecionado.addEventListener('click', teste)