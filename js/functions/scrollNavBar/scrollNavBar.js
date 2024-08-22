//variaveis

const $navBar = document.querySelectorAll("nav");
const $modalMenuTelasMenores = document.querySelectorAll(
  ".modalMenuTelasMenores"
);
const $iconeMenu = document.querySelectorAll(".iconeMenu");

//eventos

$navBar.forEach((nav) => {
  window.addEventListener("scroll", () => {
    navBarFixedTop(nav);
  });
});

$iconeMenu.forEach((icone, indice) => {
  icone.addEventListener("click", () => {
    showMenu(indice);
    console.log($modalMenuTelasMenores[indice]);
  });
});

$modalMenuTelasMenores.forEach((modal, indice) => {
  modal.addEventListener("click", () => {
    closeMenu(indice);
  });
});

//funções

function navBarFixedTop(nav) {
  if (window.scrollY >= nav.offsetTop) {
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
