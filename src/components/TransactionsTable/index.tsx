// Importações
import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { Container } from './styles'

// Criando interface typescript para transaction
interface Transaction {
	id: number,
	title: string,
	amount: number,
	type: string,
	category: string,
	createdAt: string
}

export function TransactionsTable() {
	// useState armazena um array de Transaction
	const [transactions, setTransactions] = useState<Transaction[]>([])

	// Recuperando as transactions
	useEffect(() => {
		api.get('transactions')
		/* Salvando transações no estado */
		.then(response => setTransactions(response.data.transactions))

	}, [])

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
									<td className={transaction.type}>{transaction.amount}</td>
									<td>{transaction.category}</td>
									<td>{transaction.createdAt}</td>
								</tr>
							)
						})
					}
				</tbody>
			</table>
		</Container>
	)
}