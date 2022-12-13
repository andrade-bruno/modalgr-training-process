import React from 'react';
import { NotFoundStyles, Text404, TextMessage } from './styles';

export default function NotFound(props) {
    return (
        <NotFoundStyles>
            <Text404>404</Text404>
            <TextMessage>Oops! Não encontramos a página solicitada</TextMessage>
        </NotFoundStyles>
    )
}