import Input from 'components/Input'
import { useState } from 'react'
import { Button } from '@mui/material'
import { Box, Container, Details, SignInSignUpForm, Logo } from 'styles/commom'
import { FormWrapper } from './styles'
import { BikeImg } from 'pages/SignUp/styles'
import { useUserContext } from 'contexts/UserContext'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const navigate = useNavigate()
	const { login } = useUserContext()
	
	const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		await login(email, password)
		navigate('/')
	}

	return (
		<Container>
			<Box>
				<SignInSignUpForm style={{justifyContent: 'center'}} onSubmit={e => handleLogin(e)}>
					<FormWrapper>
						<Logo src='/assets/logo.png' alt='Logo' />
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
						<Button
							color="primary"
							disabled={false}
							size="large"
							variant="outlined"
							type='submit'
						>
							Entrar
						</Button>
					</FormWrapper>
				</SignInSignUpForm>
				<Details>
					<p>Explore seus movimentos! Quanto você já contribuiu para o meio ambiente até hoje?</p>
					<BikeImg src='/assets/vintage-bike.png' alt='Vintage Bike' />
				</Details>
			</Box>
		</Container>
	)
}
 
export default SignIn