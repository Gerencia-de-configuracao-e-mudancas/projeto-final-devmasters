import ListaFavoritos from "../listaFavoritos/ListaFavoritos.js";
import renderCardsTitulo from "../renderCardsTitulo/renderCardsTitulo.js";

const minhaLista = new ListaFavoritos();

function ModalInfoTitulo(titulo, modal, isPageFavoritos, conteiner) {
  modal.classList.remove("hide");

  let divModalCentral = document.createElement("div");
  divModalCentral.className = "divModalCentral";

  let modalTitulo = document.createElement("p");
  modalTitulo.className = "modalTitulo";
  modalTitulo.textContent = titulo.name || titulo.title;

  let divImg = document.createElement("div");
  divImg.className = "divImg";

  let modalImg = document.createElement("img");
  modalImg.src = titulo.backdrop_path
    ? `https://image.tmdb.org/t/p/w500${titulo.backdrop_path}`
    : "";

  let divOverview = document.createElement("div");
  divOverview.className = "divOverview";

  let paragrafoOverview = document.createElement("p");
  paragrafoOverview.textContent = titulo.overview;

  let divInfoMidiaTitulo = document.createElement("div");
  divInfoMidiaTitulo.className = "divInfoMidiaTitulo";

  let popularity = document.createElement("p");
  popularity.textContent = titulo.popularity;

  let iconePopularity = document.createElement("i");
  iconePopularity.className = "bx bxs-hot";

  let vote_average = document.createElement("p");
  vote_average.textContent = titulo.vote_average.toFixed(1);

  let iconeVote = document.createElement("i");
  iconeVote.className = "bx bxs-star";

  let release_date = document.createElement("p");
  release_date.textContent = titulo.release_date
    ? titulo.release_date.slice(0, 4)
    : titulo.first_air_date.slice(0, 4);

  let iconeDate = document.createElement("i");
  iconeDate.className = "bx bxs-calendar";

  let divFavoritarTitulo = document.createElement("div");
  divFavoritarTitulo.className = "divFavoritarTitulo";

  divFavoritarTitulo.addEventListener("click", () => {
    divFavoritarTitulo.classList.add("hide");
    divTituloFavorito.classList.remove("hide");
    minhaLista.adicionarTitulo(titulo.id, titulo);
    if (isPageFavoritos) {
      renderCardsTitulo(
        conteiner,
        minhaLista.pegarTitulos(),
        modal,
        isPageFavoritos
      );
    }
  });

  let iconeHeart = document.createElement("i");
  iconeHeart.className = "bx bx-heart";

  let divTituloFavorito = document.createElement("div");
  divTituloFavorito.className = "divTituloFavorito";

  if (minhaLista.isTituloFavorito(titulo.id)) {
    divFavoritarTitulo.classList.add("hide");
  } else {
    divTituloFavorito.classList.add("hide");
  }

  divTituloFavorito.addEventListener("click", () => {
    divFavoritarTitulo.classList.remove("hide");
    divTituloFavorito.classList.add("hide");
    minhaLista.removerTitulo(titulo.id);
    if (isPageFavoritos) {
      renderCardsTitulo(
        conteiner,
        minhaLista.pegarTitulos(),
        modal,
        isPageFavoritos
      );
    }
  });

  let iconeHeartFavoritado = document.createElement("i");
  iconeHeartFavoritado.className = "bx bxs-heart";

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      divModalCentral.remove();
      modal.classList.add("hide");
    }
  });

  divModalCentral.appendChild(modalTitulo);
  divImg.appendChild(modalImg);
  divModalCentral.appendChild(divImg);
  divOverview.appendChild(paragrafoOverview);
  divModalCentral.appendChild(divOverview);
  divInfoMidiaTitulo.appendChild(vote_average);
  divInfoMidiaTitulo.appendChild(iconeVote);
  divInfoMidiaTitulo.appendChild(popularity);
  divInfoMidiaTitulo.appendChild(iconePopularity);
  divInfoMidiaTitulo.appendChild(release_date);
  divInfoMidiaTitulo.appendChild(iconeDate);
  divModalCentral.appendChild(divInfoMidiaTitulo);
  divFavoritarTitulo.appendChild(iconeHeart);
  divModalCentral.appendChild(divFavoritarTitulo);
  divTituloFavorito.appendChild(iconeHeartFavoritado);
  divModalCentral.appendChild(divTituloFavorito);
  modal.appendChild(divModalCentral);
}

export default ModalInfoTitulo;
