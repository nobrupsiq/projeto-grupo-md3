import Button from "react-bootstrap/Button";
import axios from "axios";
import Header from "../Components/Header";
import { useEffect } from "react";

function Remover() {

  function Selects(ar) {
    ar.unshift("Selecione o filme a ser removido")
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

  function mudar() {
    axios.get("http://localhost:3000/filmes?titulo=" + $genero.value).then(e => $btclick.sid = e.data[0].id)
  }

  function RemoverFilme() {
    if (confirm("Tem certeza que deseja remover?"))
      axios.delete('http://localhost:3000/filmes/' + $btclick.sid);

    window.location.reload()

  }

  return (
    <div>
      <Header />
      <div style={{ padding: 20, display: "grid", gap: 20 }}>
        <h1>Remover Filme</h1>
        <select id="$genero" onChange={mudar}>
          <option value="Ação">Ação</option>
        </select>

        <Button id="$btclick" style={{ backgroundColor: 'var(--orange)' }} variant="warning" size="lg" onClick={RemoverFilme} >Remover</Button>
      </div>
    </div>
  );
}

export default Remover;
