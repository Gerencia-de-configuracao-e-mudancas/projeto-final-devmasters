import renderCardsTitulo from "../../functions/renderCardsTitulo/renderCardsTitulo.js"

import ListaFavoritos from "../../functions/listaFavoritos/ListaFavoritos.js";

const $containeFavoritos = document.querySelector("#containeFavoritos");
const $divModalFavorites = document.querySelector("#divModalFavorites");

let listaLocalStorege = localStorage.getItem("listaFavoritos") !== null ? JSON.parse(localStorage.getItem("listaFavoritos")):[];
const minhaLista = new ListaFavoritos(listaLocalStorege);

window.addEventListener("DOMContentLoaded", ()=>{
    renderCardsTitulo($containeFavoritos, minhaLista.pegarTitulos(), $divModalFavorites, true)
})