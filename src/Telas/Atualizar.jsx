import Button from "react-bootstrap/Button";
import axios from "axios";
import Header from "../Components/Header";
import { useEffect, useState } from "react";

function Atualizar() {

  let [filmes, setFilmes] = useState(["computador", "agua"])

  function Selects(ar) {
    ar.unshift("Escolha")
    $genero.innerHTML = ""
    ar.forEach((e, i) => {
      let op = document.createElement("option")
      if (i == 0) {
        op.setAttribute("disabled", 'true');
        op.setAttribute("selected", 'true');
      }
      op.value = e
      op.innerHTML = e
      $genero.appendChild(op)
    })
  }

  useEffect(() => {
    axios.get("http://localhost:3000/filmes").then(e => {
      let nomes = []
      e.data.map(el => nomes.push(el.titulo))
      Selects(nomes)
    })
  }, [])


  useEffect(() => {
    Selects(filmes)
  }, [filmes])

  function trocar() {
    setFilmes(['ok', 'a', 'xxx'])
  }

  function mudar() {
    axios.get("http://localhost:3000/filmes?titulo=" + $genero.value).then(e => {
      let obj = e.data[0]
      $titulo.value = obj.titulo
      $descricao.value = obj.descricao
      $imagem.value = obj.imagem
      $trailer.value = obj.trailer
      $btclick.sid = obj.id
    })
  }

  function Atualizar() {

    let obj = {
      titulo: $titulo.value,
      genero: $genero.value,
      descricao: $descricao.value,
      imagem: $imagem.value,
      trailer: $trailer.value
    }

    axios.put('http://localhost:3000/filmes/' + $btclick.sid, obj);

    alert('FILME ATUALIZADO COM SUCESSO! ✔')
    window.location.reload()

  }

  return (
    <div>
      <Header />
      <div style={{ padding: 20, display: "grid", gap: 20 }}>
        <h1>Atualizar Filme</h1>
        <select id="$genero" onChange={mudar}>
          <option value="Ação">Ação</option>
        </select>
        <label data="titulo"><input id="$titulo" type="text" placeholder="Título" /></label>
        <label data="descricao"><input id="$descricao" type="text" placeholder="Descricão" /></label>
        <label data="imagem"><input id="$imagem" type="text" placeholder="Image" /></label>
        <label data="trailer"><input id="$trailer" type="text" placeholder="Trailer" /></label>
        <Button id="$btclick" style={{ backgroundColor: 'var(--orange)' }} variant="warning" size="lg" onClick={Atualizar} >Atualizar</Button>
      </div>
    </div>
  );
}

export default Atualizar;
