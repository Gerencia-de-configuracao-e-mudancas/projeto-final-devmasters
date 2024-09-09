import RequestsAPI from "../../functions/requestAPI/requestAPI.js";
import renderCardsTitulo from "../../functions/renderCardsTitulo/renderCardsTitulo.js";

const $botao = document.querySelector("#btnGerarFilme");
const $containerRenderTituloAleatorio = document.querySelector(
  "#containerRenderTituloAleatorio"
);
const $modalInfoTitulo = document.querySelector("#divModalRandomTitulo");
const arrayEscolhaFilmeSerie = ["movie", "tv"];

const resquestsAPI = new RequestsAPI();

async function gerarFilmeAleatorio() {
  let numeroAleatorio = Math.floor(Math.random() * 100 + 1);
  let escolhaAleatoria = Math.floor(Math.random() * 2);
  let dados = await resquestsAPI.requestRandomTitulo(
    arrayEscolhaFilmeSerie[escolhaAleatoria],
    numeroAleatorio,
    $containerRenderTituloAleatorio
  );
  while (!dados.poster_path) {
    dados = await resquestsAPI.requestRandomTitulo(
      arrayEscolhaFilmeSerie[escolhaAleatoria],
      numeroAleatorio,
      $containerRenderTituloAleatorio
    );
  }
  let arrayDados = [dados];

  renderCardsTitulo(
    $containerRenderTituloAleatorio,
    arrayDados,
    $modalInfoTitulo,
    false
  );
}

window.addEventListener("DOMContentLoaded", gerarFilmeAleatorio);

$botao.addEventListener("click", gerarFilmeAleatorio);
