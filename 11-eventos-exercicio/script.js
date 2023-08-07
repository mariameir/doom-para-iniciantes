// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna

// Seleciona todos os links internos do documento cujo atributo href começa com "#"
const linksInternos = document.querySelectorAll('a[href^="#"]');

// Função que será executada quando ocorrer um clique em um dos links internos
function handleLink(event) {
  event.preventDefault(); // Previne o comportamento padrão do link (navegação)

  // Percorre todos os links internos e remove a classe "ativo" deles
  linksInternos.forEach((link) => {
    link.classList.remove("ativo");
  });

  this.classList.add("ativo"); // Adiciona a classe "ativo" ao link que foi clicado
}

// Adiciona um evento de clique a cada link interno, chamando a função handleLink quando ocorrer o clique
linksInternos.forEach((link) => {
  link.addEventListener('click', handleLink);
});




// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

// Se o usuário clicar na tecla (t), aumente todo o texto do site.
