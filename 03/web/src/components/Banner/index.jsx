import React from 'react';

import Button from 'components/Button';
import { BannerStyle } from './styles';

export default function Banner() {
    return (
        <BannerStyle>
            <ul>
                <li>Dezembro Promocional</li>
                <li>Produtos selecionados com 33% de desconto</li>
                <li><Button>Ver Consoles</Button></li>
            </ul>
        </BannerStyle>
    )
}