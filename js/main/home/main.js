import RequestAPI from "../../functions/requestAPI/requestAPI.js";
import renderCardsTitulo from "../../functions/renderCardsTitulo/renderCardsTitulo.js";
import MudarPageTitulos from "../../functions/mudarPageTitulos/MudarPageTitulos.js";
import ModalInfoTitulo from "../../functions/modalInfoTitulo/ModalInfoTitulo.js";

// Variáveis
let currentSlide = 0;
const urlBaseImg = "https://image.tmdb.org/t/p/w500";
const $carrosselSlides = document.querySelector(".carrosselSlides");
const $conteinerIconesSlides = document.querySelector(".iconesSlides");
const $btnVerMaisFilmes = document.querySelector("#btnVerMaisFilmes");
const $btnVerMenosFilmes = document.querySelector("#btnVerMenosFilmes");
const $btnVerMaisSeries = document.querySelector("#btnVerMaisSeries");
const $btnVerMenosSeries = document.querySelector("#btnVerMenosSeries");
const $contenerRenderFilmes = document.querySelector("#contenerRenderFilmes");
const $contenerRenderSeries = document.querySelector("#contenerRenderSeries");
const $conteinerBtnControlPagesSeries = document.querySelector(
  "#conteinerBtnControlPagesSeries"
);
const $conteinerBtnControlPagesFilmes = document.querySelector(
  "#conteinerBtnControlPagesFilmes"
);
const $infoTituloFilmes = document.querySelector("#infoTituloFilmes");
const $infoTituloSeries = document.querySelector("#infoTituloSeries");
const $modalInfoTitulo = document.querySelector("#divModalHome");
//const $ = document.querySelector();
const pegarDadosAPI = new RequestAPI();

// Evento

window.addEventListener("DOMContentLoaded", () => {
  showCarroselSlides();
  ShowFilmes(1);
  ShowSeries(1);
});

// Funções

async function ShowFilmes(pageFilmes) {
  $btnVerMaisFilmes.classList.remove("hide");
  $btnVerMenosFilmes.classList.add("hide");

  let filmesPopulares = await pegarDadosAPI.requestMostPopular(
    "movie",
    pageFilmes
  );

  MostrarTitulos($contenerRenderFilmes, filmesPopulares, true);

  $btnVerMaisFilmes.addEventListener("click", () => {
    $btnVerMaisFilmes.classList.add("hide");
    $btnVerMenosFilmes.classList.remove("hide");
    MostrarTitulos($contenerRenderFilmes, filmesPopulares, false);
  });

  $btnVerMenosFilmes.addEventListener("click", () => {
    $btnVerMenosFilmes.classList.add("hide");
    $btnVerMaisFilmes.classList.remove("hide");
    MostrarTitulos($contenerRenderFilmes, filmesPopulares, true);
  });

  MudarPageTitulos(
    $conteinerBtnControlPagesFilmes,
    pageFilmes,
    filmesPopulares.total_pages,
    () => {
      ShowFilmes(pageFilmes - 1, false);
      $infoTituloFilmes.scrollIntoView({ behavior: "instant" });
    },
    () => {
      ShowFilmes(pageFilmes + 1, false);
      $infoTituloFilmes.scrollIntoView({ behavior: "instant" });
    }
  );
}

async function ShowSeries(pageSeries) {
  $btnVerMaisSeries.classList.remove("hide");
  $btnVerMenosSeries.classList.add("hide");
  let seriesPopulares = await pegarDadosAPI.requestMostPopular(
    "tv",
    pageSeries
  );

  MostrarTitulos($contenerRenderSeries, seriesPopulares, true);

  $btnVerMaisSeries.addEventListener("click", () => {
    $btnVerMaisSeries.classList.add("hide");
    $btnVerMenosSeries.classList.remove("hide");
    MostrarTitulos($contenerRenderSeries, seriesPopulares, false);
  });

  $btnVerMenosSeries.addEventListener("click", () => {
    $btnVerMenosSeries.classList.add("hide");
    $btnVerMaisSeries.classList.remove("hide");
    MostrarTitulos($contenerRenderSeries, seriesPopulares, true);
  });

  MudarPageTitulos(
    $conteinerBtnControlPagesSeries,
    pageSeries,
    seriesPopulares.total_pages,
    () => {
      ShowSeries(pageSeries - 1, false);
      $infoTituloSeries.scrollIntoView({ behavior: "instant" });
    },
    () => {
      ShowSeries(pageSeries + 1, false);
      $infoTituloSeries.scrollIntoView({ behavior: "instant" });
    }
  );
}

