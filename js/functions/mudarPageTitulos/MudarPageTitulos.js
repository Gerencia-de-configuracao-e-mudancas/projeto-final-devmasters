async function MudarPageTitulos(
  conteiner,
  pageAtual,
  pageLimite,
  eventPageAnterior,
  eventProximaPage
) {
  conteiner.innerHTML = "";

  let divBtnMudarPageTitulo = document.createElement("div");

  divBtnMudarPageTitulo.className = "divBtnMudarPageTitulo";

  if (pageAtual - 1 >= 1) {
    let iconePageAnterior = document.createElement("i");
    iconePageAnterior.className = "bx bxs-chevron-left-circle";

    iconePageAnterior.addEventListener("click", eventPageAnterior);

    divBtnMudarPageTitulo.appendChild(iconePageAnterior);
  }

  let numeroPageAtual = document.createElement("p");
  numeroPageAtual.textContent = `Pagina ${pageAtual}`;

  divBtnMudarPageTitulo.appendChild(numeroPageAtual);

  if (pageAtual + 1 <= pageLimite) {
    let iconeProximaPage = document.createElement("i");
    iconeProximaPage.className = "bx bxs-chevron-right-circle";

    iconeProximaPage.addEventListener("click", eventProximaPage);

    divBtnMudarPageTitulo.appendChild(iconeProximaPage);
  }

  conteiner.appendChild(divBtnMudarPageTitulo);
}

export default MudarPageTitulos;
