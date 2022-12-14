import Table from "react-bootstrap/Table";
import React, { useEffect, useState } from "react";


function Tabela({ lista }) {
  let [lista2, setLista2] = useState([]);

  useEffect(() => {
    setLista2(lista);
  }, [lista]);

  return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Filme</th>
            <th>Data</th>
            <th>Horário</th>
            <th>Auditório</th>
            <th>Tipo de Imagem</th>
          </tr>
        </thead>
        <tbody>
          {lista2.map((sessao) => (
            <tr key={sessao.id}>
              <td>{sessao.titulo_filme}</td>
              <td>{sessao.data}</td>
              <td>{sessao.horario}</td>
              <td>{sessao.auditorio}</td>
              <td>{sessao.imagem_tipo}</td>
            </tr>
          ))}
        </tbody>
      </Table>
  );
}

export default Tabela;
