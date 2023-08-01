// Adicione a classe ativo a todos os itens do menu
const itensDoMenu = document.querySelectorAll('.menu li a');

itensDoMenu.forEach(item => {
  item.classList.add('ativo');
});

console.log(itensDoMenu);

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itensDoMenu.forEach(item => {
  item.classList.remove('ativo');
});
console.log(itensDoMenu);
itensDoMenu[0].classList.add('ativo');
console.log(itensDoMenu);


// Verifique se as imagens possuem o atributo alt
const imagens = document.querySelectorAll('img');

imagens.forEach(img => {
  if (img.hasAttribute('alt')) {
    console.log('A imagem possui o atributo alt:', img.getAttribute('alt'));
  } else {
    console.log('A imagem não possui o atributo alt.');
  }
});


// Modifique o href do link externo no menu
const altHref = document.querySelector('a[href^="http"]');
console.log(altHref.href);
altHref.setAttribute('href', 'https://www.leagueoflegends.com/pt-br/');
console.log(altHref.href);