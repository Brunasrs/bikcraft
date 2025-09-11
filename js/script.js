// Ativar links do Menu

const links = document.querySelectorAll(".header-menu a");

// console.log("javascript".includes("a"));

function ativarLink(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

// Ativar item do Orçamento

const paramentros = new URLSearchParams(location.search);

function ativarProduto(paramentro) {
  const elemento = document.getElementById(paramentro);
  if (elemento) {
    elemento.checked = true;
  }
  console.log(elemento);
}

paramentros.forEach(ativarProduto);
