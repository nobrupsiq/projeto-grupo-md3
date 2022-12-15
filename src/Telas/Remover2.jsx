import Button from "react-bootstrap/Button";
import axios from "axios";
import Header from "../Components/Header";
import { useEffect } from "react";

function Remover2() {

  function Selects(ar) {
    ar.unshift("Selecione o combo a ser removido")
    $nome.innerHTML = ""
    ar.forEach((e, i) => {
      let op = document.createElement("option")
      if (i == 0) {
        op.setAttribute("disabled", 'true');
        op.setAttribute("selected", 'true');
      }
      op.value = e
      op.innerHTML = e
      $nome.appendChild(op)
    })
  }

  useEffect(() => {
    axios.get("http://localhost:3000/combos").then(e => {
      let nome = []
      e.data.map(el => nome.push(el.nome))
      Selects(nome)
    })
  }, [])

  function mudar() {
    axios.get("http://localhost:3000/combos?nome=" + $nome.value).then(e => $btclick.sid = e.data[0].id)
  }

  function RemoverFilme() {
    if (confirm("Tem certeza que deseja remover?"))
      axios.delete('http://localhost:3000/combos/' + $btclick.sid);

    window.location.reload()

  }

  return (
    <div>
      <Header />
      <div style={{ padding: 20, display: "grid", gap: 20 }}>
        <h1>Remover Combo</h1>
        <select id="$nome" onChange={mudar}>
          <option value="Ação">Ação</option>
        </select>

        <Button id="$btclick" style={{ backgroundColor: 'var(--orange)' }} variant="warning" size="lg" onClick={RemoverFilme} >Remover</Button>
      </div>
    </div>
  );
}

export default Remover2;
