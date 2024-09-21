import renderCardsTitulo from "../../functions/renderCardsTitulo/renderCardsTitulo.js";

import ListaFavoritos from "../../functions/listaFavoritos/ListaFavoritos.js";

const $containeFavoritos = document.querySelector("#containeFavoritos");
const $divModalFavorites = document.querySelector("#divModalFavorites");

const minhaLista = new ListaFavoritos();

window.addEventListener("DOMContentLoaded", () => {
  renderCardsTitulo(
    $containeFavoritos,
    minhaLista.pegarTitulos(),
    $divModalFavorites,
    true
  );
});
