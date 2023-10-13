const abrirModal = document.querySelector("#abrir-modal");
const fecharModal = document.querySelector("#fechar-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");
const eventos = [abrirModal, fade, fecharModal];
var godOfWar = document.getElementById("gow");
var residentEvil = document.getElementById("rev");
var stardew = document.getElementById("sv");
var assassins = document.getElementById("acv");
var halo = document.getElementById("hi");
var minecraft = document.getElementById("mine");
var forza = document.getElementById("fh");
var sea = document.getElementById("st");
var animal = document.getElementById("ac");
var Pizza = document.getElementById("smo");
var marioKart = document.getElementById("mk");
var zelda = document.getElementById("tloz");
var add = document.getElementById("add");
var carrinho = document.getElementById("pedidos");
var limpar = document.getElementById("btn-limpar");
var valorTotal = document.getElementById("valor-total");
var soma = 0;
const toggleModal = () => {
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");
};
eventos.map(el => {
  el.addEventListener("click", () => toggleModal());
});
limpar.addEventListener("click", () => {
  carrinho.innerHTML = "";
  valorTotal.innerHTML = "<p>Valor Total :</p>";
  soma = 0;
});
var cardapio = [
  { nome: "Pizza-Mussarela", valor: 49.9 },
  { nome: "Pizza-Calabresa", valor: 159.9 },
  { nome: "Pizza-Frango", valor: 59.9 },
  { nome: "Pizza-Moda da Casa", valor: 79.9 },
  { nome: "Pizza-Portuguêsa", valor: 109.9 },
  { nome: "Pizza-Dorflexo", valor: 99.9 },
  { nome: "Pizza-Dois Queijos", valor: 154.9 },
  { nome: "Pizza-Chocolate", valor: 119.9 },
  { nome: "Pizza-Ninho", valor: 129.9 },
  { nome: "Pizza-Joaão e Maria", valor: 199.9 }
];
godOfWar.addEventListener("click", () => {
  soma += cardapio[0].valor;
  carrinho.innerHTML += `<p>${cardapio[0].nome} - R$ ${cardapio[0].valor.toFixed(
    2
  )}</p>`;
  valorTotal.innerHTML = `<p>Valor Total : ${soma.toFixed(2)}</p>`;
});
residentEvil.addEventListener("click", () => {
  soma += cardapio[1].valor;
  carrinho.innerHTML += `<p>${cardapio[1].nome} - R$ ${cardapio[1].valor.toFixed(
    2
  )}</p>`;
  valorTotal.innerHTML = `<p>Valor Total : ${soma.toFixed(2)}</p>`;
});
stardew.addEventListener("click", () => {
  soma += cardapio[2].valor;
  carrinho.innerHTML += `<p>${cardapio[2].nome} - R$ ${cardapio[2].valor.toFixed(
    2
  )}</p>`;
  valorTotal.innerHTML = `<p>Valor Total : ${soma.toFixed(2)}</p>`;
});
assassins.addEventListener("click", () => {
  soma += cardapio[3].valor;
  carrinho.innerHTML += `<p>${cardapio[3].nome} - R$ ${cardapio[3].valor.toFixed(
    2
  )}</p>`;
  valorTotal.innerHTML = `<p>Valor Total : ${soma.toFixed(2)}</p>`;
});
halo.addEventListener("click", () => {
  soma += cardapio[4].valor;
  carrinho.innerHTML += `<p>${cardapio[4].nome} - R$ ${cardapio[4].valor.toFixed(
    2
  )}</p>`;
  valorTotal.innerHTML = `<p>Valor Total : ${soma.toFixed(2)}</p>`;
});
minecraft.addEventListener("click", () => {
  soma += cardapio[5].valor;
  carrinho.innerHTML += `<p>${cardapio[5].nome} - R$ ${cardapio[5].valor.toFixed(
    2
  )}</p>`;
  valorTotal.innerHTML = `<p>Valor Total : ${soma.toFixed(2)}</p>`;
});
forza.addEventListener("click", () => {
  soma += cardapio[6].valor;
  carrinho.innerHTML += `<p>${cardapio[6].nome} - R$ ${cardapio[6].valor.toFixed(
    2
  )}</p>`;
  valorTotal.innerHTML = `<p>Valor Total : ${soma.toFixed(2)}</p>`;
});
sea.addEventListener("click", () => {
  soma += cardapio[7].valor;
  carrinho.innerHTML += `<p>${cardapio[7].nome} - R$ ${cardapio[7].valor.toFixed(
    2
  )}</p>`;
  valorTotal.innerHTML = `<p>Valor Total : ${soma.toFixed(2)}</p>`;
});

animal.addEventListener("click", () => {
  soma += cardapio[8].valor;
  carrinho.innerHTML += `<p>${cardapio[8].nome} - R$ ${cardapio[8].valor.toFixed(
    2
  )}</p>`;
  valorTotal.innerHTML = `<p>Valor Total : ${soma.toFixed(2)}</p>`;
});
 Chocolate.addEventListener("click", () => {
  soma += cardapio[9].valor;
  carrinho.innerHTML += `<p>${cardapio[9].nome} - R$ ${cardapio[9].valor.toFixed(
    2
  )}</p>`;
  valorTotal.innerHTML = `<p>Valor Total : ${soma.toFixed(2)}</p>`;
});
marioKart.addEventListener("click", () => {
  soma += cardapio[10].valor;
  carrinho.innerHTML += `<p>${cardapio[10].nome} - R$ ${cardapio[10].valor.toFixed(
    2
  )}</p>`;
  valorTotal.innerHTML = `<p>Valor Total : ${soma.toFixed(2)}</p>`;
});
zelda.addEventListener("click", () => {
  soma += cardapio[11].valor;
  carrinho.innerHTML += `<p>${cardapio[11].nome} - R$ ${cardapio[11].valor.toFixed(
    2
  )}</p>`;
  valorTotal.innerHTML = `<p>Valor Total : ${soma.toFixed(2)}</p>`;
});