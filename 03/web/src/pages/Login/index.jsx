import React from 'react';

import Navbar from 'components/Navbar';
import Input from 'components/Input';
import Button from 'components/Button'
import { Container, Main } from './styles';

export default function Login(params) {
    return (
        <Container>
            <Navbar />
            <Main>
                <p><b>Iniciar Sessão</b></p>
                <Input type='email' placeholder='Escreva seu email' mobileW="80%" tabletW="300px" desktopW="420px" />
                <Input type='password' placeholder='Escreva sua senha' mobileW="80%" tabletW="300px" desktopW="420px" />
                <Button mobileW="50%" tabletW="110px" desktopW="420px">Entrar</Button>
            </Main>
        </Container>
    )
};
