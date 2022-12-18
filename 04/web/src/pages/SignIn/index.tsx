import Input from 'components/Input'
import { useState } from 'react'
import { Button } from '@mui/material'
import { Box, Container, Details, Form, Logo } from 'styles/commom'
import { FormWrapper } from './styles'
import { BikeImg } from 'pages/SignUp/styles'

const SignIn = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	return (
		<Container>
			<Box>
				<Form style={{justifyContent: 'center'}}>
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
						>
							Entrar
						</Button>
					</FormWrapper>
				</Form>
				<Details>
					<p>Explore seus movimentos! Quanto você já contribuiu para o meio ambiente até hoje?</p>
					<BikeImg src='/assets/vintage-bike.png' alt='Vintage Bike' />
				</Details>
			</Box>
		</Container>
	)
}
 
export default SignIn