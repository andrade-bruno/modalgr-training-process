import Default from 'pages/Default'
import { Container } from './styles'

const NotFound = () => {
	return (
		<Default>
			<Container>
				<p>Não encontramos o recurso solicitado 🤕</p>
				<img src='/assets/404.png' alt='404 Not Found' />
			</Container>
		</Default>
	)
}
 
export default NotFound