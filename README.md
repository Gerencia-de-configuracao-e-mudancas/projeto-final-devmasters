# DevMasters - Aplicação web sobre filmes e séries em conjunto com a API do TMDB

### Projeto da disciplina de Gerência de Configuração e Mudanças

O projeto é um site de recomendações de filmes e séries, que apresenta 4 páginas com objetivos diferentes. <br>


🏠 <b>Inicio:</b> Página inicial do site onde mostra alguns dos filmes e séries mais famosos da atualidade.<br>
🔎 <b>Buscar:</b> Serve para buscar um filme e série que você deseje e ver a nota de avaliação dele e outras características.<br>
🎬 <b>Recomendação:</b> Filmes e séries são gerados aleatoriamente de nossas recomendações para o usuário assistir.<br>
❤️ <b>Meus favoritos:</b> Filmes e séries que o usuário se interessa e coloca nos favoritos para assistir posteriormente.


### Tecnologias ultilizadas

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](    https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

### Comunicação e interação com a API do TMDB

<b>Popularidade:</b>
<div style="background-color: black; border-radius: 10px;">

```javascript
fetch("https://api.themoviedb.org/3/TIPO/popular?api_key=CHAVE_API&language=pt-BR&page=PAGE")
```

</div>


<b>Busca:</b>
<div style="background-color: black; border-radius: 10px;">

```javascript
fetch("https://api.themoviedb.org/3/search/TIPO?api_key=CHAVE_API&query=NOME_BUSCA&language=pt-BR&page=PAGE")
```

</div>

<b>Busca por gênero:</b>
<div style="background-color: black; border-radius: 10px;">

```javascript
fetch("https://api.themoviedb.org/3/discover/TIPO?api_key=CHAVE_API&language=pt-BR&&with_genres=ID_GENERO&page=PAGE")
```

</div>

<b>Busca por séries e filmes aleatórios:</b> 
<div style="background-color: black; border-radius: 10px;">

```javascript
fetch("https://api.themoviedb.org/3/discover/TIPO?api_key=CHAVE_API&sort_by=popularity.desc&page=PAGINA&language=pt-BR")
```

</div>

### Site

<div align="center">
    <figure>
        <img src="./assets/img/inicio.jpg" alt="Tela Inicial" width="300" />
        <figcaption>Tela Inicial</figcaption>
    </figure>
    <figure>
        <img src="./assets/img/descricao.jpg" alt="Descrição" width="300" />
        <figcaption>Descrição</figcaption>
    </figure>
    <figure>
        <img src="./assets/img/busca.jpg" alt="Busca" width="300" />
        <figcaption>Busca</figcaption>
    </figure>
    <figure>
        <img src="./assets/img/recomendações.jpg" alt="Recomendações" width="300" />
        <figcaption>Recomendações</figcaption>
    </figure>
    <figure>
        <img src="./assets/img/meusfavoritos.jpg" alt="Meus Favoritos" width="300" />
        <figcaption>Meus Favoritos</figcaption>
    </figure>
</div>