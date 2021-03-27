// Importações
import { Container } from './styles'
import { useTransactions } from '../../hooks/useTransactions'

export function TransactionsTable() {

	const { transactions } = useTransactions()

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
					{	// Toda vez que se utiliza o map, o primeiro elemento após ele precisa de uma key(chave)
						transactions.map(transaction => {
							return (						
								<tr key={transaction.id}>
									<td>{transaction.title}</td>

									<td className={transaction.type}>
										{/* Formatando valor para a moeda brasileira vigente */}
										{new Intl.NumberFormat('pt-BR', {
											style: 'currency',
											currency: 'BRL'
										}). format(transaction.amount)}
									</td>
									<td>{transaction.category}</td>

									<td>
										{/* Formatando data para formato brasileiro */}
										{new Intl.DateTimeFormat('pt-BR').format(
											new Date(transaction.createdAt)
										)}
									</td>
								</tr>
							)
						})
					}
				</tbody>
			</table>
		</Container>
	)
}