function Loading(conteiner) {
  conteiner.innerHTML = "";
  let imgLoading = document.createElement("img");
  imgLoading.className = "imgLoading";
  imgLoading.src = "https://gerencia-de-configuracao-e-mudancas.github.io/projeto-final-devmasters/js/functions/loading/Bean%20Eater@1x-1.0s-200px-200px.svg";
  conteiner.appendChild(imgLoading);
}

export default Loading;
