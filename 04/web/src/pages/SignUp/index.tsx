import Input from 'components/Input'
import { useState } from 'react'
import { Button } from '@mui/material'
import { BikeImg, Box, Container, Details, Form, Logo } from './styles'

const SignUp = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')

	return (
		<Container>
			<Box>
				<Details>
					<p>Explore seus movimentos! Quanto você já contribuiu para o meio ambiente até hoje?</p>
					<BikeImg src='/assets/vintage-bike.png' alt='Vintage Bike' />
				</Details>
				<Form>
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
					<Button
						color="primary"
						disabled={false}
						size="large"
						variant="outlined"
					>
						Começar
					</Button>
				</Form>
			</Box>
		</Container>
	)
}
 
export default SignUp