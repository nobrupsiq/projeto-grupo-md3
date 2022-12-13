import Button from "react-bootstrap/Button";
import axios from "axios";
import Header from "../Components/Header";
import { useEffect, useState } from "react";

function AtualizarSessao() {

  let [sessoes, setSessoes] = useState(["computador", "agua"])

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


  useEffect(() => {
    Selects(sessoes)
  }, [sessoes])

  function trocar() {
    setSessoes(['ok', 'a', 'xxx'])
  }

  function mudar() {
    axios.get("http://localhost:3000/filmes?titulo=" + $sessao.value).then(e => {
      let obj = e.data[0]
      $filme_id.value = obj.filme_id
      $data.value = obj.data
      $horario.value = obj.horario
      $auditorio.value = obj.auditorio
      $imagem_tipo.value = obj.imagem_tipo
      $btclick.sid = obj.id
    })
  }

  function Atualizar() {

    let obj = {
      filme_id: $titulo.value,
      data: $genero.value,
      horario: $descricao.value,
      auditorio: $imagem.value,
      imagem_tipo: $trailer.value
    }

    axios.put('http://localhost:3000/sessoes/' + $btclick.sid, obj);


    window.location.reload()

  }

  return (
    <div>
      <Header />
      <div style={{ padding: 20, display: "grid", gap: 20 }}>
        <h1>Atualizar Sessão</h1>
        <select id="$sessao" onChange={mudar}>
          <option value="Ação">Ação</option>
        </select>
        <label data="Filme_id"><input id="$filme_id" type="text" placeholder="ID do Filme" /></label>
        <label data="Data"><input id="$data" type="text" placeholder="Data" /></label>
        <label data="Horário"><input id="$horario" type="text" placeholder="Horário" /></label>
        <label data="Auditório"><input id="$auditorio" type="text" placeholder="Auditório" /></label>
        <label data="Tipo de imagem"><input id="$imagem_tipo" type="text" placeholder="Tipo de Imagem" /></label>
        <Button id="$btclick" style={{ backgroundColor: 'var(--orange)' }} variant="warning" size="lg" onClick={Atualizar} >Atualizar</Button>
      </div>
    </div>
  );
}

export default AtualizarSessao;
