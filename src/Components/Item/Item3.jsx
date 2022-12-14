import Table from 'react-bootstrap/Table';

function Item3({ filme_id, data, horario, auditorio, imagem_tipo, id}) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
            <th>ID</th>
            <th>ID Filme</th>
            <th>Data</th>
            <th>Horário</th>
            <th>Auditório</th>
            <th>Tipo de Imagem</th>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td>{ id }</td>
            <td>{ filme_id }</td>
            <td>{ data }</td>
            <td>{ horario }</td>
            <td>{ auditorio }</td>
            <td>{ imagem_tipo }</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Item3;