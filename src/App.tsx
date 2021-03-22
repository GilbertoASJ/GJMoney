import Modal from 'react-modal'
import { useState } from 'react'
import { Dashboard } from './components/Dashboard'
import { GlobalStyle } from './styles/global'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { NewTransactionModal } from './components/NewTransactionModal/'

Modal.setAppElement('#root')

export function App() {

	const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

	function handleOpenNewTransactionModal() {
		setIsNewTransactionModalOpen(true)
	}

	function handleCloseNewTransactionModal() {
		setIsNewTransactionModalOpen(false)
	}

  	return (
    <>
        <Header onOpenNewTransacionModal={handleOpenNewTransactionModal} />
        <Dashboard />
        <Footer />

        <NewTransactionModal 
        	isOpen={isNewTransactionModalOpen} 
        	onRequestClose={handleCloseNewTransactionModal} />


        <GlobalStyle />
    </>
  );
}
