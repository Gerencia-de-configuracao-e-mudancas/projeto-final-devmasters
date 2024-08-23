import requestAPI from "../../functions/requestAPI/requestAPI.js";

// Variáveis
let currentSlide = 0;
const urlBaseImg = "https://image.tmdb.org/t/p/w500";
const $carrosselSlides = document.querySelector(".carrosselSlides");
const $conteinerIconesSlides = document.querySelector(".iconesSlides");

// Evento

window.addEventListener("DOMContentLoaded", showCarroselSlides);

// Funções

async function showCarroselSlides() {
  let filmesPopulares = await requestAPI("movie/popular");

  // Criar os elementos do carrossel
  let arrayTitulosCarrossel = [...filmesPopulares.results.slice(0, 6)];
  CriarElementosCarrossel(
    arrayTitulosCarrossel,
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
      textTitulo.textContent = titulo.name ? titulo.name : titulo.title;

      let infoIconesSlides = document.createElement("div");

      let iconeStar = document.createElement("i");
      iconeStar.className = "bx bx-star";

      let textNotaTitulo = document.createElement("strong");
      textNotaTitulo.textContent = titulo.vote_average;

      let iconeCalendar = document.createElement("i");
      iconeCalendar.className = "bx bx-calendar";

      let textDataTitulo = document.createElement("strong");
      textDataTitulo.textContent = titulo.release_date
        ? titulo.release_date
        : titulo.first_air_date;

      // Criar ícone
      let icone = document.createElement("span");
      icone.className = indice === 0 ? "dot active" : "dot";

      // Adicionar imagem ao slide e slide ao carrossel
      divSlide.appendChild(img);
      infoSlides.appendChild(textTitulo);
      infoSlides.appendChild(infoIconesSlides);
      infoIconesSlides.appendChild(iconeStar);
      infoIconesSlides.appendChild(textNotaTitulo);
      infoIconesSlides.appendChild(iconeCalendar);
      infoIconesSlides.appendChild(textDataTitulo);
      divSlide.appendChild(infoSlides);
      conteinerSlides.appendChild(divSlide);

      // Adicionar ícone
      conteinerIcones.appendChild(icone);
    });
  }
}
