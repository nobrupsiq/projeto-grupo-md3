import Button from "react-bootstrap/Button";
import axios from "axios";
import Header from "../Components/Header";
import Buttons from "../Components/Buttons/Buttons";

function Adicionar() {
  const addInfo = async () => {
    const post = {
      titulo: $titulo.value,
      genero: $genero.value,
      descricao: $descricao.value,
      imagem: $imagem.value,
      trailer: $trailer.value,
    };

    await axios.post("http://localhost:3000/filmes", post);

    alert("FILME ADICIONADO COM SUCESSO! ✔");

    window.location.reload()

  };

  return (
    <div>
      <Header />
      <div style={{ padding: 20, display: "grid", gap: 20 }}>
        <h1>Adicionar Filme</h1>
        <label data="titulo">
          <input id="$titulo" type="text" placeholder="Título" />
        </label>
        <label data="gênero">
          <select id="$genero">
            <option value="Ação">Ação</option>
            <option value="Aventura">Aventura</option>
            <option value="Cinema de arte">Cinema de arte</option>
            <option value="Chanchada">Chanchada</option>
            <option value="Comédia">Comédia</option>
            <option value="Comédia de ação">Comédia de ação</option>
            <option value="Comédia de terror">Comédia de terror</option>
            <option value="Comédia dramática">Comédia dramática</option>
            <option value="Comédia romântica">Comédia romântica</option>
            <option value="Dança">Dança</option>
            <option value="Documentário">Documentário</option>
            <option value="Docuficção">Docuficção</option>
            <option value="Drama">Drama</option>
            <option value="Espionagem">Espionagem</option>
            <option value="Faroeste">Faroeste</option>
            <option value="Fantasia">Fantasia</option>
            <option value="Fantasia científica">Fantasia científica</option>
            <option value="Ficção científica">Ficção científica</option>
            <option value="Filmes com truques">Filmes com truques</option>
            <option value="Filmes de guerra">Filmes de guerra</option>
            <option value="Mistério">Mistério</option>
            <option value="Musical">Musical</option>
            <option value="Filme policial">Filme policial</option>
            <option value="Romance">Romance</option>
            <option value="Terror">Terror</option>
            <option value="Thriller">Thriller</option>
          </select>
        </label>


        <label data="descricao"><input id="$descricao" type="text" placeholder="Descricão" /></label>
        <label data="imagem"><input id="$imagem" type="text" placeholder="Image" /></label>
        <label data="trailer"><input id="$trailer" type="text" placeholder="Trailer" /></label>
        <Button onClick={addInfo} style={{ backgroundColor: 'var(--orange)' }} variant="warning" size="lg">
          Adicionar filme
        </Button>{" "}
      </div>
    </div>

  );
}

export default Adicionar;
