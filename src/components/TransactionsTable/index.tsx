import { Container } from './styles'

export function TransactionsTable() {
	return (
		<Container>
			<table>
				<thead>
					<tr>
						<th>Título</th>
						<th>Valor</th>
						<th>Categoria</th>
						<th>Data</th>
					</tr>
				</thead>

				<tbody>
					<tr>
						<td>Website</td>
						<td className="deposit">R$700,00</td>
						<td>Desenvolvimento</td>
						<td>10/02/2021</td>
					</tr>
					<tr>
						<td>Peças computador</td>
						<td className="withdraw">- R$200,00</td>
						<td>Hardware</td>
						<td>01/03/2021</td>
					</tr>
				</tbody>
			</table>
		</Container>
	)
}