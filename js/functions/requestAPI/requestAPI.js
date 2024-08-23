const urlAPI = "https://api.themoviedb.org/3/";
const ApiKey = "90d591526c10ba96419d8d87cb7ba5a8";

async function requestAPI(tipo, nome) {
  try {
    let urlMontada = `${urlAPI}${tipo}?api_key=${ApiKey}${
      nome ? `&query=${encodeURIComponent(nome)}` : ""
    }&language=pt-BR`;
    let data = await fetch(urlMontada);
    let dados = await data.json();
    return dados;
  } catch (error) {
    console.log(error);
  }
}

export default requestAPI;
