// Importações
import { createContext, useState, useEffect, useContext, ReactNode } from 'react'
import { api } from '../services/api'

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
	createTransaction: (transaction: TransactionInput) => Promise<void>; 
}

// Recupera os valores da interface Transaction omitindo alguns parâmetros
type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

const TransactionsContext = createContext<TransactionsContextData>(
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

	async function createTransaction(transactionInput: TransactionInput) {
		// Atribuindo a resposta quando se faz uma nova transação a uma variável
		const response = await api.post('/transactions', {
			...transactionInput,
			createdAt: new Date(),
		})
		const { transaction } = response.data

		setTransactions([
			...transactions,
			transaction,
		])
	}

	return (
		<TransactionsContext.Provider value={{ transactions, createTransaction }}>	
			{ children }
		</TransactionsContext.Provider>
	)
}

export function useTransactions() {
	const context = useContext(TransactionsContext)

	return context
}