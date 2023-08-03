// Verifique a distância da primeira imagem
// em relação ao topo da página
const distanciaIMG = document.querySelector('img')
const distanciaTOP = distanciaIMG.offsetTop;
console.log(distanciaTOP);


// Retorne a soma da largura de todas as imagens
function soaImagens(){
  const imagens= document.querySelectorAll('img');
  let soma= 0;
  
  imagens.forEach((imagem)=>{
  soma+= imagem.offsetWidth;
  });
  console.log(soma)
}
window.onload = function(){
  soaImagens();
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a');

links.forEach((link) =>{
  const largura = links.offsetWidth;
  const altura = links.offsetHight;

  if(largura >= 48 && altura >= 48){
    console.log('Tamanho adequado')
  }else{
    console.log('Tamanho inadequado')
  }
})


 
// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
// Seleciona o elemento do menu pelo seu seletor CSS
const small = window.matchMedia('(max-width:720px)').matches;

if (small){
  const menu = document.querySelector('.menu')
  menu.classList.add('menu-mobile');
}