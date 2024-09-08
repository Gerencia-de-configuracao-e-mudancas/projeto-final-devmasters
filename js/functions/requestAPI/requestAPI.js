import Loading from "../loading/Loading.js";

class RequestAPI {
  constructor() {
    this.ApiKey = "90d591526c10ba96419d8d87cb7ba5a8";
    this.urlBaseAPI = "https://api.themoviedb.org/3/";
  }
  async requestMostPopular(tipo, page, conteinerLoading) {
    try {
      Loading(conteinerLoading);
      let urlMontada = `${this.urlBaseAPI}${tipo}/popular?api_key=${
        this.ApiKey
      }&language=pt-BR&page=${page ? page : 1}`;
      let data = await fetch(urlMontada);
      let dados = await data.json();
      return dados;
    } catch (error) {
      console.log(error);
    }
  }
  async requestSearch(tipo, nome, conteinerLoading) {
    try {
      Loading(conteinerLoading);
      let urlMontada = `${this.urlBaseAPI}search/${tipo}?api_key=${
        this.ApiKey
      }&query=${encodeURIComponent(nome)}&language=pt-BR`;
      let data = await fetch(urlMontada);
      let dados = await data.json();
      return dados;
    } catch (error) {
      console.log(error);
    }
  }
  async requestWithGenre(tipo, id, conteinerLoading) {
    try {
      Loading(conteinerLoading);
      let urlMontada = `${this.urlBaseAPI}discover/${tipo}?api_key=${this.ApiKey}&language=pt-BR&with_genres=${id}
&language=pt-BR`;
      let data = await fetch(urlMontada);
      let dados = await data.json();
      return dados;
    } catch (error) {
      console.log(error);
    }
  }
  async requestRandomTitulo(tipo, pageAleatoria, conteinerLoading) {
    try {
      Loading(conteinerLoading);
      let urlMontada = `${this.urlBaseAPI}discover/${tipo}?api_key=${this.ApiKey}&language=pt-BR&sort_by=popularity.desc&page=${pageAleatoria}
      &language=pt-BR`;
      let data = await fetch(urlMontada);
      let dados = await data.json();
      let tituloAleatorio =
        dados.results[Math.floor(Math.random() * dados.results.length)];
      return tituloAleatorio;
    } catch (error) {
      console.log(error);
    }
  }
}

export default RequestAPI;
