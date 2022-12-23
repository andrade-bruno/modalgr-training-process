import Input from 'components/Input'
import { useState } from 'react'
import { Button } from '@mui/material'
import { Box, Container, SignInSignUpForm, Logo } from 'styles/commom'
import { BackgroundImg } from './styles'
import { useUserContext } from 'contexts/UserContext'

const SignIn = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const { login } = useUserContext()
	
	const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		await login(email, password)
	}

	return (
		<Container>
			<Box>
				<SignInSignUpForm style={{justifyContent: 'center'}} onSubmit={e => handleLogin(e)}>
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
				</SignInSignUpForm>
				<BackgroundImg />
			</Box>
		</Container>
	)
}
 
export default SignIn