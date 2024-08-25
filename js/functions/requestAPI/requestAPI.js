class RequestAPI {
  constructor() {
    this.ApiKey = "90d591526c10ba96419d8d87cb7ba5a8";
    this.urlBaseAPI = "https://api.themoviedb.org/3/";
  }
  async requestMostPopular(tipo) {
    try {
      let urlMontada = `${this.urlBaseAPI}${tipo}/popular?api_key=${this.ApiKey}&language=pt-BR`;
      let data = await fetch(urlMontada);
      let dados = await data.json();
      return dados;
    } catch (error) {
      console.log(error);
    }
  }
  async requestSearch(tipo, nome) {
    try {
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
}

export default RequestAPI;
