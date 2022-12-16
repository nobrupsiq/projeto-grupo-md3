import Button from "react-bootstrap/Button";
import axios from "axios";
import Header from "../Components/Header";
import { useEffect, useState } from "react";

function Atualizar2() {

    let [combos] = useState([])

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
        axios.get("http://localhost:3000/combos").then(e => {
            let nomes = []
            e.data.map(el => nomes.push(el.nome))
            Selects(nomes)
        })
    }, [])


    useEffect(() => {
        Selects(combos)
    }, [combos])


    function mudar() {
        axios.get("http://localhost:3000/combos?nome=" + $genero.value).then(e => {
            let obj = e.data[0]
            $nome.value = obj.nome
            $descricao.value = obj.descricao
            $imagem.value = obj.imagem
            $btclick.sid = obj.id
        })
    }

    function Atualizar2() {

        let obj = {
            nome: $nome.value,
            genero: $genero.value,
            descricao: $descricao.value,
            imagem: $imagem.value,
        }

        axios.put('http://localhost:3000/combos/' + $btclick.sid, obj);

        alert('COMBO ATUALIZADO COM SUCESSO! 🍔')
        window.location.reload()

    }

    return (
        <div>
            <Header />
            <div style={{ padding: 20, display: "grid", gap: 20 }}>
                <h1>Atualizar Combos</h1>
                <select id="$genero" onChange={mudar}>
                    <option value="Ação">Ação</option>
                </select>
                <label data="nome"><input id="$nome" type="text" placeholder="Nome" /></label>
                <label data="descricao"><input id="$descricao" type="text" placeholder="Descricão" /></label>
                <label data="imagem"><input id="$imagem" type="text" placeholder="Image" /></label>
                <Button id="$btclick" style={{ backgroundColor: 'var(--orange)' }} variant="warning" size="lg" onClick={Atualizar2} >Atualizar</Button>
            </div>
        </div>
    );
}

export default Atualizar2;
