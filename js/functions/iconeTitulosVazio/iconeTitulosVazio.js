function iconeTitulosVazio(conteiner) {
  conteiner.innerHTML = "";
  let divIconeTitulosVazio = document.createElement("div");
  divIconeTitulosVazio.className = "divIconeTitulosVazio";

  let p = document.createElement("p");
  p.textContent = "Sem resultados";

  let icone = document.createElement("i");
  icone.className = "bx bxs-cat";

  divIconeTitulosVazio.appendChild(icone);
  divIconeTitulosVazio.appendChild(p);
  conteiner.appendChild(divIconeTitulosVazio);
}

export default iconeTitulosVazio;
