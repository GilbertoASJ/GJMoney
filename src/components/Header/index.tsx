import logoImg from '../../assets/logo.png'
import { Container, Content } from './styles'

interface HeaderProps {
	onOpenNewTransacionModal: () => void;
}

export function Header({ onOpenNewTransacionModal }: HeaderProps) {
	return (
		<Container>
			<Content>
				<div className="divLogo">
					<img src={logoImg} alt="GJMoney" />
					<h1 className="logoTxt">GJMoney</h1>
				</div>
				<div className="divButton">
					<button type="button" onClick={onOpenNewTransacionModal}>Nova transação</button>
				</div>
			</Content>
		</Container>
	)
} 
