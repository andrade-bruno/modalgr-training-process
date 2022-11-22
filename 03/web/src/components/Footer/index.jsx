import React from 'react';

import Button from 'components/Button';
import Input from 'components/Input';
import Textarea from 'components/Textarea';

import { CopyrightSection, FooterStyle, FooterNav, TalkWithUs } from './styles';

export default function Footer(props) {
    return (
        <>
            <FooterStyle>
                <FooterNav>
                    <img src='/images/logo.png' alt='Alura Geek' />
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
                    <Input type='text' placeholder='Nome' mobileW='100%' tabletW='100%' desktopW='100%' />
                    <Textarea placeholder='Escreva sua mensagem' mobileW='100%' tabletW='100%' desktopW='100%' />
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