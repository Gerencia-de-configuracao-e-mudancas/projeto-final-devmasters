//variaveis

const $slides = document.querySelectorAll(".slides");
const $iconesSlides = document.querySelectorAll(".dot");
const $carrosselSlides = document.querySelector(".carrosselSlides");

let currentSlide = 0;
//const $ = document.querySelector();

//eventos

$iconesSlides.forEach((icone, indice) => {
  icone.addEventListener("click", () => {
    showSlide(indice);
  });
});

//intervalos

setInterval(() => {
  if (currentSlide + 1 > $slides.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  showSlide(currentSlide);
}, 5000);

//funções

function showSlide(indice) {
  currentSlide = indice;
  const offSet = -indice * 100;

  $carrosselSlides.style.transform = `translateX(${offSet}%)`;

  $iconesSlides.forEach((icone) => {
    icone.classList.remove("active");
  });
  $iconesSlides[indice].classList.add("active");
}
