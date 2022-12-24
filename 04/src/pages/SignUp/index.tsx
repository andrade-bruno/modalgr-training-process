import Input from 'components/Input'
import { useState } from 'react'
import { Button, Typography } from '@mui/material'
import { Box, Container, Details, SignInSignUpForm, Logo } from 'styles/commom'
import { BikeImg } from './styles'
import { useCollaboratorsContext } from 'contexts/CollaboratorsContext'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

const SignUp = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')

	const { addColaborator } = useCollaboratorsContext()

	const handleCreateUser = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const today = new Date()
		const currentDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()

		if (password !== confirmPassword) {
			toast.info('Senhas não coincidem, tente novamente')
			return false
		}

		addColaborator({
			nome: name,
			email: email,
			senha: password,
			nivel_id: 3,
			data_registro: currentDate,
			ativo: true
		}, true)
	}

	return (
		<Container>
			<Box>
				<Details>
					<p>Explore seus movimentos! Quanto você já contribuiu para o meio ambiente até hoje?</p>
					<BikeImg src='/assets/vintage-bike.png' alt='Vintage Bike' />
				</Details>
				<SignInSignUpForm onSubmit={e => handleCreateUser(e)}>
					<Logo src='/assets/logo.png' alt='Logo' />
					<Input
						label='Nome'
						value={name}
						setter={setName}
						type='string'
						fullWidth
						required
					/>
					<Input
						label='E-mail'
						value={email}
						setter={setEmail}
						type='email'
						fullWidth
						required
					/>
					<Input
						label='Senha'
						value={password}
						setter={setPassword}
						type='password'
						fullWidth
						required
					/>
					<Input
						label='Confirme a senha'
						value={confirmPassword}
						setter={setConfirmPassword}
						type='password'
						fullWidth
						required
					/>
					<Typography variant='overline' component='h6'>
						Já possui cadastro? <Link style={{ textDecoration: 'none' }} to='/signin'>Acesse a plataforma</Link>
					</Typography>
					<Button
						color="primary"
						disabled={false}
						size="large"
						variant="outlined"
						type='submit'
					>
						Começar
					</Button>
				</SignInSignUpForm>
			</Box>
		</Container>
	)
}
 
export default SignUp