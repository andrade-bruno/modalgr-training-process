import React from 'react';

import Input from 'components/Input';

import { Container, LoginButton } from './styles';
import { useUserContext } from 'contexts/user';
import { toast } from 'react-toastify';
import { Windmill } from 'react-activity';

export default function Login(params) {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [isLoading, setIsLoading] = React.useState(false)

    const { login } = useUserContext()

    const handleLogin = async () => {
        setIsLoading(true)
        if (!email || !password) {
            toast('Por favor digite seu email e senha.')
            setIsLoading(false)
            return false
        }
        await login({ email, password })
        setIsLoading(false)
    }

    return (
        <Container>
            <p><b>Iniciar Sessão</b></p>
            <Input type='email' placeholder='Escreva seu email' mobileW="80%" tabletW="300px" desktopW="420px" value={email} onChange={setEmail} />
            <Input type='password' placeholder='Escreva sua senha' mobileW="80%" tabletW="300px" desktopW="420px" value={password} onChange={setPassword} />
            <LoginButton mobileW="50%" tabletW="110px" desktopW="420px" onClick={handleLogin} disabled={isLoading}>{isLoading ? <Windmill /> : 'Entrar'}</LoginButton>
        </Container>
    )
};
