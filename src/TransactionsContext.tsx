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

interface TransactionsContextData {
	transactions: Transaction[];
	createTransaction: (transaction: TransactionInput) => void; 
}

// Recupera os valores da interface Transaction omitindo alguns parâmetros
type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

export const TransactionsContext = createContext<TransactionsContextData>(
	// Fazendo com que o typescript entenda que o contexto está corretamente tipado
	{} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
	// useState armazena um array de Transaction
	const [transactions, setTransactions] = useState<Transaction[]>([])

	// Recuperando as transactions
	useEffect(() => {
		api.get('transactions')
		/* Salvando transações no estado */
		.then(response => setTransactions(response.data.transactions))

	}, []);

	function createTransaction(transaction: TransactionInput) {
		api.post('/transactions', transaction)

	}

	return (
		<TransactionsContext.Provider value={{ transactions, createTransaction }}>	
			{ children }
		</TransactionsContext.Provider>
	)
}