function MostrarTitulos(conteiner, array, isMinimo) {
  if (isMinimo) {
    renderCardsTitulo(conteiner, array.results.slice(0, 4), $modalInfoTitulo);
    return;
  }
  renderCardsTitulo(conteiner, array.results, $modalInfoTitulo);
}

async function showCarroselSlides() {
  let filmesPopulares = await pegarDadosAPI.requestMostPopular("movie");

  // Criar os elementos do carrossel
  let arrayTitulosMostAvaliable = [...filmesPopulares.results].sort(
    (a, b) => b.vote_average - a.vote_average
  );
  CriarElementosCarrossel(
    arrayTitulosMostAvaliable.slice(0, 6),
    $carrosselSlides,
    $conteinerIconesSlides
  );

  // Selecionar os elementos criados dinamicamente após a criação
  const $slides = document.querySelectorAll(".slides");
  const $iconesSlides = document.querySelectorAll(".dot");

  $iconesSlides.forEach((icone, indice) => {
    icone.addEventListener("click", () => {
      showSlide(indice, $iconesSlides);
    });
  });

  // Iniciar o slide no índice 0 SOMENTE APÓS os elementos existirem
  if ($slides.length > 0 && $iconesSlides.length > 0) {
    // Intervalo automático para mudar os slides
    setInterval(() => {
      if (currentSlide + 1 > $slides.length - 1) {
        currentSlide = 0;
      } else {
        currentSlide++;
      }
      showSlide(currentSlide, $iconesSlides);
    }, 5000);
  }
}

function showSlide(indice, $iconesSlides) {
  currentSlide = indice;
  const offSet = -indice * 100;

  // Mover o carrossel
  $carrosselSlides.style.transform = `translateX(${offSet}%)`;

  // Atualizar ícones
  $iconesSlides.forEach((icone) => {
    icone.classList.remove("active");
  });
  $iconesSlides[indice].classList.add("active");
}

function CriarElementosCarrossel(array, conteinerSlides, conteinerIcones) {
  conteinerSlides.innerHTML = "";
  conteinerIcones.innerHTML = "";
  if (array.length > 0) {
    array.forEach((titulo, indice) => {
      // Criar slide
      let divSlide = document.createElement("div");
      divSlide.className = "slides";

      // Criar imagem
      let img = document.createElement("img");
      img.src = `${urlBaseImg}${titulo.backdrop_path}`;
      img.alt = titulo.name ? titulo.name : titulo.title;

      //criar titulo

      let infoSlides = document.createElement("div");
      infoSlides.className = "infoSlides";

      let textTitulo = document.createElement("p");
      textTitulo.textContent = titulo.name
        ? titulo.name.slice(0, 30).toUpperCase()
        : titulo.title.slice(0, 30).toUpperCase();

      let infoIconesSlides = document.createElement("div");

      let iconeStar = document.createElement("i");
      iconeStar.className = "bx bxs-star";

      let textNotaTitulo = document.createElement("strong");
      textNotaTitulo.textContent = `${titulo.vote_average.toFixed(1)}/10`;

      let icone = document.createElement("span");
      icone.className = indice === 0 ? "dot active" : "dot";

      divSlide.addEventListener("click", () => {
        ModalInfoTitulo(titulo, $modalInfoTitulo);
      });

      divSlide.appendChild(img);
      infoSlides.appendChild(textTitulo);
      infoSlides.appendChild(infoIconesSlides);
      infoIconesSlides.appendChild(iconeStar);
      infoIconesSlides.appendChild(textNotaTitulo);
      divSlide.appendChild(infoSlides);
      conteinerSlides.appendChild(divSlide);

      // Adicionar ícone
      conteinerIcones.appendChild(icone);
    });
  }
}
