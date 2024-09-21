class ListaFavoritos {
  constructor() {
    this.meusFavoritos = new Map(
      localStorage.getItem("listaFavoritos") !== null
        ? JSON.parse(localStorage.getItem("listaFavoritos"))
        : []
    );
  }
  adicionarTitulo(id, titulo) {
    this.meusFavoritos.set(id, titulo);
    this.salvarListaLocalStorege();
  }
  removerTitulo(id) {
    this.meusFavoritos.delete(id);
    this.salvarListaLocalStorege();
  }
  salvarListaLocalStorege() {
    let listaEntidades = this.meusFavoritos.entries();
    let arrayListaEntidades = Array.from(listaEntidades);
    localStorage.setItem("listaFavoritos", JSON.stringify(arrayListaEntidades));
  }
  isTituloFavorito(id) {
    return this.meusFavoritos.has(id);
  }
  pegarTitulos() {
    return Array.from(this.meusFavoritos.values());
  }
}

export default ListaFavoritos;
