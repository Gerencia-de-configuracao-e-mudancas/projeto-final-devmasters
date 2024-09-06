import ModalInfoTitulo from "../modalInfoTitulo/ModalInfoTitulo.js";

function renderCardsTitulo(conteiner, lista, modal) {
  conteiner.innerHTML = "";
  lista.forEach((titulo, indice) => {
    if (titulo.poster_path && titulo.adult === false) {
      const card = document.createElement("div");
      card.classList.add("cardTitulo");

      const imgCard = document.createElement("img");
      imgCard.src = `https://image.tmdb.org/t/p/w500${titulo.poster_path}`;

      let textTitulo = document.createElement("p");
      textTitulo.textContent = titulo.name
        ? titulo.name.slice(0, 20)
        : titulo.title.slice(0, 20);

      card.appendChild(imgCard);
      card.appendChild(textTitulo);
      conteiner.appendChild(card);

      card.addEventListener("click", () => {
        ModalInfoTitulo(titulo, modal);
      });
    }
  });
}

export default renderCardsTitulo;
