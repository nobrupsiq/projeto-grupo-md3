import Button from "react-bootstrap/Button";
import axios from "axios";
import Header from "../Components/Header";
import { useEffect, useState } from "react";

function Adicionar3() {
  function Selects(ar) {
    ar.unshift("Escolha");
    $genero.innerHTML = "";
    ar.forEach((e, i) => {
      let op = document.createElement("option");
      if (i == 0) {
        op.setAttribute("disabled", "true");
        op.setAttribute("selected", "true");
      }
      op.value = e;
      op.innerHTML = e;
      $genero.appendChild(op);
    });
  }

  useEffect(() => {
    axios.get("http://localhost:3000/filmes").then((e) => {
      let nomes = [];
      e.data.map((el) => nomes.push(el.titulo));
      Selects(nomes);
    });
  }, []);

  const addInfo = async () => {
    const post = {
      titulo_filme: $genero.value,
      data: $data.value,
      horario: $horario.value,
      auditorio: $auditorio.value,
      imagem_tipo: $imagem_tipo.value,
    };

    await axios.post("http://localhost:3000/sessoes", post);

    alert("SESSÃO ADICIONADA COM SUCESSO! 🎥");

    window.location.reload();
  };

  return (
    <div>
      <Header />
      <div style={{ padding: 20, display: "grid", gap: 20 }}>
        <h1>Adicionar Sessão</h1>
        <label data="Filme">
          <select id="$genero" >
            <option value="Ação">Ação</option>
          </select>
        </label>
        <label data="Auditório">
          <select id="$auditorio">
            <option value="Sala 1">Sala 1</option>
            <option value="Sala 2">Sala 2</option>
            <option value="Sala 3">Sala 3</option>
            <option value="Sala 4">Sala 4</option>
            <option value="Sala 5">Sala 5</option>
          </select>
        </label>
        <label data="Tipo">
          <select id="$imagem_tipo" >
            <option value="3D">3D</option>
            <option value="2D">2D</option>
            <option value="4D">4D</option>
          </select>
        </label>
        <label data="Data">
          <input id="$data" type="date" placeholder="Data" />
        </label>
        <label data="Horário">
          <input id="$horario" type="text" placeholder="Horário" />
        </label>
        <Button
          onClick={addInfo}
          style={{ backgroundColor: "var(--orange)" }}
          variant="warning"
          size="lg"
        >
          Adicionar sessão
        </Button>{" "}
      </div>
    </div>
  );
}

export default Adicionar3;
