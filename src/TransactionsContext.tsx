// Importações
import { createContext, useState, useEffect, ReactNode } from 'react'
import { api } from './services/api'

// Criando interface typescript para transaction
interface Transaction {
	id: number,
	title: string,
	amount: number,
	type: string,
	category: string,
	createdAt: string
}

interface TransactionsProviderProps {
	children: ReactNode;
}

export const TransactionsContext = createContext<Transaction[]>([])

export function TransactionsProvider({ children }: TransactionsProviderProps) {
	// useState armazena um array de Transaction
	const [transactions, setTransactions] = useState<Transaction[]>([])

	// Recuperando as transactions
	useEffect(() => {
		api.get('transactions')
		/* Salvando transações no estado */
		.then(response => setTransactions(response.data.transactions))

	}, []);

	return (
		<TransactionsContext.Provider value={transactions}>	
			{ children }
		</TransactionsContext.Provider>
	)
}