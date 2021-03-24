// Importações
import Modal from 'react-modal'
import closeImg from '../../assets/close.svg'
import incomeImage from '../../assets/income.svg'
import outcomeImage from '../../assets/outcome.svg'
import { Container, TransactionTypeContainer, RadioBox } from './styles'
import { useState, FormEvent } from 'react'

interface NewTransactionModalProps {
	isOpen: boolean;
	onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
	const [title, setTitle] = useState('')
	const [value, setValue] = useState(0)
	const [category, setCategory] = useState('')
	const [type, setType] = useState('deposit')

	// Função a ser executada quando o formulário do modal 'receber um submit'.
	function handleCreateNewTransaction(event: FormEvent) {
		// Evitando o comportamento padrão do evento FormEvent do HTML:
		event.preventDefault()

	}

	// Retorno do HTML 
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
		    <Container onSubmit={handleCreateNewTransaction}>
				<h2>Cadastrar transação</h2>

				<input 
					type="text" 
					placeholder="Título" 
					value={title}
					onChange={event => setTitle(event.target.value)}
				/>

				<input 
					type="number" 
					placeholder="Valor" 
					value={value}
					onChange={event => setValue(Number(event.target.value))}
				/>

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

				<input 
					type="text" 
					placeholder="Categoria" 
					value={category}
					onChange={event => setCategory(event.target.value)}
				/>

				<button type="submit">Cadastrar</button>

			</Container>
		</Modal>
	)
}
