import Button from "react-bootstrap/Button";
import axios from "axios";
import Header from "../Components/Header";

function Adicionar2() {
    const addInfo = async () => {
        const post = {
            nome: $nome.value,
            descricao: $descricao.value,
            imagem: $imagem.value,
        };

        await axios.post("http://localhost:3000/combos", post);

        alert("COMBO ADICIONADO COM SUCESSO! 🍕");

        window.location.reload()

    };

    return (
        <div>
            <Header />
            <div style={{ padding: 20, display: "grid", gap: 20 }}>
                <h1>Adicionar Combos</h1>
                <label data="Nome">
                    <input id="$nome" type="text" placeholder="Nome" />
                </label>

                <label data="descricao"><input id="$descricao" type="text" placeholder="Descricão" /></label>
                <label data="imagem"><input id="$imagem" type="text" placeholder="Image" /></label>
                <Button onClick={addInfo} style={{ backgroundColor: 'var(--orange)' }} variant="warning" size="lg">
                    Adicionar Combos
                </Button>{" "}
            </div>
        </div>

    );
}

export default Adicionar2;
