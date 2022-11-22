import React from 'react';

import Input from 'components/Input';
import Button from 'components/Button'

import { Container } from './styles';

export default function Login(params) {
    return (
        <Container>
            <p><b>Iniciar Sessão</b></p>
            <Input type='email' placeholder='Escreva seu email' mobileW="80%" tabletW="300px" desktopW="420px" />
            <Input type='password' placeholder='Escreva sua senha' mobileW="80%" tabletW="300px" desktopW="420px" />
            <Button mobileW="50%" tabletW="110px" desktopW="420px">Entrar</Button>
        </Container>
    )
};
