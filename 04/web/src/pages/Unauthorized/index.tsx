import Default from 'pages/Default'
import { Container } from './styles'

const Unauthorized = () => {
	return (
		<Default>
			<Container>
				<p>Você não possui permissão para o serviço requisitado</p>
				<img src='/assets/unauthorized.png' alt='Não autorizado' />
			</Container>
		</Default>
	)
}
 
export default Unauthorized