import { useUserContext } from 'contexts/UserContext'
import Default from 'pages/Default'
import { Container } from './styles'

const Unauthorized = () => {
	const { user } = useUserContext()

	if (!user.nivel_id) return null

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