import logoImg from '../../assets/logo.png'
import { Container, Content } from './styles'

export function Header() {
	return (
		<Container>
			<Content>
				<div className="divLogo">
					<img src={logoImg} alt="GJMoney" />
					<h1 className="logoTxt">GJMoney</h1>
				</div>
				<div className="divButton">
					<button type="button">Nova transação</button>
				</div>
			</Content>
		</Container>
	)
} 