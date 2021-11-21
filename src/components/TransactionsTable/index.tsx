import { Container } from "./styles";

export function TransactionsTable(){
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de sistemas</td>
            <td className="deposit">R$ 1200,00</td>
            <td>Desenvolvimento</td>
            <td>30/03/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento de sistemas</td>
            <td className="withdraw">- R$ 1200,00</td>
            <td>Desenvolvimento</td>
            <td>30/03/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento de sistemas</td>
            <td>R$ 1200,00</td>
            <td>Desenvolvimento</td>
            <td>30/03/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento de sistemas</td>
            <td>R$ 1200,00</td>
            <td>Desenvolvimento</td>
            <td>30/03/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}