import { useUserContext } from 'contexts/UserContext'
import Default from 'pages/Default'
import { Container } from './styles'

const NotFound = () => {
	const { token, user } = useUserContext()

	if (!token || !user) {
		return <Content />
	}

	return (
		<Default>
			<Content />
		</Default>
	)
}

const Content = () => {
	return (
		<Container>
			<p>Não encontramos o recurso solicitado 🤕</p>
			<img src='/assets/404.png' alt='404 Not Found' />
		</Container>
	)
}
 
export default NotFound