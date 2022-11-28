import React from 'react';

import Button from 'components/Button';
import { BannerStyle } from './styles';

export default function Banner() {
    const ScrollTo = () => {
        const section = document.querySelector('#sectionConsoles')
        return section ? section.scrollIntoView() : null
    }

    return (
        <BannerStyle>
            <ul>
                <li>Dezembro Promocional</li>
                <li>Produtos selecionados com 33% de desconto</li>
                <li><Button onClick={ScrollTo}>Ver Consoles</Button></li>
            </ul>
        </BannerStyle>
    )
}