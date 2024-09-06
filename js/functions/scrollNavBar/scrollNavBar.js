//variaveis

const $navBar = document.querySelectorAll("nav");
const $modalMenuTelasMenores = document.querySelectorAll(
  ".modalMenuTelasMenores"
);
const $iconeMenu = document.querySelectorAll(".iconeMenu");

//eventos

$navBar.forEach((nav) => {
  const navOffSetTop = nav.offsetTop;
  window.addEventListener("scroll", () => {
    navBarFixedTop(nav, navOffSetTop);
  });
});

$iconeMenu.forEach((icone, indice) => {
  icone.addEventListener("click", () => {
    showMenu(indice);
  });
});

$modalMenuTelasMenores.forEach((modal, indice) => {
  modal.addEventListener("click", () => {
    closeMenu(indice);
  });
});

//funções

function navBarFixedTop(nav, navOffSetTop) {
  if (window.scrollY >= navOffSetTop) {
    nav.classList.add("scrolledNavBar");
  } else {
    nav.classList.remove("scrolledNavBar");
  }
}

function showMenu(indice) {
  $modalMenuTelasMenores[indice].style.display = "flex";
}

function closeMenu(indice) {
  $modalMenuTelasMenores[indice].style.display = "none";
}
