import React from 'react';

import Button from 'components/Button';

import { CopyrightSection, FooterStyle, FooterNav, TalkWithUs, InputTalkWithUs, TextareaTalkWithUs } from './styles';
import { useNavigate } from 'react-router-dom';

export default function Footer(props) {
    const navigate = useNavigate()
    return (
        <>
            <FooterStyle>
                <FooterNav>
                    <img src='/images/logo.png' alt='Alura Geek' onClick={() => navigate('/')} />
                    <div id='footerItens'>
                        <p>Quem somos nós</p>
                        <p>Política de privacidade</p>
                        <p>Programa fidelidade</p>
                        <p>Nossas lojas</p>
                        <p>Quero ser franqueado</p>
                        <p>Anuncie aqui</p>
                    </div>
                </FooterNav>
                <TalkWithUs>
                    <p><b>Fale conosco</b></p>
                    <InputTalkWithUs type='text' placeholder='Nome' mobileW='100%' tabletW='100%' desktopW='100%' />
                    <TextareaTalkWithUs placeholder='Escreva sua mensagem' mobileW='100%' tabletW='100%' desktopW='100%' />
                    <Button>Enviar mensagem</Button>
                </TalkWithUs>
            </FooterStyle>
            <CopyrightSection>
                <p>Desenvolvido por Bruno Andrade</p>
                <p>© 2022</p>
            </CopyrightSection>
        </>
    )
}