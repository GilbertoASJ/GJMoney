// Importações
import Modal from 'react-modal'
import { useState } from 'react'
import { Dashboard } from './components/Dashboard'
import { GlobalStyle } from './styles/global'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { NewTransactionModal } from './components/NewTransactionModal/'
import { TransactionsContext } from './TransactionsContext'

Modal.setAppElement('#root')

export function App() {

    // Variáveis e funções do modal
	const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

	function handleOpenNewTransactionModal() {
		setIsNewTransactionModalOpen(true)
	}

	function handleCloseNewTransactionModal() {
		setIsNewTransactionModalOpen(false)
	}

    // Retorno do conteúdo
  	return (
        <TransactionsContext.Provider value={[]}>
            <Header onOpenNewTransacionModal={handleOpenNewTransactionModal} />
            <Dashboard />
            <Footer />

            <NewTransactionModal 
            	isOpen={isNewTransactionModalOpen} 
            	onRequestClose={handleCloseNewTransactionModal} />
            <GlobalStyle />
        </TransactionsContext.Provider>
    );
}
