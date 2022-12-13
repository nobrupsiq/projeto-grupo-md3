import Button from "react-bootstrap/Button";
import axios from "axios";
import Header from "../Components/Header";
import { useEffect, useState } from "react";

function RemoverSessao() {

  function Selects(ar) {
    ar.unshift("Escolha")
    $sessao.innerHTML = ""
    ar.forEach((e, i) => {
      let op = document.createElement("option")
      if (i == 0) {
        op.setAttribute("disabled", 'true');
        op.setAttribute("selected", 'true');
      }
      op.value = e
      op.innerHTML = e
      $sessao.appendChild(op)
    })
  }

  useEffect(() => {
    axios.get("http://localhost:3000/sessoes").then(e => {
      let nomes = []
      e.data.map(el => nomes.push(el.filme_id))
      Selects(nomes)
    })
  }, [])

  function mudar() {
    axios.get("http://localhost:3000/sessoes?titulo=" + $sessao.value).then(e => $btclick.sid = e.data[0].id)
  }

  function RemoverS() {
    if (confirm("Tem certeza que deseja remover?"))
      axios.delete('http://localhost:3000/sessoes/' + $btclick.sid);
      
    window.location.reload()
    
  }

  return (
    <div>
      <Header />
      <div style={{ padding: 20, display: "grid", gap: 20 }}>
        <h1>Remover Sessão</h1>
        <select id="$sessao" onChange={mudar}>
          <option value="Ação">Ação</option>
        </select>

        <Button id="$btclick" style={{ backgroundColor: 'var(--orange)' }} variant="warning" size="lg" onClick={RemoverS} >Remover</Button>
      </div>
    </div>
  );
}

export default RemoverSessao;
