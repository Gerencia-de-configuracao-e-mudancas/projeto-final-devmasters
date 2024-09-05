import RequestsAPI from "../../functions/requestAPI/requestAPI.js"
import renderCardsTitulo from "../../functions/renderCardsTitulo/renderCardsTitulo.js";

const $botao = document.querySelector("#btnGerarFilme");
const $containerRenderTituloAleatorio = document.querySelector("#containerRenderTituloAleatorio");
const arrayEscolhaFilmeSerie = ["movie", "tv"]

const resquestsAPI = new RequestsAPI()

async function gerarFilmeAleatorio() {
    let numeroAleatorio = Math.floor((Math.random() * 100) + 1);
    let escolhaAleatoria = Math.floor((Math.random() * 2));
    let dados = await resquestsAPI.requestRandomTitulo(arrayEscolhaFilmeSerie[escolhaAleatoria], numeroAleatorio);
    while (!dados.poster_path){
        dados = await resquestsAPI.requestRandomTitulo(arrayEscolhaFilmeSerie[escolhaAleatoria], numeroAleatorio);
    }
    let arrayDados = [dados];

    renderCardsTitulo($containerRenderTituloAleatorio, arrayDados);
}

window.addEventListener("DOMContentLoaded", gerarFilmeAleatorio);

$botao.addEventListener("click", gerarFilmeAleatorio)