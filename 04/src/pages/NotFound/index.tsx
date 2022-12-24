import { Button } from '@mui/material'
import { useUserContext } from 'contexts/UserContext'
import Default from 'pages/Default'
import { Container } from './styles'
import { useNavigate } from 'react-router-dom'
import { ArrowBackRounded } from '@mui/icons-material'

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
	const navigate = useNavigate()
	
	return (
		<Container>
			<Button color='primary' variant='contained' onClick={() => navigate(-1)}><ArrowBackRounded /> Voltar</Button>
			<p>Não encontramos o recurso solicitado</p>
			<img src='/assets/404.png' alt='404 Not Found' />
		</Container>
	)
}
 
export default NotFound