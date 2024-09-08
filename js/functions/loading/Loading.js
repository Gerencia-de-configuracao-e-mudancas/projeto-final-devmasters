function Loading(conteiner) {
  conteiner.innerHTML = "";
  let imgLoading = document.createElement("img");
  imgLoading.className = "imgLoading";
  imgLoading.src =
    "https://github.com/Gerencia-de-configuracao-e-mudancas/projeto-final-devmasters/blob/featue/requests-renderGenre/assets/img/Bean%20Eater%401x-1.0s-200px-200px.svg";
  conteiner.appendChild(imgLoading);
}

export default Loading;
