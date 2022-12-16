import Button from "react-bootstrap/Button";
import axios from "axios";
import Header from "../Components/Header";
import { useEffect } from "react";

function Remover3() {

  function Selects(ar) {
    ar.unshift("Escolha")
    $id.innerHTML = ""
    ar.forEach((e, i) => {
      let op = document.createElement("option")
      if (i == 0) {
        op.setAttribute("disabled", 'true');
        op.setAttribute("selected", 'true');
      }
      op.value = e
      op.innerHTML = e
      $id.appendChild(op)
    })
  }

  useEffect(() => {
    axios.get("http://localhost:3000/sessoes").then(e => {
      let nome = []
      e.data.map(el => nome.push(el.id))
      Selects(nome)
    })
  }, [])

  function mudar() {
    axios.get("http://localhost:3000/sessoes?id=" + $id.value).then(e => $btclick.sid = e.data[0].id)
  }

  function RemoverSessao() {
    if (confirm("TEM CERTEZA QUE DESEJA REMOVER A SESSÃO? 😥")) {
      axios.delete('http://localhost:3000/sessoes/' + $btclick.sid);
      alert('SESSÃO REMOVIDA COM SUCESSO! ✔')
    }

    window.location.reload()

  }

  return (
    <div>
      <Header />
      <div style={{ padding: 20, display: "grid", gap: 20 }}>
        <h1>Remover Sessão</h1>
        <select id="$id" onChange={mudar}>
          <option value="Ação">Ação</option>
        </select>

        <Button id="$btclick" style={{ backgroundColor: 'var(--orange)' }} variant="warning" size="lg" onClick={RemoverSessao} >Remover</Button>
      </div>
    </div>
  );
}

export default Remover3;
