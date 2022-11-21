import React from 'react';

import Input from 'components/Input';
import Navbar from '../../components/Navbar';
import { Container, Main } from './styles';

export default function Login(params) {
    return (
        <Container>
            <Navbar />
            <Main>
                <p><b>Iniciar Sessão</b></p>
                <Input type='email' placeholder='Escreva seu email' />
                <Input type='password' placeholder='Escreva sua senha' />
                <button>Entrar</button>
            </Main>
        </Container>
    )
};
