//variaveis

const $navBar = document.querySelector("#navBar");
const distanciaNavBarTopo = $navBar.offsetTop;

//eventos

window.addEventListener("scroll", navBarFixedTop);

//funções

function navBarFixedTop() {
  if (window.scrollY >= distanciaNavBarTopo) {
    $navBar.classList.add("scrolledNavBar");
  } else {
    $navBar.classList.remove("scrolledNavBar");
  }
}
