import Modal from 'react-modal'
import closeImg from '../../assets/close.svg'
import incomeImage from '../../assets/income.svg'
import outcomeImage from '../../assets/outcome.svg'
import { Container, TransactionTypeContainer, RadioBox } from './styles'
import { useState } from 'react'

interface NewTransactionModalProps {
	isOpen: boolean;
	onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
	const [type, setType] = useState('deposit')

	{ /* Retorno do HTML */ }
	return (
		<Modal 
			isOpen={isOpen} 
			onRequestClose={onRequestClose} 
			overlayClassName="react-modal-overlay" 
			className="react-modal-content"	
		>

		<button 
			type="button" 
			onClick={onRequestClose} 
			className="react-modal-close"
		>
			<img src={closeImg} alt="Fechar modal" />
		</button>

			{ /* Início Container */ }
		    <Container>
				<h2>Cadastrar transação</h2>

				<input type="text" placeholder="Título" />
				<input type="number" placeholder="Valor" />

				{ /* Início TransactionTypeContainer */ }
				<TransactionTypeContainer>
					
					<RadioBox 
						type="button" 
						onClick={() => { setType('deposit')}}
						isActive={type === 'deposit'}
						activeColor="green"
					>
						<img src={incomeImage} alt="Entrada" />
						<span>Entrada</span>
					</RadioBox>

					<RadioBox 
						type="button" 
						onClick={() => { setType('withdraw')}}
						isActive={type === 'withdraw'}
						activeColor="red"
					>
						<img src={outcomeImage} alt="Saída" />
						<span>Saída</span>
					</RadioBox>

				</TransactionTypeContainer>

				<input type="text" placeholder="Categoria" />

				<button type="submit">Cadastrar</button>

			</Container>
		</Modal>
	)
}
