function Loading(conteiner) {
  conteiner.innerHTML = "";
  let imgLoading = document.createElement("img");
  imgLoading.className = "imgLoading";
  imgLoading.src = "./assets/img/Bean Eater@1x-1.0s-200px-200px.svg";
  conteiner.appendChild(imgLoading);
}

export default Loading;
