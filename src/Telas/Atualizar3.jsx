import Button from "react-bootstrap/Button";
import axios from "axios";
import Header from "../Components/Header";
import { useEffect, useState } from "react";

function Atualizar3() {

    let [sessoes] = useState([])

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
        axios.get("http://localhost:3000/sessoes").then(e => {
            let nomes = []
            e.data.map(el => nomes.push(el.id))
            Selects(nomes)
        })
    }, [])


    useEffect(() => {
        Selects(sessoes)
    }, [sessoes])


    function mudar() {
        axios.get("http://localhost:3000/sessoes?id=" + $genero.value).then(e => {
            let obj = e.data[0]
            $titulo_filme.value = obj.titulo_filme
            $data.value = obj.data
            $horario.value = obj.horario
            $auditorio.value = obj.auditorio
            $imagem_tipo.value = obj.imagem_tipo
            $btclick.sid = obj.id
        })
    }

    function Atualizar3() {

        let obj = {
            titulo_filme: $titulo_filme.value,
            data: $data.value,
            horario: $horario.value,
            auditorio: $auditorio.value,
            imagem_tipo: $imagem_tipo.value
        }

        axios.put('http://localhost:3000/sessoes/' + $btclick.sid, obj);

        alert('SESSÃO ATUALIZADA COM SUCESSO! 🎥')
        window.location.reload()

    }

    return (
        <div>
            <Header />
            <div style={{ padding: 20, display: "grid", gap: 20 }}>
                <h1>Atualizar Sessões</h1>
                <select id="$genero" onChange={mudar}>
                    <option value="Ação">Ação</option>
                </select>
                <label data="filme"><input id="$titulo_filme" type="text" placeholder="Título do Filme" /></label>
                <label data="data"><input id="$data" type="text" placeholder="Data" /></label>
                <label data="horário"><input id="$horario" type="text" placeholder="Horário" /></label>
                <label data="auditório"><input id="$auditorio" type="text" placeholder="Auditório" /></label>
                <label data="tipo de imagem"><input id="$imagem_tipo" type="text" placeholder="Tipo de Imagem" /></label>
                <Button id="$btclick" style={{ backgroundColor: 'var(--orange)' }} variant="warning" size="lg" onClick={Atualizar3} >Atualizar</Button>
            </div>
        </div>
    );
}

export default Atualizar3;
